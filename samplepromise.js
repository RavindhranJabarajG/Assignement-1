let orders = ["coke","ice tea","Mojito"];
const getorders = () =>
{
    setTimeout(()=>{
        orders.forEach(data =>
        {
            console.log(data);
        })
    },0);
};

const postorders = (order) =>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            orders.push(order);
            let err = false;
            if(!err)
            {
                resolve();
            } else{
                reject("Something went wrong");
            }
        },2000);
    });
    
};

postorders("7up").then(getorders).catch(()=>{console.log(err)});