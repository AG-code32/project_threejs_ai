import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  // color: '#EFBD48',
  color: '#78A4DA',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './public/logoGY-black.svg',
  fullDecal: './public/logoGY-black.svg',
});

export default state;