// 异步操作更加简单 ，generator的语法糖

const fs = require('fs');

const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

// generator
const gen = function* () {
    const f1 = yield readFile('/etc/fstab');
    const f2 = yield readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};
// async
const asybcReadFile = async function () {
    const f1 = await readFile('/etc/fstab');
    const f2 = await readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
}
// case 1
function timeout(ms) {
    return new Promise((resolve) => {
        console.log(resolve)
        setTimeout(resolve, ms);
    })
}
async function asyncprint(value, ms) {
    await timeout(ms);
    console.log(value);
}
asyncprint('hello world', 5000);

// case 2
async function timeout(ms) {
    await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}
asyncPrint('hello world', 50);

//async函数返回一个 Promise 对象。
//async函数内部return语句返回的值，会成为then方法回调函数的参数。

async function homo() {
    return 'hello world'
}
homo().then(ret => {
    console.log(ret)
})

// async 返回promise对象的状态变化
// async返回的promise对象的改变只能发生在所有 await 执行完才会改变，除非发生错误或遇到 return 语句
async function getTitle(url) {
    let response = await fetch(url);
    let html = await response.text();
    return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then(console.log)

// 同时并发执行
async function dbFuc(db) {
    let docs = [{}, {}, {}];
    let promises = docs.map((doc) => db.post(doc));
    let results = await Promise.all(promises);
    console.log(results);
}
  