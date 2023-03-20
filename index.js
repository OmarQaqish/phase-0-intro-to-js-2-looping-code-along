// Code your solutions in this file

const names = ["Charlie", "Samip", "Ali"];
const event = "birthday";

function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
 }
  return messages;
}
const messages = writeCards(names, event);

function countDown(i) {
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
