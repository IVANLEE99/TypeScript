import "./style/index.less";
console.log("ts");
import Food from "./moduls/Food";
import ScorePanel from "./moduls/ScorePanel";
let food = new Food();
console.log(food.X);
console.log(food.Y);
food.change();
console.log(food.X);
console.log(food.Y);

let s = new ScorePanel(10, 10);
for (let index = 0; index < 20; index++) {
  s.addScore();
}
