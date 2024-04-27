import './style.css'
import * as PIXI from "pixi.js";
import TweenJS, { Easing, Tween } from "@tweenjs/tween.js";

import { colyseusSDK } from './utils/Colyseus.js';
import type { MyRoomState, Player } from "../../server/src/rooms/MyRoom.js";

(async () => {
  /**
   * Create a PixiJS application.
   */
  const app = new PIXI.Application();

  // Intialize the application.
  await app.init({
    width: window.innerWidth,
    height: window.innerHeight,
    background: '#763b36',
    resolution: 4,
    roundPixels: true, // Pixel art
  });

  // Pixel art
  app.canvas.style.imageRendering = "pixelated";
  PIXI.TextureSource.defaultOptions.scaleMode = PIXI.DEPRECATED_SCALE_MODES.NEAREST;

  await PIXI.Assets.load([
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

  // Then adding the application's canvas to the DOM body.
  document.body.appendChild(app.canvas);

  /**
   * Main game variables
   */
  let localPlayer: PIXI.Sprite; // we will use this to store the local player
  const playerSprites = new Map<Player, PIXI.Sprite>();

  /**
   * Join the game room
   */
  const room = await colyseusSDK.joinOrCreate<MyRoomState>("my_room");
  room.onStateChange((state) => {
    console.log("New room state:", state);
  });

  room.state.players.onAdd((player, sessionId) => {
    const sprite = new PIXI.Sprite(PIXI.Assets.get("hero" + player.heroType));
    playerSprites.set(player, sprite);

    player.position.onChange(() => {
      sprite.position.x = player.position.x;
      sprite.position.y = player.position.y;
    });

    sprite.anchor.set(0.5, 0.5);

    // Fade in effect
    sprite.scale.x = 0;
    sprite.scale.y = 0;
    sprite.alpha = 0;
    new Tween(sprite.scale)
      .to({ x: 1, y: 1 }, 250)
      .easing(Easing.Quadratic.Out)
      .start();
    new Tween(sprite)
      .to({ alpha: 1 }, 300)
      .start();
    // End fade effect

    if (sessionId === room.sessionId) {
      localPlayer = sprite;
    }
    app.stage.addChild(sprite);
  });

  room.state.players.onRemove((player, sessionId) => {
    const sprite = playerSprites.get(player)!;

    // Fade out & Remove sprite
    new Tween(sprite.scale)
      .to({ x: 0.1, y: 0.1 }, 100)
      .easing(Easing.Quadratic.Out)
      .onComplete(() => {
        app.stage.removeChild(sprite);
      })
      .start();
  });

  /**
   * Player input handling
   */
  const keys = {
    up: false,
    down: false,
    left: false,
    right: false,
  };

  /**
   * Keyboard events
   */
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" || event.key === "w") {
      keys.up = true;
    } else if (event.key === "ArrowDown" || event.key === "s") {
      keys.down = true;
    } else if (event.key === "ArrowLeft" || event.key === "a") {
      keys.left = true;
    } else if (event.key === "ArrowRight" || event.key === "d") {
      keys.right = true;
    }
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowUp" || event.key === "w") {
      keys.up = false;
    } else if (event.key === "ArrowDown" || event.key === "s") {
      keys.down = false;
    } else if (event.key === "ArrowLeft" || event.key === "a") {
      keys.left = false;
    } else if (event.key === "ArrowRight" || event.key === "d") {
      keys.right = false;
    }
  });

  /**
   * Main Game Loop
   */
  app.ticker.add((time) => {
    TweenJS.update(app.ticker.lastTime);

    if (localPlayer) {
      if (keys.up) {
        localPlayer.position.y -= 1;
      } else if (keys.down) {
        localPlayer.position.y += 1;
      }

      if (keys.left) {
        localPlayer.position.x -= 1;
      } else if (keys.right) {
        localPlayer.position.x += 1;
      }

      // Client-authoritative positioning
      room.send("move", {
        x: localPlayer.position.x,
        y: localPlayer.position.y
      })
    }

  });

})();