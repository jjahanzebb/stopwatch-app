const checkDoubleDigits = (number) =>
  number < 9
    ? `0${number}`
    : number > 99
    ? number.toString().slice(-2)
    : number;

export const displayTime = (centiseconds) => {
  let minutes = 0;
  let seconds = 0;

  if (centiseconds < 0) {
    centiseconds = 0;
  }

  if (centiseconds < 100) {
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
