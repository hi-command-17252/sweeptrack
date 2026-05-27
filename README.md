# 🎯 SweepTrack PWA

A fast, mobile-friendly sweepstakes tracker that works on **iPhone, iPad, and Mac**. Smart enough to work at home (with RSS feeds) or anywhere (standalone mode).

## ✨ Features

### 🔍 Discover (Two Modes)

**RSS Feeds tab** — When connected to your home server:
- Auto-pulls sweepstakes from popular aggregator sites
- Vehicle filter for car/truck giveaways
- Search by keyword
- One-tap tracking

**Browse Sites tab** — Always available, no server needed:
- Curated list of vehicle-focused sweepstakes sites
- Aggregator sites (Sweepstakes Advantage, Sweeties Sweeps, etc.)
- General sweepstakes sources
- Tap any to open in Safari

### 📋 Tracker
- Track sweepstakes you want to enter
- Color-coded deadlines (red = urgent, yellow = soon, green = OK)
- Filter by status
- Mark as entered when done

### 👤 Quick Copy (Your Secret Weapon!)
- Store email, phone, name, address
- Tap any field to copy to clipboard
- Paste into sweepstakes forms instantly

### 🟢 Smart Server Detection
- Green dot in top-right = connected to home server, RSS feeds available
- Red dot = standalone mode, use Browse Sites instead
- Tap the dot to retry connection

---

## 📱 Device Setup

| Device | At Home | Away From Home |
|--------|---------|----------------|
| iPhone 17 | RSS feeds + Browse | Browse Sites only |
| iPad | RSS feeds + Browse | Browse Sites only |
| Mac | RSS feeds + Browse | N/A (server lives here) |

---

## 🚀 Server Setup (One-Time, ~5 Minutes)

### Prerequisites
- A Mac with Node.js installed (v18+)

### Steps

1. Unzip the app folder on your Mac
2. Open Terminal and navigate to the folder:
   ```
   cd /path/to/sweeptrack-pwa
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```

You'll see:
```
🎯 SweepTrack Server Running!
────────────────────────────────────────
Local:   http://localhost:3000
Network: http://192.168.1.100:3000
────────────────────────────────────────
```

---

## 📲 Add to Each Device

### iPhone 17

1. Connect to your home WiFi
2. Open Safari
3. Visit the Network URL (e.g., http://192.168.1.100:3000)
4. Tap Share → Add to Home Screen
5. Name it "SweepTrack" → Done!

Away from home? The app still works — it'll show a red status dot and switch to Browse Sites mode automatically.

### iPad
Same as iPhone — follow the steps above. Use Split View with Safari for fastest entry.

### Mac
Visit http://localhost:3000 in any browser.

---

## 📱 Daily Workflow (5-10 min)

### At Home (RSS Mode)
1. Open SweepTrack — green dot in top-right
2. Discover → RSS Feeds: Vehicle filter on by default
3. Tap Track on ones you want
4. Switch to Tracker tab
5. Tap Open to visit the sweepstakes page
6. Quick Copy tab → tap fields to copy → paste in form
7. Submit → Mark ✓ Done

### Away From Home (Standalone Mode)
1. Open SweepTrack — red dot in top-right
2. Discover → Browse Sites: Tap a curated site
3. Browse in Safari, find a sweepstakes
4. Copy the URL
5. Back in SweepTrack: Tracker → ➕ Add Manually
6. Use Quick Copy as usual

---

## 🌐 Curated Sites Included

### 🚗 Vehicle Sweepstakes
- Motor Trend Sweepstakes
- Omaze (Cars & Trucks)
- Dream Giveaway
- Ford Sweepstakes

### 📡 Aggregator Sites
- Sweepstakes Advantage
- Sweeties Sweeps
- Contest Girl
- Online-Sweepstakes
- Sun Sweeps

### 🎁 General Sweepstakes
- PCH (Publishers Clearing House)
- HGTV Sweepstakes
- Food Network
- Reader's Digest

---

## ❓ Troubleshooting

### Red dot when I expect green
- Make sure Mac and device are on the same WiFi
- Check that npm start is running on Mac
- Tap the red dot to retry connection

### Can't connect from iPhone/iPad
- Verify Network URL (not localhost)
- Some routers have "AP Isolation" — check router settings
- Try restarting the server

---

## 📝 Data Storage

All data is stored locally on each device. Use Settings → Export to back up.

---

Happy sweeping! 🍀🚗
