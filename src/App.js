import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";


function App() {
  return (
    <div className="App">
      <h1>login using facebook</h1>
      <LoginSocialFacebook>
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  );
}

export default App;
