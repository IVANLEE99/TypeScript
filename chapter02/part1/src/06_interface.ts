(function () {
  type myType = {
    name: string;
    age: number;
  };

  /**
   * 接口可以定义一个类结构有哪些属性和方法
   * 也可以当类型声明去使用
   *
   */
  interface myInterface {
    name: string;
    age: number;
  }
  const obj: myType = {
    name: "name",
    age: 10,
  };
  const obj2: myInterface = {
    name: "interface",
    age: 10,
  };

  /**
   *
   * 接口可以在定义类的时候去限制类的结构
   * 接口中所有的属性都不可以有实际值
   * 接口只考虑类的结构，而不考虑实际值
   *
   */
  interface myInter {
    name: string;
    sayHello(): void;
  }

  interface myInter {
    age: string;
    sayHello(): void;
  }
  /**
   * 定义类的实际，使用implements 实现接口
   * 实现接口，就是使类满足接口的要求
   */
  class myClass implements myInter {
    name: string;
    constructor(name: string, age: string) {
      this.name = name;
      this.age = age;
    }
    age: string;
    sayHello(): void {
      throw new Error("Method not implemented.");
    }
  }
  const mc = new myClass("小张", "30");
  console.log(mc.name, mc.age);
})();
