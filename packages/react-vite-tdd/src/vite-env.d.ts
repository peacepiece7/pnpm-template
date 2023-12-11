/// <reference types="vite/client" />

// svg/vite.svg
declare module "*.svg" {
  const content: string;
  export default content;
}
