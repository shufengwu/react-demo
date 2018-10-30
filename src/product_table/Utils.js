/**
 * 模拟网络请求回来的商品数据
 */
function getProductData() {
    return [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ];
}

function parseProductData(data){
    const set = new Set();
    data.forEach(x => {
        set.add(x.category);
    });

    const res = [];
    // set.forEach((key,value)) => {
    //     let obj1 = {category:value,product:[]};
    //     res.push(obj1);
    // });
    set.forEach((value,key)=>{
        let obj1 = {category:value};
        let list = [];
        data.forEach(element => {
            if(element.category===value){
                list.push({price:element.price,stocked:element.stocked,name:element.name});
            }
        });
        obj1.product = list;
        res.push(obj1);
    });

    return res;
    
}

export {getProductData,parseProductData};