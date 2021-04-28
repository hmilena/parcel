module.exports = {
    "gifsicle": { "optimizationLevel": 6, "interlaced": false, "colors": 10 },
    "mozjpeg": { "progressive": true, "quality": 50 },
    "pngquant": { "quality": [0.50, 0.50] },
    "svgo": {
      "plugins": [
        { "removeViewBox": false },
        { "cleanupIDs": true },
      ]
    },
    "webp": { "quality": 50 }
  }