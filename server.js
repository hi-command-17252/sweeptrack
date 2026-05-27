const express = require('express');
const cors = require('cors');
const RSSParser = require('rss-parser');
const path = require('path');

const app = express();
const parser = new RSSParser();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins (needed for iPad/other devices on same network)
app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Default RSS feeds
const defaultFeeds = [
  {
    name: 'Sweepstakes Advantage',
    url: 'https://www.sweepsadvantage.com/rss.xml',
    category: 'general'
  },
  {
    name: 'Sweeties Sweeps',
    url: 'https://sweetiessweeps.com/feed/',
    category: 'general'
  },
  {
    name: 'Contest Girl',
    url: 'https://www.contestgirl.com/rss.php',
    category: 'general'
  }
];

// Vehicle-related keywords for filtering
const vehicleKeywords = [
  'car', 'vehicle', 'truck', 'suv', 'auto', 'ford', 'chevy', 'chevrolet',
  'toyota', 'honda', 'jeep', 'dodge', 'ram', 'mustang', 'corvette', 'camaro',
  'motorcycle', 'atv', 'rv', 'camper', 'boat', 'tesla', 'bmw', 'mercedes',
  'lexus', 'audi', 'porsche', 'ferrari', 'lamborghini', 'drive', 'wheels',
  'harley', 'polaris', 'can-am', 'kawasaki', 'yamaha', 'nissan', 'hyundai',
  'kia', 'subaru', 'mazda', 'volkswagen', 'vw', 'gmc', 'cadillac', 'buick',
  'chrysler', 'lincoln', 'infiniti', 'acura', 'jaguar', 'land rover', 'volvo',
  'bronco', 'wrangler', 'tacoma', 'f-150', 'f150', 'silverado', 'tundra'
];

function isVehicleRelated(item) {
  const text = `${item.title || ''} ${item.description || ''}`.toLowerCase();
  return vehicleKeywords.some(keyword => text.includes(keyword));
}

// API: Fetch RSS feeds
app.post('/api/fetch-feeds', async (req, res) => {
  const feeds = req.body.feeds || defaultFeeds;
  const results = [];

  for (const feed of feeds) {
    try {
      const parsed = await parser.parseURL(feed.url);
      const items = parsed.items.map(item => ({
        id: Buffer.from(item.link || item.guid || item.title || '').toString('base64').slice(0, 20),
        title: item.title || 'Untitled',
        link: item.link || '',
        description: item.contentSnippet || item.content || '',
        pubDate: item.pubDate || new Date().toISOString(),
        source: feed.name,
        category: feed.category,
        isVehicle: isVehicleRelated({
          title: item.title,
          description: item.contentSnippet || item.content || ''
        })
      }));
      results.push(...items);
    } catch (error) {
      console.error(`Error fetching feed ${feed.name}:`, error.message);
    }
  }

  // Sort by date, newest first
  results.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  res.json({ success: true, items: results });
});

// API: Check if text is vehicle-related
app.post('/api/check-vehicle', (req, res) => {
  const { title, description } = req.body;
  const isVehicle = isVehicleRelated({ title, description });
  res.json({ isVehicle });
});

// API: Get default feeds
app.get('/api/default-feeds', (req, res) => {
  res.json({ feeds: defaultFeeds });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve the PWA for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('🎯 SweepTrack Server Running!');
  console.log('─'.repeat(40));
  console.log(`Local:   http://localhost:${PORT}`);
  
  // Get local IP for iPad access
  const { networkInterfaces } = require('os');
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        console.log(`Network: http://${net.address}:${PORT}`);
      }
    }
  }
  
  console.log('─'.repeat(40));
  console.log('Open the Network URL on your iPad to use the app!');
  console.log('Press Ctrl+C to stop the server.');
  console.log('');
});
