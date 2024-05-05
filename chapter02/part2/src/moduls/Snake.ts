class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;
  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake>div") as HTMLElement;
    this.bodies = this.element.getElementsByTagName("div");
  }

  public get X(): number {
    return this.head.offsetLeft;
  }

  public get Y(): number {
    return this.head.offsetTop;
  }

  public set X(v: number) {
    if (this.X === v) {
      return;
    }
    if (v < 0 || v > 290) {
      throw new Error("蛇撞墙了～");
      return;
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === v) {
      console.log("发生了掉头～");
      //------------v-
      //------------0-x
      //正在掉头往右走，需要掉头往左走
      if (v > this.X) {
        v = this.X - 10;
      } else {
        //   正在掉头往左走，需要掉头往右走
        v = this.X + 10;
      }
    }
    this.moveBody();
    this.head.style.left = v + "px";
    this.checkHeadBody();
  }
  public set Y(v: number) {
    if (this.Y === v) {
      return;
    }
    if (v < 0 || v > 290) {
      throw new Error("蛇撞墙了～");
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === v) {
      console.log("发生了掉头～");
      //------------v-
      //------------0-x
      //正在掉头往下走，需要掉头往上走
      if (v > this.Y) {
        v = this.Y - 10;
      } else {
        //   正在掉头往上走，需要掉头往下走
        v = this.Y + 10;
      }
    }
    // console.log("set Y", v);
    this.moveBody();

    this.head.style.top = v + "px";
    this.checkHeadBody();
  }

  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
    this.moveBody();
  }
  moveBody() {
    /**
     * 将后面的位置设置为前面的位置
     */

    for (let index = this.bodies.length - 1; index > 0; index--) {
      const element = this.bodies[index] as HTMLElement;
      const preElement = this.bodies[index - 1] as HTMLElement;
      console.log(preElement.style.left);
      console.log(preElement.style.top);
      element.style.left = preElement.offsetLeft + "px";
      element.style.top = preElement.offsetTop + "px";
    }
  }
  checkHeadBody() {
    for (let index = 1; index < this.bodies.length; index++) {
      const element = this.bodies[index] as HTMLElement;
      if (this.X === element.offsetLeft && this.Y === element.offsetTop) {
        throw new Error("自己撞自己了～");
      }
    }
  }
}
export default Snake;
