import { proxy } from "valtio";
import three from "../assets/threej.png"

const state = proxy({
  current:null,
  items: {
    CardboardInterior:"#ffffff",
    CardBoardExterior:"#ffffff",
    
  },
  logoDecal: three,
  fullDecal: three,
  intro: true,
  isLogoTexture: true,
  isFullTexture: false,
});

export default state;



/**
 const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./logo512.png",
  fullDecal: "./logo512.png",
  isModelVisible: true,
});
 */