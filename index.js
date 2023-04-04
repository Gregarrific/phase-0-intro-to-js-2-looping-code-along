
var messages = [];

function writeCards(name, event) {
  for (let i = 0; i < name.length; i++) {
    messages[i] = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }

  return messages;
}

writeCards(name, event);

function countDown(number) {
    while (number > -1) {
        console.log(number);
        number--;
    }
}

countDown(5);