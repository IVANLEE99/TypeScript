import "./style/index.less";
import GameControl from "./moduls/GameControl";

let gameControl = new GameControl();

setInterval(function () {
  console.log(gameControl.direction);
}, 1000);
