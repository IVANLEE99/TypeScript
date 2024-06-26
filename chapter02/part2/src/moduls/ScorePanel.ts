class ScorePanel {
  score = 0;
  level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  startEle: HTMLElement;
  pauseEle: HTMLElement;
  resetEle: HTMLElement;
  maxLevel: number;
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.startEle = document.getElementById("start")!;
    this.pauseEle = document.getElementById("pause")!;
    this.resetEle = document.getElementById("reset")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  //加分的方法
  addScore() {
    this.scoreEle.innerHTML = ++this.score + "";
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + "";
    }
  }
}

export default ScorePanel;
