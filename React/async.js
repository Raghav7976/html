async function delay(time)
{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve()
    },2000)
    })
}



async function placeoder()
{
    await delay(2000)
    console.log("order is taken")
}
async function startProduction()
{
    await delay(2000)
    console.log("production is started")
}
async function printID()
{
    await delay(2000)
    console.log("ID is printing")
}
async function productname()
{
    await delay(2000)
    console.log("product name is printing")
}
async function productdesc()
{
    await delay(2000)
    console.log("product desc is printing")
}



async function main()
{
    console.log("order is now going to  take place");
    await placeoder();
    console.log("product is in production");
    await startProduction();
    console.log("Id is printing");
    await printID();
    console.log("product name is started printing");
    await productname();
    console.log("product desc is started printing");
    await productdesc();
}
main()