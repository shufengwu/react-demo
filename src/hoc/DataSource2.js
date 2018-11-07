let data1 = 11111;
let data2 = 22222;
let data = data1;
let func;

class DataSource2 {

    static set data(dat) {
        data = dat;
    }

    static get data() {
        return data;
    }

    static addChangeListener(fun) {
        func = fun;
    }

    static getBlogPost(id) {
        return data;
    }
}




setInterval(function () {
    console.log("datasource2");
    
    if (data !== data1) {
        data = data1;
    } else {
        data = data2;
    }
    func();
}, 5000);

export { DataSource2 };

