export const formatTextWithEllipsis = (str, numOfChars) => {
    if (str.length > numOfChars) {
      return str.substring(0, numOfChars).concat('...');
    }
    return str;
  };
  