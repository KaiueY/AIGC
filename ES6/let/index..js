// console.log(a);//undefined声明提升
// var a = 1;

// console.log(a);//报错 :ReferenceError: Cannot access 'a' before initialization
// let a = 1;

// if(1){
//     let a = 1;
// }
// console.log(a);//ReferenceError: a is not defined  let+{ }形成块级作用域，外部无法访问{ }内部的变量

// 暂时性死区
// let a=2
// if(1){
//     console.log(a);//ReferenceError: Cannot access 'a' before initialization
//     let a = 1;//作用域知道这里声明了a 所以不会去外面找a 但是还没有赋值 let 不会声明提升 所以会报错
// }