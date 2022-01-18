const axios = require("axios");
const { FLICKR_API_URL, FLICKR_API_KEY } = process.env

exports.getPictures = async (req, res) => {
  try {
    const { page = 1, tags } = req.query;

    const method = tags && tags != "" ? "flickr.photos.search" : "flickr.photos.getRecent";
    const flickrUrl = `${FLICKR_API_URL}&api_key=${FLICKR_API_KEY}&method=${method}&page=${page}&tags=${tags}`;

    const imgData = await axios.get(flickrUrl);
    if (imgData.status == 200) {

      if (imgData.data.photos.total > 0) {
        imgData.data.photos.photo.map(item => {
          delete item.id;
          delete item.owner;
          delete item.secret;
          delete item.farm;
          delete item.ispublic;
          delete item.isfriend;
          delete item.isfamily;
          delete item.server;
          delete item.height_o;
          delete item.width_o;
        });

        res.status(200).json({
          code: 200,
          data: imgData.data.photos.photo,
          meta: { total: imgData.data.photos.total, pages: imgData.data.photos.pages }
        })
      } else {
        res.status(200).json({
          code: 200,
          data: [],
          meta: { total: 0, pages: 0 }
        });
      }
    } else {
      console.error("[Getting Images] Error: ", error.toString());
      res.status(500).json({
        code: 500,
        message: "Internal Server Error"
      })
    }

  } catch(error) {
    console.error("[Getting Images] Error: ", error.toString());
    res.status(500).json({
      code: 500,
      message: "Internal Server Error"
    });
  }
};