// Code your solutions in this file
function writeCards(names, event) {

    let messages = [];

    for (let index = 0; index < names.length; index++) {

        messages.push(
            `Thank you, ${names[index]}, for the wonderful surprise gift!`
            );
    }
    return messages;
} 

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}