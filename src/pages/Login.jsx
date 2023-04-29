import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
     await signInWithEmailAndPassword(auth, email, password)
     navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Kavci Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <button>Sign in</button>
        </form>
        <p>Don't you have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
