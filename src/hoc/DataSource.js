const data1 = [
    { content: "content1", id: 1 },
    { content: "content2", id: 2 }
];

const data2 = [
    { content: "content3", id: 3 },
    { content: "content4", id: 4 }
];

let data = data1;
let func;

class DataSource {

    static set data(dat) {
        data = dat;
    }

    static get data() {
        return data;
    }

    static addChangeListener(fun) {
        func = fun;
    }

    static getComments() {
        return data;
    }
}




setInterval(function () {
    console.log("datasource");
    if (data !== data1) {
        data = data1;
    } else {
        data = data2;
    }
    func();
}, 5000);

export { DataSource };

