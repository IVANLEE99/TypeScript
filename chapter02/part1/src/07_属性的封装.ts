(function () {
  /**
   * public
   * private
   * protected
   */

  class A {
    public name: string;
    private _age: number;
    protected sex: boolean;
    constructor(name: string, _age: number, sex: boolean) {
      this.name = name;
      this._age = _age;
      this.sex = sex;
    }
    //get set
    get age() {
      return this._age;
    }
    set age(age: number) {
      this._age = age;
    }
  }

  class B {
    constructor(public name: string, public age: number, public sex: boolean) {}
  }

  class C extends A {
    // Property '_age' is private and only accessible within class 'A'.ts(2341)

    get age33(): number {
      console.log(this.age);
      return this.age;
    }
    set age33(age: number) {
      this.age = age;
      console.log(this.age);
    }
    getSex() {
      console.log(this.sex);
    }
  }
  let a = new A("A", 10, false);
  a.age = 11;
  console.log(a.age);

  let b = new B("B", 33, true);
  console.log(b.name, b.age, b.sex);

  let c = new C("c", 99, false);
  console.log(c.age33);
  c.getSex();
})();
