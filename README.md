# REDACTR---Text-Scrambler

## Description

This Application provides a simple way to scramble specific words in a text. Users can input the text they want to modify, specify the words that should be scrambled, and define a character to replace the original letters. The Application is designed to handle user interactions through a web interface and provide performance metrics such as execution time.

## How It Works

1. **Add Event Listener**: The Application listens for a click event on the button with the ID `redactButton`.
2. **Gather Input Values**: When the button is clicked, the Application collects values from three input fields:
   - `inputText`: Contains the original text to scramble.
   - `wordsToScramble`: A space-separated string of words that need to be scrambled.
   - `scrambleWith`: The character to use for scrambling. Defaults to `*` if no value is provided.
3. **Initialize Performance Tracking**: It records the start time for the operation to measure execution time.
4. **Scramble Process**: The Application performs the following steps:
   - Iterates over the list of words to scramble.
   - For each word, it creates a regular expression to match the word as a whole word (`\\b` denotes word boundaries).
   - Counts the number of matches in the text and updates the total words matched and characters scrambled.
   - Replaces each occurrence of the word in the original text with the scramble character, repeated to match the word's length.
5. **Performance Metrics Calculation**: After scrambling, it records the end time, calculates, and displays the following metrics:
   - Total words scanned in the original text.
   - Total words that matched the scramble list.
   - Total characters that were scrambled.
   - Execution time of the scramble process.
6. **Display Output**: The modified text and performance metrics are displayed in corresponding elements on the web page.

## Usage

Users will be able to enter their text, specify words, and choose a scramble character before clicking the `redactButton` to perform the operation.

## Notes

- The Application does not handle overlapping words to scramble. If one word is contained within another, both will be scrambled independently.
- Special characters in the `wordsToScramble` input may affect the regular expression. Escape special regex characters if needed.
- The performance of the Application may vary based on the browser's JavaScript engine and the complexity of the text input.
