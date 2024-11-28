import { http } from 'msw';
import { WORDS_API, WORD_API } from '../constants';
import { words } from '../data/words';

const wordsHandler = http.get(WORDS_API, ({ request }) => {
  const url = new URL(request.url);
  const wordLength = url.searchParams.get('length');
  let results = words;

  if (wordLength) {
    const numLength = parseInt(wordLength);
    results = words.filter((word) => word.length === numLength);
  }

  return new Response(
    JSON.stringify(results),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
});

const wordHandler = http.get(WORD_API, ({ request }) => {
  const url = new URL(request.url);
  const wordLength = url.searchParams.get('length');
  let results = words;

  if (wordLength) {
    const numLength = parseInt(wordLength);
    results = words.filter((word) => word.length === numLength);
  }

  return new Response(
    JSON.stringify(results[Math.floor(Math.random() * results.length)]),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
});

export const handlers = [wordsHandler, wordHandler];
