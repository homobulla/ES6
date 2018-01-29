# Proxy：修改操作的默认行为，对编程语言 进行编程

## proxy类似于用户对代码默认表现的一种代替，对代码的一种‘拦截’


<script>
    var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
    });
     
        var person = {
        name: "张三"
        };

        var proxy = new Proxy(person, {
        get: function(target, property) {
            if (property in target) {
            return target[property];
            } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
            }
        }
        });

        proxy.name // "张三"
        proxy.age // 抛出一个错误
</script>

