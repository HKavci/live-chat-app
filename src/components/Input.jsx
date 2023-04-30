import Img from "../assets/img/img.png";
import Attach from "../assets/img/attach.png";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/chatContext";

const Input = () => {
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    
  }

  return (
    <div className="input">
      <input type="text" placeholder="Type something..." onChange={(e)=>setText(e.target.value)} />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" id="file" style={{ display: "none" }} onChange={(e)=>setImg(e.target.files[0])} />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
