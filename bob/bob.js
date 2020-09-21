const cleanMessage = (message) =>
  message.replace(/\s|[',','!','%','^','*','@','#','$','(',')','*','^']/g, "");

const messageIsQuestion = (message) =>
  cleanMessage(message).endsWith("?") ? true : false;

const messageIsCapitalized = (message) =>
  cleanMessage(message)
    .replace(/\d|['?']/g, "")
    .match("^[A-Z]+$", "ABC")
    ? true
    : false;

const messageIsEmpty = (message) =>
  cleanMessage(message).length === 0 ? true : false;

export const hey = (message) => {
  if (messageIsEmpty(message)) {
    return "Fine. Be that way!";
  } else if (messageIsQuestion(message) && messageIsCapitalized(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (messageIsQuestion(message)) {
    return "Sure.";
  } else if (messageIsCapitalized(message)) {
    return "Whoa, chill out!";
  } else {
    return "Whatever.";
  }
};
