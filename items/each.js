jQuery.each(object, [callback]);
//callback:第一个为对象的成员或数组的索引，第二个为对应变量或内容。 

function each(obj, callback) {
    var length, i = 0;
    if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
            if (callback.call(obj[i],i, obj[i]) === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            if (callback.call(obj[i],i, obj[i]) === false) {
                break;
            }
        }
    }

    return obj;
}