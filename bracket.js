import { EMPTY, dict, list, link } from "./utils.js";
/* <div class="bracket">
  <section class="round quarterfinals">
    <div class="side winners">
      <div class="matchups">
        <div class="matchup">
          <div class="participants"></div> */
const tag = (tagName, content, attributes = "") => `<${tagName} ${attributes}>${content}</${tagName}>`
const div = (className, content, attributes = "") => tag("div", content, `class="${className}"`);
const span = (content, className, attributes = "") => tag("span", content, `class="${className}"`);
const winners = (content) => div("winners", content);
const round = (content) => div("round quarterfinals", content);
const matchups = (content) => div("matchups", content);
const matchup = (content) => div("matchup", content);
const participants = (content) => div("participants", content);
const participant = (content) => div("participant", content);

function bracket(data = {
    players: [
        { name: "Alfred Almond.", rating: 501, seed: Math.random() },
        { name: "Barry Bogart", rating: 502, seed: Math.random() },
        { name: "Charles Carpenter", rating: 503, seed: Math.random() },
        { name: "David Dolly", rating: 504, seed: Math.random() },
        { name: "Eric Eagle", rating: 501, seed: Math.random() },
    ],
    sides: ["A", "B"]
}) {
    data.players.sort((a, b) => a.seed - b.seed)
    const output = [];
    let rounds = 0;
    let count = data.players.length;
    const roundList = []

    while (count > 1) {
        const pairs = [];
        const mups = [];

        while (data.players.length > 1) {
            pairs.push(participants([data.players.pop(), data.players.pop()].map(
                p => participant(span(p.name))
            )));
        }
        if (data.players.length === 1) {
            pairs.push(participants([data.players.pop(), {name:"BYE"}].map(
                p => participant(span(p.name))
            )));
        }
        
        mups.push(winners(matchups(
            pairs.map(p => matchup(p)).join(EMPTY)
        )));
        roundList.push(round(mups.join(EMPTY)));
        rounds += 1;
        count = Math.floor(count / 2);
    }
    output.push(`ROUNDS "${rounds}"`);
    output.push(roundList.join(EMPTY));

    return `<div class="bracket">${output.join(EMPTY)}</div>`;
}

export { bracket }