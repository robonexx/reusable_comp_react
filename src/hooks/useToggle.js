// creating a useToggle hook for this will be used quite frequently
import { useState } from 'react';

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => setToggle((prevState) => !prevState);
  return { toggle, toggler };
};
