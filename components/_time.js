const checkDoubleDigits = (number) => (number < 9 ? `0${number}` : number);

export const displayTime = (centiseconds) => {
  var minutes = 0;
  var seconds = 0;

  if (centiseconds < 0) {
    centiseconds = 0;
  } else if (centiseconds < 100) {
    return `00:00:${checkDoubleDigits(centiseconds)}`;
  }

  seconds = (centiseconds - (centiseconds % 100)) / 100;

  if (seconds < 60) {
    return `00:${checkDoubleDigits(seconds)}:${checkDoubleDigits(
      centiseconds
    )}`;
  }

  minutes = (seconds - (seconds % 60)) / 60;

  return `${checkDoubleDigits(minutes)}:${checkDoubleDigits(
    seconds
  )}:${checkDoubleDigits(centiseconds)}`;
};
