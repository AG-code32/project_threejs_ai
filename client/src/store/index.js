import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  // color: '#EFBD48',
  color: '#78A4DA',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logoGY-black.svg',
  fullDecal: './logoGY-black.svg',
});

export default state;