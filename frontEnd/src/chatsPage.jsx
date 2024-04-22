import { PrettyChatWindow } from "react-chat-engine-pretty";
const REACT_APP_CHAT_ENGINE_PROJECT_ID="42c6cf78-d10a-481a-b358-66f208816bd4";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username} 
        secret={props.user.secret} 
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;