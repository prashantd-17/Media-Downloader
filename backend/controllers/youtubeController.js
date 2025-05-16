const youtubedl = require('youtube-dl-exec');

 const getVideoInfo = async (req, res) => {
  const videoUrl = req.query.url;

  if (!videoUrl) {
    return res.status(400).json({ message: 'URL is required' });
  }

  try {
    const output = await youtubedl(videoUrl, {
      dumpSingleJson: true,
      noWarnings: true,
      preferFreeFormats: true,
    });

    return res.status(200).json(output); // contains formats, title, thumbnail, etc.
  } catch (error) {
    console.error('Error fetching video info:', error);
    return res.status(500).json({ message: 'Failed to get video info' });
  }
};

module.exports = {getVideoInfo}