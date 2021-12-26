import './style.css';

import { header } from './header';

import { debounce } from './util';

document.querySelector('#app').innerHTML = `
${header}
<main>
<div>
<input type="text" id="input__box">
</div>
<div id="display__quary"></div>
</main>
`

let inputBox = document.getElementById("input__box");

inputBox.oninput = debounce;