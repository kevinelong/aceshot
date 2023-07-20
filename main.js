const safe = (name) => encodeURI(name.toLowerCase());
const page = (name) =>
    `<div class="page ${safe(name)}" id="${safe(name)}">
<div class="title">${link("&lt;&nbsp;" + name, "#app")}</div>
</div>`;
const link = (s, h) => `<a href="${h ? h : "#" + safe(s)}" class="link">${s}</a>`;
const list = s => s.split(NEW_LINE).map(s => s.trim()).filter(s => s.length > 0);

const NEW_LINE = "\n";
const EMPTY = "";
const PAGES = list(`
&#127968;&nbsp;Home
&#128274;&nbsp;Login/Logout
&#128214;&nbsp;Register
&#127942;&nbsp;Tournaments
&#127933;&nbsp;Players
&#128176;&nbsp;Auctions
`);

let html = `<nav>` + PAGES.map(s => link(s)).join(EMPTY) + `</nav>`;
html += `<content>` + PAGES.map(s => page(s)).join(EMPTY) + `</content>`;
document.body.innerHTML = html;
