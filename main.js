const NEW_LINE = "\n";
const EMPTY = "";
const CONTENT = { "&#127942;&nbsp;Tournaments": `<a href="./bracket/">Bracket</a>` };


const getContent = (s) => CONTENT[s] ? CONTENT[s] : "COMING SOON";
const safe = (name) => encodeURI(name.toLowerCase());
const link = (s, h) => `<a href="${h ? h : "#" + safe(s)}" class="link">${s}</a>`;
const list = s => s.split(NEW_LINE).map(s => s.trim()).filter(s => s.length > 0);

const page = (name) => `
    <div class="page ${safe(name)}" id="${safe(name)}">
        <div class="title">${link("&lt;&nbsp;" + name, "#app")}</div>
        ${getContent(name)}
    </div>
`;

const PAGES = list(`
&#127968;&nbsp;Home
&#128274;&nbsp;Login/Logout
&#128214;&nbsp;Register
&#127942;&nbsp;Tournaments
&#127933;&nbsp;Players
&#128176;&nbsp;Auctions
`);

document.body.innerHTML = `
<nav>
    ${PAGES.map(s => link(s)).join(EMPTY)} 
    <div id="logo"><img src="ace-shot-logo.png"><br>Premium Tournament Direction<br>&amp;<br>Calcutta Auctions</div>
</nav>
<content>
    ${PAGES.map(s => page(s)).join(EMPTY)}
</content>`;