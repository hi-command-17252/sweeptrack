# 🚀 Deploy to Render — Step by Step

Follow these steps to get SweepTrack running in the cloud (works on iPhone anywhere).

## Step 1: Upload to GitHub

1. Go to https://github.com/new
2. **Repository name:** `sweeptrack`
3. **Description:** (optional) "My sweepstakes tracker"
4. Select **Public** (Render's free tier requires public repos)
5. **Do NOT** check any of the "Add a..." boxes
6. Click **Create repository**

You'll see a page with instructions. Ignore them — we'll use the web upload instead.

7. Click **"uploading an existing file"** (it's a link on that page)
8. **Drag and drop** these files/folders from the unzipped sweeptrack folder:
   - `server.js`
   - `package.json`
   - `README.md`
   - `.gitignore`
   - `public` folder (drag the whole folder)
9. Scroll down, click **Commit changes**

That's it for GitHub!

## Step 2: Create Render Account

1. Go to https://render.com
2. Click **Get Started for Free**
3. Sign up with your **GitHub account** (easiest — click the GitHub button)
4. Authorize Render to access your GitHub
5. Skip any "team setup" or upsells

## Step 3: Deploy

1. On Render dashboard, click **+ New** → **Web Service**
2. Find **sweeptrack** in the list of your GitHub repos → click **Connect**
3. Fill in the settings:
   - **Name:** `sweeptrack` (this becomes your URL)
   - **Region:** Choose closest to you
   - **Branch:** `main`
   - **Runtime:** Node (should auto-detect)
   - **Build Command:** `npm install` (auto-filled)
   - **Start Command:** `npm start` (auto-filled)
   - **Instance Type:** **Free**
4. Scroll to bottom, click **Create Web Service**

Render will now build and deploy your app (~3-5 minutes).

## Step 4: Get Your URL

Once deployed, you'll see a URL at the top of the page like:
```
https://sweeptrack.onrender.com
```
(or `https://sweeptrack-XXXX.onrender.com` if the name was taken)

## Step 5: Add to iPhone

1. Open **Safari** on iPhone
2. Visit your Render URL
3. **First load takes 30-60 seconds** (cold start — totally normal on free tier)
4. Tap **Share** button → **Add to Home Screen**
5. Name it "SweepTrack" → **Add**

Now it's installed like an app!

## Important Notes

- **Cold starts:** The free tier "sleeps" after 15 min of no use. First load after sleep = 30-60 sec wait. After that, fast.
- **Tip:** Open the app once in the morning so it's ready when you need it.
- **Updates:** If you push changes to GitHub, Render auto-redeploys.

## Troubleshooting

**Build fails?**
- Make sure `package.json` was uploaded
- Check the Render logs (click Logs tab) for the actual error

**App loads but RSS doesn't work?**
- Wait 1-2 minutes — server may still be starting
- Tap the status dot to retry

**Need to make changes?**
- Edit files directly on GitHub (click any file → pencil icon)
- Render auto-redeploys when you commit
