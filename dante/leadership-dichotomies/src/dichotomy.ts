import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("dp-dichotomy")
export class Dichotomy extends LitElement {
  @property()
  low = "";

  @property()
  middle = "";

  @property()
  high = "";

  render() {
    return html` <ul>
      <li class="first">${this.low}</li>
      <li>${this.middle}</li>
      <li class="last">${this.high}</li>
    </ul>`;
  }

  static styles = css`
    ul {
      padding-left: 0px;
      margin: 30px 10px;
      background: linear-gradient(0.25turn, #fb3c0b, #45fb0b, #fb3c0b);
    }
    ul > li {
      display: inline-block;
      width: 20%;
      text-align: center;
      vertical-align: middle;
      font-weight: 800;
    }
    .first {
      padding-right: 18%;
    }
    .last {
      padding-left: 18%;
    }
  `;
}
