const placeorder = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("order is taken")
            resolve()
        },5000)
    });
};
const startproduction = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("production started")
            resolve()
        },5000)
    });
};
const printID = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("printID");
            resolve()
        },5000)
    });
};
const productname = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("productname")
            resolve()
        },5000)
    });
};
const productdescription = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Product desc")
            resolve()
        },5000)
    });
};

console.log("order is going to be taken");
placeorder()
.then(()=>{
    console.log("product is in production");
    return startproduction();
})
.then(()=>{
    console.log("ID printing started");
    return printID();
})
.then(()=>{
    console.log("product name started printing");
    return productname();
})
.then(()=>{
    console.log("product description");
    return productdescription();
})

