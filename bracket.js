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
const connector = (content) => div("connector", content);
const merger = (content) => div("merger", content);
const line = (content) => div("line", content);


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
    let mups = [];
    let pairs = [];
    let totalPairs = 0;
    let goal = 1;

    while (goal < Math.ceil(data.players.length / 2)) {
        goal *= 2;
    }

    while (data.players.length > 0) {
        if (data.players.length === 1) {
            pairs.push(participants([data.players.pop(), { name: "BYE" }].map(
                p => participant(span(p.name))
            )));
        } else {
            pairs.push(participants([data.players.pop(), data.players.pop()].map(
                p => participant(span(p.name))
            )));
        }
        totalPairs += 1;
    }
    while (totalPairs < goal) {
        pairs.push(participants(participant(span("BYE")) + participant(span("BYE")))) +
            matchup(participants(participant(span("BYE")) + participant(span("BYE"))))
        totalPairs += 1;
    }
    for (let i = 0; i < pairs.length; i += 2) {
        mups.push(winners(matchups(
            matchup(pairs[i]) +
            matchup(pairs[i + 1])
        ) + connector(merger() + line())));
    }
    roundList.push(round(mups.join(EMPTY)));
    while(goal > 1){
        debugger;
        mups=[];
        pairs=[];
        totalPairs=0;
        goal = Math.floor(goal/2);
        while (totalPairs < goal) {
            pairs.push(participants(participant(span("")) + participant(span("")))) +
                matchup(participants(participant(span("")) + participant(span(""))))
            totalPairs += 1;
        }
        for (let i = 0; i < pairs.length; i += 2) {
            mups.push(winners(matchups(
                matchup(pairs[i]) +
                matchup(pairs[i + 1])
            ) + (goal > 1 ? connector(merger() + line()) :"") ));
        }
        roundList.push(round(mups.join(EMPTY)));
        rounds += 1;
    }
    count = Math.floor(count / 2);
    output.push(`ROUNDS "${rounds}"`);
    output.push(roundList.join(EMPTY));

    return `<div class="bracket">${output.join(EMPTY)}</div>`;
}

export { bracket }