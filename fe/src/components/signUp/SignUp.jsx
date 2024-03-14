import "./signUp.css";

export default function SignUp() {
  return (
    <div className="update">
      <div className="updateWrapper">
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input className="formInput" type="text" placeholder="John" />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input className="formInput" type="text" placeholder="John" />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button className="updateButton">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
