function createCounter(){
    let number = 0;
    return function counter(){
        number++;
        return number;
    }
}
console.log(createCounter()())
const result = createCounter()
result()
console.log(result(),result())
console.log(createCounter()())

//clousure caveat
function makeFuncs(){
    const funcs=[];
    //focus on let and var i
    for(let i = 0;i<3;i++){
        funcs[i]= function(){
            console.log(`func${i}:${i}`)
        }
    }
    return funcs
}
const functions = makeFuncs()
for(var j = 0;j<3;j++){
    functions[j]()
}



//
function makePistol(){
    let bullets = 6;
    return{
        shoot:function(){
            if(bullets === 0){
                console.log('no bullets left!')
            }
            else{
                bullets--;
                console.log(`bullets left:${bullets}`)
            }
        },
        reload:function(){
            bullets = 6;
            console.log(`reload! bullets left:${bullets}`)
        }

    }
}
//
const jack = makePistol()
jack.shoot()
jack.shoot()


