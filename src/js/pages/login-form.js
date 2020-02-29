import Input from "../components/input";

class LoginPage {
  constructor(parent, id) {
    // form's wrapper
    this.parent = parent;
    this.id = id;

    // form
    this.element = document.createElement("form");
    this.element.id = this.id;

    // form's input field in our case (username & password)
    this.username = new Input(
      this.element.id,
      "username-input",
      "text",
      "Username"
    );
    this.password = new Input(
      this.element.id,
      "password-input",
      "password",
      "Mot de passe"
    );

    // My button Submit
    this.submitElement = document.createElement("button");
    this.submitElement.id = this.id + "-button";
    this.submitElement.innerHTML = "Login";

    // binding 'this' (of LoginForm class) to this.handleSubmit method to access 'this.username' & 'this.password'
    this.handleSubmit = this.handleSubmit.bind(this);
    // add submit event listener to submit our data
    this.element.addEventListener("submit", this.handleSubmit);

    this.init();
  }

  init() {
    this.render();
    this.parent.append(this.element);

    // We're finally calling our submit button as the last child of our form
    this.element.append(this.submitElement);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.render();

    let body = {
      username: this.username.value,
      password: this.password.value
    };

    fetch("http://localhost:3000/api/users/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    }).then(response => {
      response.json().then(data => {
        console.log(data);
      });
    });
  }

  render() {
    let wrapper = document.getElementById(this.parent);
    wrapper.append(this.element);

    this.username.init(); // i call my input for username
    this.password.init(); // i call my input for password
    this.element.append(this.submitElement); // and i call my button
  }
}

export default LoginPage;
