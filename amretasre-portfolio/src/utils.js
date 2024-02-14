export const getImageUrl = (path) => {
    // to dynamically add the image url
    return new URL(`/assets/${path}`, import.meta.url).href; // taking relative path and appending it to base url of the website
}