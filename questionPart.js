function getQuestionPart(words) {
    var commonWord = findCommonWord(words);
    if (commonWord === null)
        return;
    var resultArrWord = words.map(function (word) {
        return word.split(commonWord).join("").trim();
    });
    console.log(resultArrWord);
}
function findCommonWord(words) {
    var firstWord = words[0];
    for (var len = firstWord.length; len > 0; len--) {
        for (var i = 0; i <= firstWord.length - len; i++) {
            var substring = firstWord.substring(i, i + len);
            if (words[1].includes(substring) && words[2].includes(substring)) {
                return substring;
            }
        }
    }
    return null;
}
getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]);
getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]);
getQuestionPart(["ROOM123", "BATHROOM", "ROOMBATH"]);
