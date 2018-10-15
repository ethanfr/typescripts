
//object destructuring
const {called} = new class {
    count: number = 0;
    called = () => {
        this.count++;
        console.log(`Called : ${this.count}`);//string interpolation ${this.count}
    }
};

called();
called();
called();
