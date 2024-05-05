import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControl {
  food: Food;
  snake: Snake;
  scorePanel: ScorePanel;
  direction: string = "";
  isLive = true;

  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();
    this.init();
  }
  init() {
    document.addEventListener("keydown", this.handleKeydown.bind(this));
    this.scorePanel.startEle.addEventListener(
      "click",
      this.handleStart.bind(this)
    );
    this.scorePanel.pauseEle.addEventListener(
      "click",
      this.handlePause.bind(this)
    );
    this.scorePanel.resetEle.addEventListener(
      "click",
      this.handleReset.bind(this)
    );
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

    // console.log(this.direction, left, top);

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
    // console.log(left, top);
    this.checkEat(left, top);
    try {
      this.snake.X = left;
      this.snake.Y = top;
    } catch (error) {
      //   alert((<Error>error).message+'Game Over～_～');
      alert((error as Error).message + "Game Over～_～");
      this.isLive = false;
    }

    this.isLive &&
      setTimeout(() => {
        this.run();
      }, 300 - (this.scorePanel.level - 1) * 30);
  }
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      console.log("吃到食物了");
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
      //   this.snake.moveBody();
    }
  }
  handleStart(e: MouseEvent) {
    if (this.isLive) {
      this.direction = "ArrowRight";
    }
    console.log("start");
  }
  handlePause(e: MouseEvent) {
    if (this.isLive) {
      this.direction = "";
    }
    console.log("pause");
  }
  handleReset(e: MouseEvent) {
    console.log("reset");
    window.location.reload();
  }
}

export default GameControl;
