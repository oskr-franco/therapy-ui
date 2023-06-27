export const getUrlType = (url) => {
  const imageRegex = /^https?:\/\/.*\.(jpeg|jpg|gif|png)(\?.*)?$/;
  const videoRegex = /^https?:\/\/.*\.(mp4|mov|avi|wmv)(\?.*)?$/;
  const youtubeUrlRegex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
  if (url.match(imageRegex)) return 'Image';

  if (url.match(videoRegex) || url.match(youtubeUrlRegex)) return 'Video';

  return;
};