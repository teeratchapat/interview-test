function getQuestionPart(words: string[]): void {
    let commonWord: string | null = findCommonWord(words);

    if (commonWord === null) return;

    let resultArrWord: string[] = words.map((word) =>
        word.split(commonWord).join("").trim()
    );
    console.log(resultArrWord);
}

function findCommonWord(words: string[]): string | null {
    let firstWord: string = words[0];

    for (let len = firstWord.length; len > 0; len--) {
        for (let i = 0; i <= firstWord.length - len; i++) {
            let substring: string = firstWord.substring(i, i + len);

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
