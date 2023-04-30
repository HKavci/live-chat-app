import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/chatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log(message);

  return (
    <div className="message owner">
      {/* <div className="messageInfo">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHSj2GP_WNk6g/profile-displayphoto-shrink_800_800/0/1677167190150?e=1687996800&v=beta&t=eHA0ZweA8nDytAmB5nHDCzabHNqedCV-WdBNunVI2-E"
          alt="image"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello world!</p>
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHSj2GP_WNk6g/profile-displayphoto-shrink_800_800/0/1677167190150?e=1687996800&v=beta&t=eHA0ZweA8nDytAmB5nHDCzabHNqedCV-WdBNunVI2-E"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Message;
