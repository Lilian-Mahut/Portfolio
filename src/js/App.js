import LoginPage from "./pages/login-form";
// import RegisterPage from "./pages/register-form";

class App {
  constructor(id) {
    this.element = document.querySelector(`#${id}`);
  }

  init() {
    this.render();
  }

  render() {
    const LoginPageComponent = new LoginPage(this.element, "login-page");
    // const RegisterPageComponent = new RegisterPage(this.element, "register-page");
  }
}

export default App;
