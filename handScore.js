var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function getHandScore(handStr) {
    var cards = handStr.split(" ");
    var suitScores = { S: 0, H: 0, C: 0, D: 0 };
    var rankCounts = {};
    var result = 0;
    for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
        var card = cards_1[_i];
        var suit = card[0];
        var rank = card.slice(1);
        var value = 0;
        if (["J", "Q", "K"].includes(rank)) {
            value = 10;
        }
        else if (rank === "A") {
            value = 11;
        }
        else {
            value = parseInt(rank, 10);
        }
        if (suit in suitScores) {
            suitScores[suit] += value;
        }
        rankCounts[rank] = (rankCounts[rank] || 0) + 1;
    }
    for (var rank in rankCounts) {
        if (rankCounts[rank] === 3) {
            if (rank === "A") {
                return 35;
            }
            result = 32.5;
        }
    }
    return Math.max.apply(Math, __spreadArray([result], Object.values(suitScores), false));
}
console.log(getHandScore("S8 D7 C7"));
console.log(getHandScore("S8 S10 CA"));
