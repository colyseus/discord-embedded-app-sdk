import './style.css'
import { Application, Assets } from "pixi.js";

(async () => {
  // Create a PixiJS application.
  const app = new Application()

  await Assets.load([
    { src: "" }
  ])

  // Intialize the application.
  await app.init({ background: '#763b36', resizeTo: window, roundPixels: true, });

  // Then adding the application's canvas to the DOM body.
  document.body.appendChild(app.canvas);
})();