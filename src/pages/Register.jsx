import AddAvatar from "../assets/img/addAvatar.png"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Kavci Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input style={{display: "none"}} type="file" id='file' />
                <label htmlFor="file">
                    <img src={AddAvatar} alt="avatar-image" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Do you have an account?</p>
        </div>
    </div>
  )
}

export default Register