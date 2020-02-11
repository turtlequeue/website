import { useState, useEffect } from "react";

const useMediaQuery = query => {
  const [match, setMatch] = useState(false);

  useEffect(
    () => {
      const updateMatch = () => setMatch(window.matchMedia(query).matches);

      updateMatch();
      //https://stackoverflow.com/a/60000747
      try {
        // Chrome & Firefox
        window.matchMedia(query).addEventListener("change", updateMatch);
      } catch (e1) {
        try {
          // Safari
          window.matchMedia(query).addListener(updateMatch);
        } catch (e2) {
          console.error(e2);
        }
      }
      return () => {
        window.matchMedia(query).removeEventListener("change", updateMatch);
      };
    },
    [query]
  );

  return match;
};

export default useMediaQuery;
