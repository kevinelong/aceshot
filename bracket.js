import { EMPTY, dict, list, link } from "./utils.js";

function bracket(data = {
    players: [
        { name: "Alfred Almond.", rating: 501, seed: Math.random() },
        { name: "Barry Bogart", rating: 502, seed: Math.random() },
        { name: "Charles Carpenter", rating: 503, seed: Math.random() },
        { name: "David Dolly", rating: 504, seed: Math.random() },
    ]
}) {
    data.players.sort((a, b) => a.seed - b.seed)
    const output = [];
    let rounds = 0;
    let count = data.players.length;

    while (count > 0) {
        count = Math.floor(count / 2);
        rounds += 1;
        console.log(count, rounds)
    }

    output.push(`ROUNDS "${rounds}"`);

    return output.join(EMPTY);
}

export { bracket }