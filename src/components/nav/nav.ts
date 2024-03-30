import navStyles from './nav.css';

class Nav extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += ``;

			const css = this.ownerDocument.createElement('style');
			css.textContent = `

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo img {
      width: 100px;
      height: auto;
    }

    .search {
      display: flex;
      align-items: center;
    }

    .search input[type='search'] {
      border: 1px solid #ccc;
      border-radius: 3px;
      padding: 5px;
      margin-right: 10px;
    }

    .home,
    .profile {
      cursor: pointer;
    }

    .homeContainer,
    .profileContainer {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .home img,
    .profile img {
      width: 25px;
      height: auto;
    }

    .searchIcon,
    .homeIcon,
    .profileImg {
      width: 20px;
      height: auto;
      margin-left: 10px;
    }

      `;

			this.shadowRoot.innerHTML += `
						 <style> ${navStyles}</style>

            <section class="container">
						 <div class="logo">
               <img class= "logo" src="../../assets/F&L.png" alt="Post image">
             </div>
             <div class="search">
               <input type="search" placeholder="Search"/> <img class= "searchIcon" src="../../assets/search.png" alt="searchIcon">
             </div>
             <div class="home">
               <div class="homeContainer">
                 <img class= "homeIcon" src="../../assets/home.png" alt="home">
               </div>
             </div>
               <div class="profile">
                <div class="profileContainer">
                 <img class= "profileImg" src="../../assets/profileImg.png" alt="Profile">
                </div>
               </div>
            </section>
        `;
		}
	}
}

customElements.define('nav-component', Nav);
export default Nav;
