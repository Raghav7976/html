/*let a = "Raghav"
console.log(a)*/

/*const Regex = (callback) => {
    setTimeout(()=>{
        console.log("Regex")
        callback();
    },2000)
}
    const html = (callback) => {
        setTimeout(()=>{
            console.log("html")
            callback();
        },5000)
}
const CSS = (callback) => {
    setTimeout(()=>{
        console.log("CSS")
        callback();
    },6000)
}
const JS = (callback)=>{
    setTimeout(()=>{
        console.log("JS")
        callback();
    },7000)
}


console.log("Wlc to Regex");
Regex(()=>{
    console.log("pass to html");
    html(()=>{
        console.log("pass to CSS");
        CSS(()=>{
            console.log("pass to JS");
            JS(()=>{
                console.log("complete all process");
            })
        })
    })
})*/





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

   
