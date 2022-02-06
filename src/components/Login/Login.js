import "../../styles/login/login.scss";
import ImagePhone from "./ImagePhone.js";
import FormLogin from "./FormLogin.js";
import FooterLogin from "./FooterLogin.js";

function Login() {
  return (
    <>
      <div className="login">
        <ImagePhone />
        <FormLogin />
      </div>
      <FooterLogin />
    </>
  );
}

export default Login;
