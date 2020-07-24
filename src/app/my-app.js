1;
2;
3;
4;
5;
6;
7;
8;
9;
import { LitElement, html } from "lit-element";

class MyApp extends LitElement {
  render() {
    return html`
      <h1>Hello World</h1>
    `;
  }
}

customElements.define("my-app", MyApp);
