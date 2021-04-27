import fsCard from './src/fsCard';
fsCard.install = function(Vue) {
	Vue.component(fsCard.name, fsCard);
};

export default fsCard;
