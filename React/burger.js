const vegetable=(callback)=>{
    setTimeout(()=>{
        console.log("vegetable is got")
        callback();
    },5000)
}
const allo=(callback)=>{
    setTimeout(()=>{
        console.log("allo is got")
        callback();
    },5000)
}
const dough=(callback)=>{
    setTimeout(()=>{
        console.log("dough is ready")
        callback();
    },5000)
}
const cheese=(callback)=>{
    setTimeout(()=>{
        console.log("cheese is ready")
        callback();
    },2000)
}
console.log("vegetable is get")
vegetable(()=>{
    console.log("allo is get")
    allo(()=>{
        console.log("dough is make")
        dough(()=>{
            console.log("chesse is make")
            cheese(()=>{

            })
        })
    })
})
