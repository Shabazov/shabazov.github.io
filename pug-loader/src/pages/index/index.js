import createMenu from '../../components/menu/menu';
import '../../style.styl';

let menu = createMenu(['home', 'gallery', 'fcuk', 'contacts'], 'menu');
document.body.appendChild(menu);

console.log('index pug');