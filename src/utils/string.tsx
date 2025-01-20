import { MutableRefObject } from 'react';

export const isTextClamped = (textRef: MutableRefObject<any>) => {
  if (!textRef?.current) return false;

  const element = textRef.current;
  return element.scrollHeight > element.clientHeight;
};

export const mapNewLines = (text: string) => {
  if (!text) return [];

  return text.split('\n').map((item, i, arr) => {
    const line = <span key={i}>{item}</span>;

    if (i === arr.length - 1) {
      return line;
    }

    return [line, <br key={`${i}br`} />];
  });
};
