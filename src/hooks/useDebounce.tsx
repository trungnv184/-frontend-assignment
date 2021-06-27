import { useEffect, useState } from "react";
const useDebounce = (searchTerm: string, delay: number) => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm, delay]);

  return debouncedSearchTerm;
};

export default useDebounce;
