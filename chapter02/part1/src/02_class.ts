class Dog {
  name: string;
  age: number;

  /**
   * constructor为构造函数，构造函数会在创建对象的时候调用
   * @param name
   * @param age
   */
  constructor(name: string, age: number) {
    //在实例方法中this表示当前调用的实例
    //在构建函数中当前对象就是当前新建的那个对象
    //可选使用this向新建的对象中添加属性～
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(this.name + ":汪汪汪～");
  }
}

let dog = new Dog("小白", 1);
let dog2 = new Dog("小黑", 12);
dog.bark();
dog2.bark();
