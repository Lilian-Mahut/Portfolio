import Input from "../components/input";

class RegisterPage {
  constructor(parent, id) {
    this.parent = parent;
    this.id = id;

    this.element = document.createElement("form");
    this.element.id = this.id;

    this.username = new Input("username-input", "text", "username");
    this.email = new Input("email-input", "email", "email");
    this.password = new Input("password-input", "password", "yourPassword");
    // this.passwordConfirm = new Input("");
    this.submitElement = document.createElement("button");
    this.submitElement.id = this.id + "-button";
    this.submitElement.innerHTML = "Register";
  }
}
