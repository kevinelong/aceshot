import { PIPE, EMPTY, dict, list, link, page, safe } from "./utils.js";
import { bracket } from "./bracket.js";

// const HOME = `<div id="logo"><img src="ace-shot-logo.png"><br>Premium Tournament Direction<br>&amp;<br>Calcutta Auctions</div>`;
const HOME = bracket();
const PAGES = list(`
&#127968;|Home
&#128274;|Login/Logout
&#128214;|Register
&#127942;|Tournaments
&#127933;|Players
&#128176;|Auctions
`);

window.CONTENT = dict(`
    Home        | ${HOME}
    Tournaments | ${bracket()}
`);

document.body.innerHTML = `
    <nav>
        ${PAGES.map(p => link(p, "#" + safe(p.split(PIPE)[1]))).join(EMPTY)}
        ${HOME}
    </nav>
    <content>
        ${PAGES.map(p => page(p.split(PIPE)[1])).join(EMPTY)}
    </content>
`;