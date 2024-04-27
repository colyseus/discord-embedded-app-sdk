import './style.css'
import { Application, Assets, DEPRECATED_SCALE_MODES, Sprite, TextureSource } from "pixi.js";

(async () => {
  // Create a PixiJS application.
  const app = new Application()

  await Assets.load([
    /**
     * Heros
     */
    { alias: "hero1", src: 'kenney_tiny-dungeon/Tiles/tile_0084.png' },
    { alias: "hero2", src: 'kenney_tiny-dungeon/Tiles/tile_0088.png' },
    { alias: "hero3", src: 'kenney_tiny-dungeon/Tiles/tile_0087.png' },
    { alias: "hero4", src: 'kenney_tiny-dungeon/Tiles/tile_0086.png' },
    { alias: "hero5", src: 'kenney_tiny-dungeon/Tiles/tile_0085.png' },
    { alias: "hero6", src: 'kenney_tiny-dungeon/Tiles/tile_0096.png' },
    { alias: "hero7", src: 'kenney_tiny-dungeon/Tiles/tile_0097.png' },
    { alias: "hero8", src: 'kenney_tiny-dungeon/Tiles/tile_0098.png' },
    { alias: "hero9", src: 'kenney_tiny-dungeon/Tiles/tile_0099.png' },
    { alias: "hero10", src: 'kenney_tiny-dungeon/Tiles/tile_0100.png' },
    { alias: "hero11", src: 'kenney_tiny-dungeon/Tiles/tile_0111.png' },
    { alias: "hero12", src: 'kenney_tiny-dungeon/Tiles/tile_0112.png' },

    /**
     * Potions
     */
    { alias: "potion1", src: 'kenney_tiny-dungeon/Tiles/tile_0128.png' },
    { alias: "potion2", src: 'kenney_tiny-dungeon/Tiles/tile_0127.png' },
    { alias: "potion3", src: 'kenney_tiny-dungeon/Tiles/tile_0126.png' },
    { alias: "potion4", src: 'kenney_tiny-dungeon/Tiles/tile_0125.png' },
    { alias: "potion5", src: 'kenney_tiny-dungeon/Tiles/tile_0113.png' },
    { alias: "potion6", src: 'kenney_tiny-dungeon/Tiles/tile_0114.png' },
    { alias: "potion7", src: 'kenney_tiny-dungeon/Tiles/tile_0115.png' },
    { alias: "potion7", src: 'kenney_tiny-dungeon/Tiles/tile_0116.png' },

    /**
     * Weapons
     */
    { alias: "shield1", src: 'kenney_tiny-dungeon/Tiles/tile_0101.png' },
    { alias: "shield2", src: 'kenney_tiny-dungeon/Tiles/tile_0102.png' },
    { alias: "sword1", src: 'kenney_tiny-dungeon/Tiles/tile_0103.png' },
    { alias: "sword2", src: 'kenney_tiny-dungeon/Tiles/tile_0104.png' },
    { alias: "sword3", src: 'kenney_tiny-dungeon/Tiles/tile_0105.png' },
    { alias: "sword4", src: 'kenney_tiny-dungeon/Tiles/tile_0106.png' },
    { alias: "sword5", src: 'kenney_tiny-dungeon/Tiles/tile_0107.png' },
    { alias: "axe1", src: 'kenney_tiny-dungeon/Tiles/tile_0117.png' },
    { alias: "axe2", src: 'kenney_tiny-dungeon/Tiles/tile_0118.png' },
    { alias: "axe3", src: 'kenney_tiny-dungeon/Tiles/tile_0119.png' },
    { alias: "staff1", src: 'kenney_tiny-dungeon/Tiles/tile_0129.png' },
    { alias: "staff2", src: 'kenney_tiny-dungeon/Tiles/tile_0130.png' },
    { alias: "staff3", src: 'kenney_tiny-dungeon/Tiles/tile_0131.png' },

    /**
     * Monsters
     */
    { alias: "monster1", src: 'kenney_tiny-dungeon/Tiles/tile_0108.png' },
    { alias: "monster2", src: 'kenney_tiny-dungeon/Tiles/tile_0109.png' },
    { alias: "monster3", src: 'kenney_tiny-dungeon/Tiles/tile_0110.png' },
    { alias: "monster4", src: 'kenney_tiny-dungeon/Tiles/tile_0111.png' },
    { alias: "monster5", src: 'kenney_tiny-dungeon/Tiles/tile_0122.png' },
    { alias: "monster6", src: 'kenney_tiny-dungeon/Tiles/tile_0121.png' },
    { alias: "monster7", src: 'kenney_tiny-dungeon/Tiles/tile_0120.png' },
    { alias: "monster8", src: 'kenney_tiny-dungeon/Tiles/tile_0123.png' },
    { alias: "monster9", src: 'kenney_tiny-dungeon/Tiles/tile_0124.png' },
  ]);

  // Intialize the application.
  await app.init({ background: '#763b36', resolution: 6, resizeTo: window, roundPixels: true, });

  // Big Pixel Resolution
  app.canvas.style.imageRendering = "pixelated";
  TextureSource.defaultOptions.scaleMode = DEPRECATED_SCALE_MODES.NEAREST;

  const hero1 = new Sprite(Assets.get("hero1"));
  hero1.position.x = 30;
  hero1.position.y = 30;
  app.stage.addChild(hero1);

  const hero2 = new Sprite(Assets.get("hero2"));
  hero2.position.x = 50;
  hero2.position.y = 30;
  app.stage.addChild(hero2);

  const hero3 = new Sprite(Assets.get("hero3"));
  hero3.position.x = 70;
  hero3.position.y = 30;
  app.stage.addChild(hero3);

  const hero4 = new Sprite(Assets.get("hero4"));
  hero4.position.x = 90;
  hero4.position.y = 30;
  app.stage.addChild(hero4);

  const hero5 = new Sprite(Assets.get("hero5"));
  hero5.position.x = 110;
  hero5.position.y = 30;
  app.stage.addChild(hero5);

  // Then adding the application's canvas to the DOM body.
  document.body.appendChild(app.canvas);
})();