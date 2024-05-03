import "./style/index.less";
console.log("ts");

class Food {
  element: HTMLElement;
  constructor() {
    //! 非空断言
    this.element = document.getElementById("food")!;
  }

  public get X(): number {
    return this.element.offsetLeft;
  }

  public get Y(): number {
    return this.element.offsetTop;
  }

  //修改食物的位置
  change() {
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;
    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}
let food = new Food();
console.log(food.X);
console.log(food.Y);
food.change();
console.log(food.X);
console.log(food.Y);
