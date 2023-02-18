const { mouse, left, right } = require("@nut-tree/nut-js");

let intervalID;

const startInterval = async () => {
  intervalID = setInterval(async () => {
    await mouse.move(right(20));
    await mouse.move(left(20));
  }, 300);
};
const stopInterval = async () => {
  clearInterval(intervalID);
};

module.exports = {
    startInterval,
    stopInterval
}