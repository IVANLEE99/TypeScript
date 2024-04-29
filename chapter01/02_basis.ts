let a: number;
a = 10;
// a = "dfd";
let b: string;
b = "sdfsf";

//生命变量直接进行赋值
let c: boolean = true;

//声明和赋值同时进行的，ts可以自动对变量进行类型检验
let d = false;

function sum(a: number, b: number): number {
  return a + b;
}
let result = sum(123, 456);
