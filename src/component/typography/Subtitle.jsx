'use client';

import { useEffect} from "react";

export function Subtitle ({element, children}) {

     useEffect(() => {
    console.log("Subtitle component rendered.");
  }, []);

    switch (element) {
        case 'h2':
            return(<h2 className="text-sm text-right">{children}</h2>)

        case 'h3':
            return(<h3 className="text-sm text-right">{children}</h3>)
        
        default:
            return(<span className="text-sm font-bold italic block text-right">{children}</span>)
    }
}