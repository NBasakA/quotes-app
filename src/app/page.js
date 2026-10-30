'use client';

import { useState, useEffect } from 'react';
import { Button } from '../component/Button';
import { QuoteText } from '../component/typography/QuoteText';
import { Subtitle } from '../component/typography/Subtitle';
import { quotes as initialQuotes } from '../quotes';

export default function Home() {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [index, setIndex] = useState(0);
  const userId = 'user-1';

  const currentQuote = quotes[index] ?? null;

  function handleClick() {
    console.log("Current index is", index);
    console.log("Incrementing index....");
    setIndex((prevIndex) => prevIndex + 1);
  }

  function handleLike() {
    if (!currentQuote) return;

    setQuotes((prevQuotes) =>
      prevQuotes.map((quote, quoteIndex) => {
        if (quoteIndex !== index) return quote;

        const likedBy = quote.likedBy || [];
        const isLiked = likedBy.includes(userId);

        return {
          ...quote,
          likedBy: isLiked ? likedBy.filter((id) => id !== userId) : [...likedBy, userId],
        };
      })
    );
  }

  useEffect(() => {
    console.log('Home component rendered.');
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center p-20 rounded-md bg-zinc-100">
        <div className="flex items-center align-items justify-end mb-6 gap-3">
          <Button title="❤️" handleClick={handleLike} />
          <span>{currentQuote?.likedBy?.length || 0}</span>
        </div>

        <div className="pb-6">
          <QuoteText className="text-zinc-800">
            {currentQuote?.quote || 'No quote available'}
          </QuoteText>
          <Subtitle>{currentQuote?.author || 'Unknown author'}</Subtitle>
        </div>

        <Button title="Next Quote" handleClick={handleClick} />
      </div>
    </main>
  );
}
