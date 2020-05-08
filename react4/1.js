const promiseA = new Promise(
    //解析度(成功)，拒绝（失败）->两个参数
    (resolutionFunc,rejectionFunc)=>{
        resolutionFunc(777)
    }
)
promiseA.then(
    (val)=>console.log("asynchronous logging has val:",val)
)
console.log("immediate logging")