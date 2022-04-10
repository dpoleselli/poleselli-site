import { css, html, LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

const brown = unsafeCSS('#9b7653')
const white = unsafeCSS('#e8e2d9')

export class BaseballSpinner extends LitElement {
  @property({ type: Boolean })
  loading = false

  render() {
    return this.loading ? html`
      <div id="overlay">
        <div class="square">
          <div class="base first-base"></div>
          <div class="base second-base"></div>
          <div class="base third-base"></div>
          <div class="base home-plate"></div>
        </div>
      </div>
    ` : null;
  }

  static styles = css`
    .square {
      position: absolute;
      border: 8px solid ${brown};
      width: 100px;
      height: 100px;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) rotate(45deg);
      -ms-transform: translate(-50%,-50%);
      animation: animates 4s linear forwards infinite;
    }

    @keyframes animates {
      0% {
        border-color: ${brown} ${brown} ${brown} ${white};
      }

      25% {
        border-color: ${brown} ${brown} ${white} ${brown};
      }

      50% {
        border-color: ${brown} ${white} ${brown} ${brown};
      }

      75% {
        border-color: ${white} ${brown} ${brown} ${brown};
      }

      100% {
        border-color: ${brown} ${brown} ${brown} ${white};
      }
    }

    .base {
      position: absolute;
      width: 25px;
      height: 25px;
      background: ${brown};
    }

    .third-base {
      left: 0;
      bottom: 0;

      transform: translate(-15px, 15px);
      animation: base 4s 3.3s infinite;
    }

    .second-base {
      left: 0;
      top: 0;

      transform: translate(-15px, -15px);
      animation: base 4s 2.3s infinite;
    }

    .first-base {
      right: 0;
      top: 0;

      transform: translate(15px, -15px);
      animation: base 4s 1.3s infinite;
    }

    .home-plate {
      right: 0;
      bottom: 0;

      transform: translate(15px, 15px) rotate(45deg);
      animation: base 4s infinite;
    }

    @keyframes base {
      0% {
        background: ${white};
      }

      100% {
        background: ${brown};
      }
    }

    #overlay {
      position: fixed; 
      display: block;
      width: 100%; 
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5); 
      z-index: 599;
    }
  `;
}
