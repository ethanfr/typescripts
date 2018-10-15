
//===================================================
function getAvg(a: any, b:any,c:any): any{
    var total=0;
    var average=0;

    if (
        
        typeof(parseInt(a))==='number'&&
        typeof(parseInt(b))==='number'&&
        typeof(parseInt(c))==='number'
    
    ){
        total = parseInt(a) + parseInt(b) + parseInt(c);
         average = total / 3;
         
    }else if(typeof(parseInt(a))==='number'&& typeof(parseInt(b))==='number'&&
        typeof(parseInt(c))!='number')
        
        {
        total = parseInt(a)+ parseInt(b);
        average = total / 2;
    }
    return 'The average is: ' + average;
}
console.log(getAvg("1","x","3"));

