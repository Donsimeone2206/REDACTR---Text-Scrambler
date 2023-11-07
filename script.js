document.getElementById("redactButton").addEventListener("click", function () {
  const originalText = document.getElementById("inputText").value;
  const wordsToScramble = document
    .getElementById("wordsToScramble")
    .value.split(" ");
  const scrambleWith = document.getElementById("scrambleWith").value || "*";

  let startTime = performance.now();

  let scrambledText = originalText;
  let totalWordsMatched = 0;
  let totalCharsScrambled = 0;

  wordsToScramble.forEach((word) => {
    const regex = new RegExp("\\b" + word + "\\b", "gi");
    const matchCount = (scrambledText.match(regex) || []).length;
    totalWordsMatched += matchCount;
    totalCharsScrambled += word.length * matchCount;
    scrambledText = scrambledText.replace(regex, (match) =>
      scrambleWith.repeat(match.length)
    );
  });

  let endTime = performance.now();

  document.getElementById("outputText").textContent = scrambledText;
  document.getElementById(
    "totalWordsScanned"
  ).textContent = `Total words scanned: ${originalText.split(/\s+/).length}`;
  document.getElementById(
    "totalWordsMatched"
  ).textContent = `Total words matched: ${totalWordsMatched}`;
  document.getElementById(
    "totalCharsScrambled"
  ).textContent = `Total characters scrambled: ${totalCharsScrambled}`;
  document.getElementById("executionTime").textContent = `Execution time: ${(
    endTime - startTime
  ).toFixed(2)} ms`;
});
