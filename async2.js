// async 函数的实现原理
// sync 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。
async function fn(args) {
    // ...
}

// 等同于

function fn(args) {
    return spawn(function* () {
        // ...
    });
}

function spawn(genF) {
    return new Promise(function (resolve, reject) {
        const gen = genF(); //处理 function* 函数
        function step(nextF) {
            let next;
            try {
                next = nextF();
            } catch (e) {
                return reject(e);
            }
            if (next.done) {
                return resolve(next.value);
            }
            Promise.resolve(next.value).then(function (v) {
                step(function () {
                    return gen.next(v);
                });
            }, function (e) {
                step(function () {
                    return gen.throw(e);
                });
            });
        }
        step(function () {
            return gen.next(undefined);
        });
    });
}

async function logInOrder(urls) {
    // 并发读取远程URL
    const textPromises = urls.map(async url => {
        const response = await fetch(url); // fetch 代替 ajax
        return response.text();
    });

    // 按次序输出
    for (const textPromise of textPromises) {
        console.log(await textPromise);
    }
}