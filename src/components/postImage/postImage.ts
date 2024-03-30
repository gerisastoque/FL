import postStyles from './postImage.css';

// Empieza nuestro "diccionario" para los nombres de los atributos HTML que el componente puede recibir.
// Recomendación de Anne, es mejor manejarlos sin mayusculas, (apesar que en la data esten con mayusculas) porque aveces ts no las lee y marca error

export enum Attribute {
	'image' = 'image',
	'isLiked' = 'isLiked',
	'isSaved' = 'isSaved',
	'likescount' = 'likescount',
	'username' = 'username',
	'description' = 'description',
}

class PostImage extends HTMLElement {
	image?: string;
	isLiked?: boolean;
	isSaved?: boolean;
	likescount?: string;
	username?: string;
	description?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	changeLike = () => {
		this.isLiked = !this.isLiked;
		console.log('isLiked:', this.isLiked);
		this.render();
	};

	changeSaved = () => {
		this.isSaved = !this.isSaved;
		console.log('isSaved:', this.isSaved);
		this.render();
	};

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			isLiked: null,
			isSaved: null,
			likescount: null,
			username: null,
			description: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute.image:
				this.image = newValue || '';
				break;
			case Attribute.isLiked:
				this.isLiked = newValue === 'true';
				break;
			case Attribute.isSaved:
				this.isSaved = newValue === 'true';
				break;
			case Attribute.likescount:
				this.likescount = newValue || '';
				break;
			case Attribute.username:
				this.username = newValue || '';
				break;
			case Attribute.description:
				this.description = newValue || '';
				break;
			default:
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();

		// Obtén los botones dentro del shadowRoot
		const likeBtn = this.shadowRoot?.querySelector('#likeBtn');
		const saveBtn = this.shadowRoot?.querySelector('#saveBtn');

		// Agrega listeners de eventos solo si los botones existen
		likeBtn?.addEventListener('click', this.changeLike.bind(this));
		saveBtn?.addEventListener('click', this.changeSaved.bind(this));
	}

	render() {
		let corazon = '../../assets/emptyHeart.png';
		if (this.isLiked) {
			corazon = '../../assest/heart.png';
		}

		let save = '../../assest/emptySave.png';
		if (this.isSaved) {
			save = '../../assest/save.png';
		}

		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			const css = this.ownerDocument.createElement('style');
			css.textContent = `

			.container {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 35rem;
				height: 35rem;
				border-radius: 1.5rem;
				background: #2f60e9;
			}

			.imgContainer {
				width: 90%;
				height: 85%;
				display: flex;
				justify-content: center;
				overflow: hidden;
				border-radius:.5rem;
				padding-block:1rem;
			}

			.img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 1rem;
			}

			.userContent{
				width: 100%;
				height: 15%;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				padding-top:2rem;
			}

			.iconContainer {
				height: 30%;
				display: flex;
				justify-content: flex-start;
			}

			.icon{
				width: 100%;
				height: 100%;
				padding-left:.4rem;
				margin-top:-1.5rem;
			}

			.likes{
				color: #CBF900;
				font-family: Inter;
				font-size: 1rem;
				font-style: normal;
				font-weight: 600;
				padding-left:.4rem;
				margin-top:-1rem;
			}

			.likes, .username, .description{
				text-align: left;
			}

			.username {
				color: #FFF;
				font-family: Inter;
				font-size: 1.2rem;
				font-style: normal;
				font-weight: 700;
				padding-left:.5rem;
				margin-top:-.5rem;
			}

			.description {
				color: #FFF;
				font-family: Inter;
				font-size: 1.2rem;
				font-style: normal;
				font-weight: 400;
			}

    `;

			this.shadowRoot.appendChild(css);

			this.shadowRoot.innerHTML += `
						 <style> ${postStyles}</style>

            <section class="container">
						 <div class="imgContainer">
						   <img class= "img" src="${this.image}" alt="Post image">
						 </div>
						 <div class="userContent">
						   <div class="iconContainer">
							    <img class= "icon" src="${this.isLiked}" alt="Like icon" id="likeBtn">
							   <img class= "icon" src="${this.isSaved}" alt="Save icon" id="saveBtn">
							 </div>
							   <p class= "likes">${this.likescount} likes</p>
							 <p
							   <span class= "username" >${this.username} </span>: <span class= "description"> ${this.description}</span>
							 </p>

						 </div>
            </section>
        `;
		}
	}
}

customElements.define('post-image', PostImage);
export default PostImage;
