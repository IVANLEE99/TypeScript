//使用class 关键字来定义一个类
/**
 * 类包含两个部分
 * 属性
 * 方法
 */
class Person {
  /**
   * 直接定义的属性是实例属性，需要通过对象的实例进行访问
   * const per = new Person();
   * console.log(per.name);
   *
   * 使用static开头的属性是静态属性，可以直接通过类去访问
   * console.log(Person.age);
   *
   * readonly开头的属性表示一个只读的属性，无法被修复
   *
   */
  //定义属性
  readonly name: string = "孙悟空";
  age: Number = 18;
  //使用static 关键字定义静态属性
  static readonly age: Number = 18;

  //定义方法
  sayHello() {
    console.log("hello");
  }
  static sayHello() {
    console.log("hello");
  }
}
const per = new Person();

console.log(per.name);
console.log(per.age);
console.log(Person.age);
// per.name = "233";
// Person.age = 99;
console.log(per.name);
console.log(Person.age);

per.sayHello();
Person.sayHello();
