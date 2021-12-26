import '../global.css';

import './comics.css';

import { header } from '../header';

import { displayAll } from './allcomics';

document.querySelector('#comics').innerHTML = `
${header}
<main id="comics__main">
    <div id="wrapper"></div>
</main>
`

displayAll();