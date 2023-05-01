import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/chatContext";
import { useRef } from "react";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef()

  // Sayfa açıldığında ya da mesaj atıldığında son mesaja scroll olması için useRef kullanarak aşağıdaki işlemi yaptık.
  useEffect(() => {
    ref?.current?.scrollIntoView({behavior: "smooth"})
  }, [message])
  

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="image"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="message-img" />}
      </div>
    </div>
  );
};

export default Message;
