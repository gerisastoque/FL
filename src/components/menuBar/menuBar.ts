import menuStyles from './menuBar.css';
import logoImg from '../../assets/logo.png';
import notificationsIcon from '../../assets/icon notifications.png';
import homeIcon from '../../assets/icon home.png';
import profileIcon from '../../assets/icon profile.png';

class MenuBar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			const css = document.createElement('style');
			css.textContent = `

                .menu-bar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .icons img {
                    height: 40px;
                    margin-right: 10px
                }

                .logo img{
                    height: 35px;
                }

                .search-box {
                    flex-grow: 1;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                }

                .search-box-input {
                    width: 30%;
                    padding: 5px 10px;
                    text-align: center;
                    background-color: #2F60E9;
                    color: white;
                    border-radius: 20px;
                    border: none;
                    outline:none;
                }


                .icons {
                    display: flex;
                    justify-content: space-between;
                    margin-right: 35px;
                    width: 100px;
                }

                .search-box-input::placeholder {
                    color: white;
                }
            `;

			// Añadir el CSS al shadow DOM
			this.shadowRoot.appendChild(css);

			this.shadowRoot.innerHTML += `
              <style>${menuStyles}</style>

              <nav class="menu-bar">
                  <div class="logo">
                  <img src="${logoImg}" alt="logo">
                  </div>
                  <div class="search-box">
                      <input type="text" class="search-box-input"  placeholder="Search...">
                  </div>
                  <div class="icons">
                    <img src="${notificationsIcon}" alt="Icono home">
                    <img src="${homeIcon}" alt="Icono home">
                    <img src="${profileIcon}" alt="Icono profile">
                  </div>
              </nav>
          `;
		}
	}
}

customElements.define('menu-bar', MenuBar);
export default MenuBar;
