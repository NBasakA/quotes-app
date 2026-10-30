"use client";

import { Subtitle } from "../component/typography/Subtitle";
import { QuoteText } from "../component/typography/QuoteText";
import { quotes as InitialQuotes } from "../quotes";
import { useState, useEffect } from "react";
import {Button} from "../component/Button";

export default function Home() {
  const quotes = [...InitialQuotes];
  let [index, setIndex] = useState(0);

  function handleClick() {
    console.log("Current index is", index);
    console.log("Incrementing index....");
    setIndex((prevIndex) => prevIndex + 1);
  }

  useEffect(() => {
    console.log("Home component rendered.");
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center p-20 rounded-md bg-zinc-100">
        <div className='pb-6'>
          <QuoteText className="text-zinc-100">{quotes[index].quote}</QuoteText>
          <Subtitle>{quotes[index].author}</Subtitle>
        </div>
        <Button title="Next Quote" handleClick={handleClick} />
      </div>
    </main>
  );
}

//TODO : Till now applied what they do during lesson. Now go on with the HW.
