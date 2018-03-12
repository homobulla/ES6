
class Axios {
    constructor(options) {
        this.options = options;
    }

    getDate(method,url,fn){
        var xhr = new XMLHttpRequest();
        xhr.open(method.toLocaleUpperCase(),url,true);
        if(method == 'POST'){
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {  // 304未修改
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send();
    }
}

var axios = new Axios();
try {
    axios.getDate('get','www.baidu.com',function(res){console.log(res)})
}catch(e) {
    console.log(e)
}
