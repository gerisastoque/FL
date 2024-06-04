import dashboardStyles from './dashboard.css';
db;
import 'firebase/firestore';

// componentes
import { MenuBar, CreatePostButton, MenuPhoneBar } from '../../components/exportPapa';
import PostImage, { Attribute as PostImageAttribute } from '../../components/postImage/postImage';
import PostTweet, { Attribute as PostTweetAttribute } from '../../components/postTweet/postTweet';

// Data
import { app, db } from '../../firebase/firebaseConfig';

class Dashboard extends HTMLElement {
	PostImageList: PostImage[] = [];
	PostTweetList: PostTweet[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// Obtener la información desde Firebase
		db.collection('posts')
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					const data = doc.data();
					// Crear una tarjeta de post con la información obtenida
					const PostImageCard = this.ownerDocument.createElement('post-image') as PostImage;
					PostImageCard.setAttribute(PostImageAttribute.image, data.image);
					PostImageCard.setAttribute(PostImageAttribute.isLiked, data.isLiked ? 'true' : 'false');
					PostImageCard.setAttribute(PostImageAttribute.isSaved, data.isSaved ? 'true' : 'false');
					PostImageCard.setAttribute(PostImageAttribute.likescount, data.likesCount);
					PostImageCard.setAttribute(PostImageAttribute.username, data.username);
					PostImageCard.setAttribute(PostImageAttribute.description, data.description);

					// Añadir la tarjeta a la lista
					this.PostImageList.push(PostImageCard);
				});
			});

		db.collection('tweets')
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					const data = doc.data();
					// Crear una tarjeta de tweet con la información obtenida
					const PostTweetCard = this.ownerDocument.createElement('post-tweet') as PostTweet;
					PostTweetCard.setAttribute(PostTweetAttribute.image, data.image);
					PostTweetCard.setAttribute(PostTweetAttribute.description, data.description);
					PostTweetCard.setAttribute(PostTweetAttribute.username, data.username);

					// Añadir la tarjeta a la lista
					this.PostTweetList.push(PostTweetCard);
				});
			});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `
            <style>${dashboardStyles}</style>`;
		}

		const menuBar = this.ownerDocument.createElement('menu-bar') as MenuBar;
		menuBar.className = 'menubar';
		const menuPhoneBar = this.ownerDocument.createElement('menu-phone') as MenuPhoneBar;
		menuPhoneBar.className = 'menuphone';

		const container = this.ownerDocument.createElement('section');
		container.className = 'container';

		const PostImageCards = this.ownerDocument.createElement('div');
		PostImageCards.className = 'container-post';
		this.PostImageList.forEach((post) => {
			PostImageCards.appendChild(post);
		});
		container.appendChild(PostImageCards);

		const PostTweetCards = this.ownerDocument.createElement('div');
		PostTweetCards.className = 'container-tweet';
		this.PostTweetList.forEach((tweet) => {
			PostTweetCards.appendChild(tweet);
		});

		container.appendChild(PostTweetCards);
		const createPostButton = this.ownerDocument.createElement('create-post-button') as CreatePostButton;
		this.shadowRoot.appendChild(createPostButton);
		this.shadowRoot.appendChild(menuBar);
		this.shadowRoot.appendChild(menuPhoneBar);

		this.shadowRoot?.appendChild(container);
	}
}
customElements.define('app-dashboard', Dashboard);
export default Dashboard;
