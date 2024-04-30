# (Template) Colyseus + Discord Embedded App SDK

This Project Template is a starting point for crafting HTML5 multiplayer Discord Activities.

## Project Structure

The frontend and backend are separated into two different projects.

- `client/` - Contains the frontend, which uses Pixi.js
- `server/` - Contains the backend, which uses Colyseus

### Frontend Guide


### Backend Guide

---

## Testing your local Discord Activity

In order to test your Discord Activity locally, you need to expose your local server to the public internet.

As described [here](https://discord.com/developers/docs/activities/building-an-activity#step-4-running-your-app-locally-in-discord), we are using `cloudflared` to expose our local server to the public internet,

To run your app locally, run the following commands:

```
cd client
npm install
npm start
```

From another terminal, run the following command:

```
npx cloudflared tunnel --url http://localhost:5173
```

![cloudflared-screenshot](cloudflared-screenshot.png)


You will need to update your Discord Activity's "OAuth2 → Redirect URL" and "URL Mappings → Target" to the URL provided by `cloudflared`:

<p float="left">
  <img src="/settings-oauth.png" width="50%" />
  <img src="/settings-url-mappings.png" width="50%" />
</p>


_(Be sure to complete all the steps listed [here](https://discord.com/developers/docs/activities/building-an-activity) to ensure your development setup is working as expected.)_

---

## Deploying your Discord Activity

...


---

## More Discord Activities (open source)

> Made a cool Discord Activity? Make a pull-request and contribute to the list below!

- Discord Typing Race - [linkai101/keyboard-derby](https://github.com/linkai101/keyboard-derby/)
- TypeScript + Colyseus + React - [Wave-Play/robo.js](https://github.com/Wave-Play/robo.js/tree/main/templates/activity-ts-colyseus-react)
- [Creating Discord Games with Phaser](https://phaser.io/tutorials/creating-discord-games-with-phaser) - describes the steps required to create a Discord App and get a Phaser game running as a Discord Activity. (Does not use Colyseus, but can be adapted to do so.)

## License

MIT
