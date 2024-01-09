// routes/shortlink.js
const express = require('express');
const router = express.Router();
const ShortLink = require('../model/link');

router.post( '/shorten', async (req, res) => {

  const originalUrl = req.body.url
  const code = randomString.generate(8)
 

  const link = await Link.create({ originalURL: originalUrl, 
      shortenedURL: `http://localhost:8000/${code}`,
      visited: 0, 
      code: code
  })


  return res.status(200).json({ shortenLink: link.shortenedURL })


} )

module.exports = router;
