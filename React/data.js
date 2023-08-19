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

function getvegetable(callback){
    setTimeout(()=>{
        console.log("vegetable is get")
        callback();
    })


function getallo(callback){
    setTimeout(()=>{
        console.log("allo is get")
        callback();
    })

    function getmakedouh(allo,makedouh, callback){
        setTimeout(()=>{
            console.log("douh is ready")
            callback();
        })
    }
    function makekulcha(allo,makedouh,makekulcha,callback){
        setTimeout(()=>{
            const kulcha=douh+"allo"
        })
    }
}
    



getallo((allo)=>{
    getmakedough(allo,(makedough)=>{
        getmakeallokulcha(allo,makedough,(makeallokulcha)=>{



            console.log("burger is ready")
        })
    })
)}

   
