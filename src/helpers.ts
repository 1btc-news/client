export function countWords(str: string): number {
  const trimmed = str.trim();
  const words = trimmed.split(/\s+/);
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
