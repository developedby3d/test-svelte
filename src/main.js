import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Testing Netlify CLI Auto Deploy'
	}
});

export default app;