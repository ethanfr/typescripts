//Structural typing

interface Point_2i {
    x: number,
    y: number
}
class Point2D_cl {
    constructor(public x:number, public y:number){}
}

let p: Point_2i;
p = new Point2D_cl(1,2);
console.log("pt: ", p);