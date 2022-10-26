const checkDoubleDigits = (number) => (number <= 9 ? `0${number}` : number);

export const displayTime = (centiseconds) => {
  let minutes = 0;
  let seconds = 0;

  if (centiseconds < 0) {
    centiseconds = 0;
  }

  if (centiseconds < 100) {
    return `00:00:${checkDoubleDigits(centiseconds)}`;
  }

  let centisecondsRemainder = centiseconds % 100;
  seconds = (centiseconds - centisecondsRemainder) / 100;

  if (seconds < 60) {
    return `00:${checkDoubleDigits(seconds)}:${checkDoubleDigits(
      centisecondsRemainder
    )}`;
  }

  let secondsRemainder = seconds % 60;
  minutes = (seconds - secondsRemainder) / 60;

  return `${checkDoubleDigits(minutes)}:${checkDoubleDigits(
    secondsRemainder
  )}:${checkDoubleDigits(centisecondsRemainder)}`;
};
