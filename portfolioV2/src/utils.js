 /*
  This is how all communications to path directory is made 
  from image to code
*/
export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};