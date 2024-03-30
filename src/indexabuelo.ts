import abueloStyles from './indexAbuelo.css';

import './components/exportPapa';

import dataPostImage from './data/dataPostImage';
import PostImage, { Attribute as PostImageAttribute } from './components/postImage/postImage';

import dataPostTweet from './data/dataPostTweet';
import PostTweet, { Attribute as PostTweetAttribute } from './components/postTweet/postTweet';

import dataNavegador from './data/dataNav';
import Nav from './components/nav/nav';

class AppContainer extends HTMLElement {
	NavList: Nav[] = [];
	PostImageList: PostImage[] = [];
	PostTweetList: PostTweet[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		dataPostImage.forEach((data) => {
			//Bucle que recorre cada elemento en dataPostImage

			const PostImageCard = this.ownerDocument.createElement('post-image') as PostImage;

			// creamos nuestra tarjeta con la info especifica que necesita mostrar
			PostImageCard.setAttribute(PostImageAttribute.image, data.image);
			PostImageCard.setAttribute(PostImageAttribute.isliked, data.isLiked);
			PostImageCard.setAttribute(PostImageAttribute.issaved, data.isSaved);
			PostImageCard.setAttribute(PostImageAttribute.likescount, data.likesCount);
			PostImageCard.setAttribute(PostImageAttribute.username, data.username);
			PostImageCard.setAttribute(PostImageAttribute.description, data.description);

			// Añade el elemento PostImage a la lista PostImageList
			this.PostImageList.push(PostImageCard);
			console.log('list', this.PostImageList);
		});

		dataPostTweet.forEach((data) => {
			//Bucle que recorre cada elemento en dataPostImage

			const PostTweetCard = this.ownerDocument.createElement('post-tweet') as PostTweet;

			// creamos nuestra tarjeta con la info especifica que necesita mostrar
			PostTweetCard.setAttribute(PostTweetAttribute.image, data.image);
			PostTweetCard.setAttribute(PostTweetAttribute.description, data.description);
			PostTweetCard.setAttribute(PostTweetAttribute.username, data.username);

			// Añade el elemento PostTweet a la lista PostTweetList
			this.PostTweetList.push(PostTweetCard);
			console.log('list', this.PostTweetList);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `
            <style>${abueloStyles}
			</style>
        `;
		}
		const navegador = this.ownerDocument.createElement('section');
		navegador.className = 'nav';
		this.NavList.forEach((navItem) => {
			navegador.appendChild(navItem);
		});

		const container = this.ownerDocument.createElement('section');
		container.className = 'container';

		const PostImageCards = this.ownerDocument.createElement('div');
		PostImageCards.className = 'container-post';
		this.PostImageList.forEach((PostImageCard) => {
			PostImageCards.appendChild(PostImageCard);
		});
		container.appendChild(PostImageCards);

		const PostTweetCards = this.ownerDocument.createElement('div');
		PostTweetCards.className = 'container-tweet';
		this.PostTweetList.forEach((PostTweetCard) => {
			PostTweetCards.appendChild(PostTweetCard);
		});
		container.appendChild(PostTweetCards);
		this.shadowRoot?.appendChild(container);
		this.shadowRoot?.appendChild(navegador);
	}
}

customElements.define('app-container', AppContainer);
