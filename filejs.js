class staff{
    #userName;
    #age;
    constructor(uname,age){
        this.#userName = uname;
        this.#age = age;
    }

    getUname (){
        console.log(this.#userName);
    }
}

class Manager extends Staff{
    valueSale;
    constructor(uname, age, sale){
        super(uname, age);
    }
}