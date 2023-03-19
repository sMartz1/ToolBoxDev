const { mouse, up, down } = require("@nut-tree/nut-js");

let intervalID;
//Mouse speed px per second
const mouseSpeed = 1600
mouse.config.mouseSpeed = mouseSpeed

const startInterval = async () => {
  intervalID = setInterval(async () => {
    await mouse.move(up(60));
    await mouse.move(down(60));
  }, 400);
};
const stopInterval = async () => {
  clearInterval(intervalID);
};

module.exports = {
    startInterval,
    stopInterval
}