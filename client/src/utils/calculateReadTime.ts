function calculateReadingTime(content: string) {
    const wordsPerMinute = 200;

    const wordCount = content.split(' ').length;
    const readingTimeMinutes:  number = Math.ceil(wordCount / wordsPerMinute);

    return readingTimeMinutes;
}



export default calculateReadingTime
