# react-widget-socketio

A Rasa socket.io channel supported React chat widget component

## Setting up the Dev Environmet

The original package was created using [`nwb`](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md). So, to set up a dev environment, the `node_modules` dir initialized using `nwb new react-component` is required to begin with.

- Clone this repo
- Simply run `nwb new react-component cache` to create a cache project
- Copy-paste the `node_modules` dir to the root of the project
- Get rid of the cached project `cache`
- Run `npm i` to install additional packages
- Run `npm start` to run the dev server
- This project adhears to all the commands executable inside a `nwb new react-component` project
    1. `npm start` - runs the demo
    2. `npm run build` - builds modules
    3. `npm publish` - builds and publishes to npm (set up the package.json accordingly)

## Releasing

- When the version is bumped, first do the versioning in the package.json
- run `npm run build` to build the latest build. (This is optional. `npm publish` can take care of this internally)
- run `npm publish` to get the transpiled js modules and push to npmjs

## Usage in a React Project

The component can be easily consumed within a React project as given below.  

### Installation

The package can be pulled from NPM as follows.

```bash
npm i @kolloqe/widget-en
```

Then can be attached to any React component as specified below.

```jsx
import KeyboardInput from '@kolloqe/widget-en';

<KolloqeChatWidget
  position={"right"}
  title="Kolloqe ⚡"
  subtitle={"Welcome to Kolloqe"}
  defaultLang={"en"}
  avatar={true}
  avatarType={"text"}
  avatarLink={""}
  socketURL={"http://localhost:5005/"}
  initPayload="/greet"
  reconnectTimeout={6000}
  widgetOptions={true}
  fullscreenButton={false}
  langSwitch={true}
  moreOptions={true}
  widgetOptionsPosition={"top"}
  hideWhenNotConnected={true}
  displayUnreadCount={true}
  showMessageDate={true}
  persistSession={true}
  triggerIntents={true}
  enableURLs={true}
  disablePreviousQuickReplies={true}
  indicatorDelay={0}
  indicatorType={"bouncing"}
  enableShortcuts={true}
  shortcutKey={81} />
```

## List of Props

{To be updated}
Refer the [Official Docs](https://kolloqe.github.io) for more details on passing props to kolloqe input component.

## Limitations

- Styling is not supported via props. It should be done manually through overriding relevent CSS classes for now.
- Snapping to fullscreen is not yet supported. We're working on that!
