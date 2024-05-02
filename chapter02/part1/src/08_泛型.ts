(function () {
  function fn<T>(s: T): T {
    return s;
  }
  fn(10); //不指定泛型，自动推断
  fn<string>("hello"); //指定泛型

  function fn2<T, K>(a: T, b: K): K {
    return b;
  }

  fn2<string, number>("a", 1);

  interface Inter {
    length: number;
  }

  function fn3<T extends Inter>(s: T): number {
    return s.length;
  }

  fn3({ length: 10 });

  class MyClass<T> {
    name: T;
    constructor(name: T) {
      this.name = name;
    }
  }

  class MyClass2<T> {
    constructor(public name: T) {}
  }
  let o = new MyClass<string>("孙悟空");
  let o2 = new MyClass2<string>("猪八戒");
  console.log(o.name);
  console.log(o2.name);
})();
