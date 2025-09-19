import ImageKit from "imagekit";

var imagekit = new ImageKit({
  publickey: process.env.IMAGEKIT_PUBLIC_KEY,
  privatekey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndPoint: process.env.IMAGEKIT_URL_END_POINT,
});

export default imagekit;
