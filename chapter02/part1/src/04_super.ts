(function () {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello() {
      console.log("动物在叫～～～");
    }
  }
  class Dog extends Animal {
    age: number;
    constructor(name: string, age: number) {
      super(name);
      this.age = age;
    }
    sayHello(): void {
      //   super.sayHello();
      console.log("汪汪汪～～");
    }
  }

  let dog = new Dog("🐶", 10);
  dog.sayHello();
})();
