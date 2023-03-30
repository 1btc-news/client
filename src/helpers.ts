export function countWords(str: string): number {
  // Trim leading and trailing whitespace from the string
  const trimmed = str.trim();

  // Split the string into an array of words
  const words = trimmed.split(/\s+/);

  // Return the length of the words array
  return words.length;
}

export function countWordsAndEstimateReadingTime(
  str: string,
  wordsPerMinute: number = 200
): { wordCount: number; readingTime: number } {
  const trimmed = str.trim();
  const words = trimmed.split(/\s+/);
  const wordCount = words.length;

  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return { wordCount, readingTime };
}
