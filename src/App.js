import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";


function App() {
  return (
    <div className="App">
      <h1>login using facebook</h1>
      <LoginSocialFacebook
        appId="1335063893885072"
        onResolve={(res) => {
          console.log(res);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  );
}

export default App;
