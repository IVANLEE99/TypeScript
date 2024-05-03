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
    // console.log(this);
  }
}

export default GameControl;
