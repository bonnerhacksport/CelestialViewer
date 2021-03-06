import {useRef, useState, useLayoutEffect} from 'react';

export function useDimensions() {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({})
  useLayoutEffect(() => {
    setDimensions(ref.current.getBoundingClientRect());
  }, [ref]);
  return { ref, ...dimensions }
  
}