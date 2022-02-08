import "../../styles/login/formLogin.scss";
import { AiFillFacebook } from "react-icons/ai";
import { Link} from "react-router-dom";

function FormLogin() {
  return (
    <div className="formLoginMain">
      <div className="formLogin">
        <h1>Instagram</h1>
        <form className="form">
          <input
            type="text"
            className="formEmail "
            placeholder="Phone number, username, or email"
          />
          <input
            type="password"
            className="formPassword "
            placeholder="Password"
          />
          <input type="submit" className="formSubmit inputForm" value="Login" />
          <div className="formOr">
            <div>OR</div>
          </div>

          <div className="formFacebook inputForm">
            <AiFillFacebook className="facebookIcon" />
            <span>Login with Facebook</span>
          </div>
          <Link className="inputLink" to="/">
            Forgot password?
          </Link>
        </form>
      </div>
      <div className="signUp">
        <div>
          <span className="">Don't have an account? </span>
          <a href="/">Sign up</a>
        </div>
      </div>
      <div className="loginDownload">
        <div className="loginGetApp">
          <span>Get the app.</span>
        </div>
        <div className="loginIcon">
          <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" />
          <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" />
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
