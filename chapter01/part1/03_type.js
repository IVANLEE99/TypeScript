//使用字面量进行类型声明
var a;
var b;
//使用 ｜ 来连接多个类型
var c;
//any 任意类型 相当于关闭了ts的类型检测
var d;
//声明变量不过不指定类型。则ts解析器会自动判断变量的类型为any（隐式any）
// let d;
d = 10;
d = "hello";
//d的类型是any ，它可以赋值给任意变量
var s;
s = d;
//unknown 表示未知类型
var e;
e = "hello";
// error TS2322: Type 'unknown' is not assignable to type 'string'.
// s = e;
if (typeof e === "string") {
    s = e;
}
//类型断言 可以用来告诉解析器变量的实际类型
s = e;
s = e;
//void 用来表示空，以函数为例，就表示没有返回值的函数
function fn() { }
//never 表示永远不会返回结果
function fn2() {
    throw new Error("error");
}
