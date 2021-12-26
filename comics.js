

import { header } from './header';

import { displayAll } from './allcomics';

document.querySelector('#comics').innerHTML = `
${header}
<main id="comics__main"></main>
`

displayAll();