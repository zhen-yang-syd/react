//context
const f =()=>{console.log(this);};
f()
const ff = function(){
    console.log(this,arguments)
}
ff()

const dragon ={
    weapon:'fire',
    attack:function(){
        console.log(`attacking with ${this.weapon}`)
    }
}
dragon.attack();

//
const slowMotion = {
    action:'jumping..',
    play: function(){
        setTimeout(
            function(){
                console.log(`${this.action}`)
//把this.action中的this绑到当前的object上
            }.bind(this),
            1000
        )
    }
}
slowMotion.play()
//
const man={
    message:'message',
    speak:function(){
        console.log(this.message)
    }
}
man.speak()
man.speak.bind({message:'new message'})()
//arrow function lexical scope
const slowMotion1 = {
    action:'jumping ...',
    play:function(){
        const callback=()=>{console.log(`${this.action} after two second..`)}
        setTimeout(callback,1000)
    }
}
slowMotion1.play()

//list rendering
const superHeros=['a','b','c']
const elements = superHeros.map(hero=>{return ({hero})})
console.log(elements)


