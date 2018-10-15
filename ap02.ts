//=====================================
interface IPerson {
    name: string;
    height: number;
}


let  person1: IPerson = {
    name: 'Raju',
    height: 183
};

console.log(person1);
//=================================
enum VehicleType {
    PedalCycle,
    MotorCycle,
    Car,
    Van,
    Bus,
    Lorry
}
var type = VehicleType.Lorry;
var typeName = VehicleType[type];

console.log('type:', typeName);

function getAverage2(a: number, b: number, c?: number): string {
    var total = a + b + c;
    var average = total / 3;
    return 'The average is: ' + average;
}
var result = getAverage2(4, 3, 8);
console.log(result);