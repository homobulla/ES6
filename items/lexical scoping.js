var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

// 输出 1
// 静态作用域：函数的作用域在书写时就决定了
// 与动态作用域： 函数的作用域在调用时决定
// js是静态作用域，所以调用foo()时，value寻找上一层，即 1。
