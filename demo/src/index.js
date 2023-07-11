import React from "react";
import ReactDOM from "react-dom/client";
import KolloqeChatWidget from "../../src/index";

let root = ReactDOM.createRoot(document.getElementById("demo"));
root.render(
  <React.StrictMode>
    <KolloqeChatWidget
      socketURL={"https://thisisishara-personal-rasa-ai-assistant.hf.space"}
      socketPath="/socket.io/"
      hideWhenNotConnected={false}
    />
  </React.StrictMode>
);
