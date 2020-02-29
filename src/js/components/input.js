class Input {
  constructor(parent, id, type, placeholder) {
    this.parent = parent;
    this.id = id;
    this.type = type;
    this.placeholder = placeholder;

    this.element = document.createElement("input");
    this.element.id = this.id;
    this.element.type = this.type;
    this.element.placeholder = this.placeholder;

    this.handleChange = this.handleChange.bind(this);
    this.element.addEventListener("change", this.handleChange);

    this.init();
  }

  init() {
    this.render();
    this.parent.appendChild(this.element);
  }

  handleChange(e) {
    e.preventDefault();
    this.value = e.target.value;
  }

  render() {}
}

export default Input;
