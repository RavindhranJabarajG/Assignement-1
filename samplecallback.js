let orders = [ "coke","ice tea","Mojito"];
const getdrinks = () =>
{
    setTimeout(()=>{
        orders.forEach(data =>
        {
            console.log(data);
        })
    },1000);
};

/*const postdrinks = (order,callback) =>
{
    setTimeout(()=>
    {
        orders.push(order);
        callback();
    },5000);
};

postdrinks("7up",getdrinks);*/
getdrinks();