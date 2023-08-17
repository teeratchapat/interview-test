function getHandScore(handStr: string): number {
    const cards = handStr.split(" ");

    const suitScores: { [key: string]: number } = { S: 0, H: 0, C: 0, D: 0 };
    const rankCounts: { [key: string]: number } = {};

    let result = 0;

    for (let card of cards) {
        const suit = card[0];
        const rank = card.slice(1);
        let value = 0;

        if (["J", "Q", "K"].includes(rank)) {
            value = 10;
        } else if (rank === "A") {
            value = 11;
        } else {
            value = parseInt(rank, 10);
        }

        if (suit in suitScores) {
            suitScores[suit] += value;
        }

        rankCounts[rank] = (rankCounts[rank] || 0) + 1;
    }

    for (let rank in rankCounts) {
        if (rankCounts[rank] === 3) {
            if (rank === "A") {
                return 35;
            }
            result = 32.5;
        }
    }

    return Math.max(result, ...Object.values(suitScores));
}

console.log(getHandScore("S8 D7 C7"));
console.log(getHandScore("S8 S10 CA"));
