//object 表示一个js对象
var a;
a = {};
a = function () { };
//{}用来指定对象中可以包含哪些属性
//语法：{属性名:类型,属性名:类型}
//在属性后面加上?,表示属性是可选的
var b;
b = { name: "孙悟空", age: 18 };
//[propName:string]:any 表示任意类型的属性
var c;
c = {
    name: "猪八戒",
    age: 19,
    gender: "男"
};
/**
 * 设置函数结构的类型声明:
 * 语法：(形参:类型,形参:类型,形参:类型...)=>返回值
 */
var d;
d = function (n1, n2) {
    return 10;
};
/**
 * 数组的类型
 * 类型[]
 * Array<类型>
 */
//string[]表示字符串数组
var e;
e = ["a", "b", "c"];
//number[] 表示数值数组
var f;
f = [2, 3, 4];
var g;
g = [1, 2, 3];
/**
 * 元组，元组就是固定长度的数组
 * 语法：[类型，类型，类型]
 */
var h;
h = ["hello", 2333];
/**
 * enum Gender 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 10] = "Male";
    Gender[Gender["Female"] = 11] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: "孙悟空",
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
//&表示同时
var j;
j = {
    name: "孙悟空",
    age: 18
};
var k;
var l;
var m;
// k = 6;//Type '6' is not assignable to type 'myType'.
k = 5;
