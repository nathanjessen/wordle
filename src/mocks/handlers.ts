import { rest } from "msw";
import { WORDS_API, WORD_API } from "../constants";
import { words } from '../data/words';

const wordsHandler = rest.get(WORDS_API, (req, res, ctx) => {
  const wordLength = req.url.searchParams.get('length');
  let results = words;

  if (wordLength) {
    const numLength = parseInt(wordLength);
    results = words.filter(word => word.length === numLength);
  }

  return res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json(results)
  );
});

const wordHandler = rest.get(WORD_API, (req, res, ctx) => {
  const wordLength = req.url.searchParams.get('length');
  let results = words;

  if (wordLength) {
    const numLength = parseInt(wordLength);
    results = words.filter(word => word.length === numLength);
  }

  return res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json(results[Math.floor(Math.random() * results.length)])
  );
});

export const handlers = [
  wordsHandler,
  wordHandler,
];
