// const puppeteer = require('puppeteer');

// const getInstagramVideoInfo = async (req, res) => {
//   const { url } = req.body;

//   if (!url || !url.includes('instagram.com')) {
//     return res.status(400).json({ error: 'Invalid Instagram URL' });
//   }

//   try {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();

//     await page.goto(url, { waitUntil: 'networkidle2' });

//     const videoUrl = await page.evaluate(() => {
//       const video = document.querySelector('video');
//       return video ? video.src : null;
//     });

//     await browser.close();

//     if (!videoUrl) {
//       return res.status(404).json({ error: 'No video found in the post' });
//     }

//     res.json({ videoUrl });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to fetch video' });
//   }
// };

// module.exports = { getInstagramVideoInfo };
