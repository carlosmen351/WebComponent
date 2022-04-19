class MyWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['brand', 'image', 'title', 'collection', 'info', 'price'];
  }

  attributeChangedCallback(item, oldItem, newItem) {
    if (oldItem !== newItem) {
      item === 'brand' ? this.brand = newItem : null;
      item === 'image' ? this.image = newItem : null;
      item === 'title' ? this.title = newItem : null;
      item === 'collection' ? this.collection = newItem : null;
      item === 'info' ? this.info = newItem : null;
      item === 'price' ? this.price = newItem : null;
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <main class="container">
        <section class="imgBox">
          <img src="${
            this.image
          }" alt="Zapatos deportivos para correr color azul"/>
        </section>
        <section class="details">
          <div class="content">
            <h2>${this.title} <span>${this.collection}</span></h2>
            <p>${this.info}</p>
            <h3>${this.price}</h3>
            <button>Comprar</button>
          </div>
        </section>
      </main>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
      <style>
      :host {
        --primary-background: #5a6cb2;
          width: 80%;
          max-width: 900px;
          min-width: 280px;
          margin: 0 auto;
      }
      .container {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 900px;
          height: 600px;
          margin: 20px;
          background-color: #fff;
      }
      .container .imgBox {
          position: relative;
          display: flex;
          justify-content: center;
          width: 50%;
          height: 100%;
          background-color: var(--primary-background)
      }
      .container .imgBox:before {
          position: absolute;
          top: -20px;
          left: 20px;
          font-size: 7em;
          font-weight: 800;
          color: #000;
          content: 'GarageBand';
          opacity: 0.1;
      }
      .container .imgBox img {
          position: relative;
          top: 100px;
          left: -50px;
          width: 720px;
          height: 480px;
          transform: rotate(-30deg);
      }
      .container .details {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 100%;
          box-sizing: border-box;
          padding: 40px;

      }
      .container .details h2 {
          margin-bottom: 25px;
          font-size: 2.5em;
          line-height: 0.8em;
          color: #444;
      }
      .container .details h2 span {
          font-size: 0.4em;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #999;
      }
      .container .details p {
          max-width: 85%;
          margin-left: 15%;
          margin-bottom: 35px;
          color: #333;
          font-size: 15px;
      }
      .container .details h3 {
          float: left;
          font-size: 2.5em;
          color: #a2a2a2;
      }
      .container .details button {
          margin-top: 35px;
          float: right;
          padding: 15px 20px;
          font-size: 16px;
          color: #fff;
          letter-spacing: 1px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 40px;
          background-color: #5a6cb2;
          cursor: pointer;
      }
      @media (max-width: 1023px) {
          .container {
              height: auto;
              width: auto;
          }
          .container .imgBox {
              padding: 40px;
              width: 100%;
              box-sizing: border-box;
              height: auto;
              text-align: center;
          }
          .container .imgBox img {
              left: initial;
              width: 100%;
              height: auto;
              transform: rotate(0deg);
          }

          .container .details {
              width: 100%;
              height: auto;
              padding: 20px;
          }

          .container .details p {
              max-width: 100%;
              margin-left: 0;
          }
      }
      </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

}

customElements.define('my-web-component', MyWebComponent);