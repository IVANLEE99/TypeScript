(function () {
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    sayHello() {
      console.log("动物在叫~");
    }
  }
  class Dog extends Animal {
    sayHello() {
      console.log("汪汪汪~");
    }
  }
  class Cat extends Animal {
    sayHello() {
      console.log("喵喵喵～");
    }
  }
  let dog = new Dog("🐶", 10);
  dog.sayHello();

  let cat = new Cat("🐶", 10);
  cat.sayHello();
})();
