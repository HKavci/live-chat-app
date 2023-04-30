import Cam from "../assets/img/cam.png";
import Add from "../assets/img/add.png";
import More from "../assets/img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/chatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data?.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="camera-img" />
          <img src={Add} alt="add-img" />
          <img src={More} alt="more-img" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
