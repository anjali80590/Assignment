import { useState } from "react";

function useToggleItems(initialItems, initialPosition = 0) {
  let [index, setIndex] = useState(initialPosition);

  let toggle = () => {
    setIndex((prev) => (prev + 1) % initialItems.length);
  };
  return [initialItems[index], toggle];
}

export default useToggleItems;
  
  // usecallback is react hook that caches fucntion so that fucntion does not get recreated every time commponent rerender unless depencides changes 
// usememo is hooks that remeer the result of caluclation so it does not need to reculate the same value everytime unless component rerenders unless its dpncdies change 
// React.memo is highroer component tha prevnet a component from reredner if its props haven't changed 
// useref sorte values that persist between renders without cauing renrender 
// usedfil for dom acess or to store preoivous value 
// unique prevents react from rendering entire list uncessary 

// A Higher Order Component (HOC) is a function that takes a component and returns a new component with added features. reuse logic in loading auth theme 