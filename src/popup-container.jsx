import pug from 'pug';

export default class PopUpContainer {
  constructor() {
    this.container = null;
  }

  inject(parent = document.body) {
    this.parent = parent;
    this.container = this.render();
    this.parent.appendChild(this.container);
  }

  remove() {
    this.parent.removeChild(this.container);
  }

  render() {
    // return
  }
}
