//object 表示一个js对象
let a: object;
a = {};
a = function () {};

//{}用来指定对象中可以包含哪些属性
//语法：{属性名:类型,属性名:类型}
//在属性后面加上?,表示属性是可选的
let b: { name: string; age?: number };
b = { name: "孙悟空", age: 18 };

//[propName:string]:any 表示任意类型的属性
let c: {
  name: string;
  [propName: string]: any;
};
c = {
  name: "猪八戒",
  age: 19,
  gender: "男",
};

/**
 * 设置函数结构的类型声明:
 * 语法：(形参:类型,形参:类型,形参:类型...)=>返回值
 */

let d: (a: number, b: number) => number;
d = function (n1: number, n2: number): number {
  return 10;
};

/**
 * 数组的类型
 * 类型[]
 * Array<类型>
 */

//string[]表示字符串数组
let e: string[];
e = ["a", "b", "c"];

//number[] 表示数值数组
let f: number[];
f = [2, 3, 4];
let g: Array<number>;
g = [1, 2, 3];

/**
 * 元组，元组就是固定长度的数组
 * 语法：[类型，类型，类型]
 */
let h: [string, number];
h = ["hello", 2333];

/**
 * enum Gender 枚举
 */
enum Gender {
  Male = 10,
  Female, //11
}

let i: {
  name: string;
  gender: Gender;
};
i = {
  name: "孙悟空",
  gender: Gender.Male,
};
console.log(i.gender === Gender.Male);

//&表示同时
let j: { name: string } & { age: number };
j = {
  name: "孙悟空",
  age: 18,
};

//类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

// k = 6;//Type '6' is not assignable to type 'myType'.
k = 5;
