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
    this.head.style.left = v + "px";
  }
  public set Y(v: number) {
    this.head.style.top = v + "px";
  }

  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
}
