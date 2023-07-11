# @kolloqe/widget-en

A Rasa socket.io channel supported React chat widget component

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
  positionProps={{
    xAxis: "10px",
    yAxis: "10px"
  }}
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
- Requires `Node 16.x`
