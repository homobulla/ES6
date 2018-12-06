async function async1() {
    console.log('async1 start') // 2
    var a = await async2()
    console.log('async1 end') // 8
    return 3 + a
}
async function async2() {
    console.log('async2') // 3
    return 333
}

// console.log('script start') // 1
// setTimeout(function() {
//     console.log('setTimeout') // last
// }, 0)
async1().then(res => {
    console.log(res)
})
new Promise(function(resolve) {
    console.log('promise1') // 4
    // resolve()
}).then(function() {
    console.log('promise2') // 6
})
// console.log('script end') // 5
