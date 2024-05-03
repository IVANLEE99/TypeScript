import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControl {
  food: Food;
  snake: Snake;
  scorePanel: ScorePanel;
  direction: string = "";

  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();
    this.init();
  }
  init() {
    document.addEventListener("keydown", this.handleKeydown.bind(this));
    this.run();
  }

  /**
   *
   * @param event
   * ArrowUp ArrowRight ArrowDown ArrowLeft
   * Up Right Down Left
   */
  handleKeydown(event: KeyboardEvent) {
    event.preventDefault();
    // console.log(event.key);
    this.direction = event.key;
    // this.run();

    // console.log(this);
  }

  /**
   *
   * @param event
   * ArrowUp ArrowRight ArrowDown ArrowLeft
   * Up Right Down Left
   * Up   -top
   * Right +left
   * Down  +top
   * Left -left
   *
   */
  run() {
    let left = this.snake.X;
    let top = this.snake.Y;

    console.log(this.direction, left, top);

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        top -= 10;
        break;
      case "ArrowDown":
      case "Down":
        top += 10;
        break;
      case "ArrowRight":
      case "Right":
        left += 10;
        break;
      case "ArrowLeft":
      case "Left":
        left -= 10;
        break;

      default:
        break;
    }
    console.log(left, top);

    this.snake.X = left;
    this.snake.Y = top;

    setTimeout(() => {
      this.run();
    }, 300 - (this.scorePanel.level - 1) * 30);
  }
}

export default GameControl;
