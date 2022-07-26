const isDev = process.env.NODE_ENV !== 'development';

export const WORDS_API: string = isDev ? '/words' : 'https://random-word-api.herokuapp.com/all';
export const WORD_API: string = isDev ? '/word' : 'https://random-word-api.herokuapp.com/word?length=5';
