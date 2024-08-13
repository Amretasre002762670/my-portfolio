import computerAnimation2 from '../assets/lotties/computer-2.json';
import computerAnimation from '../assets/lotties/computer.json';
import apiAnimation from '../assets/lotties/api.json';

export const getImageUrl = (path) => {
    // to dynamically add the image url
    return new URL(`/assets/${path}`, import.meta.url).href; // taking relative path and appending it to base url of the website
}

export const animationDataMap = {
  'computerAnimation': computerAnimation,
  'computerAnimation2': computerAnimation2,
  'apiAnimation': apiAnimation
  // Add more mappings as needed
};

// export default animationDataMap;


  