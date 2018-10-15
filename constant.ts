const a = 6;
if(true)    {
    const a = 77; // life is within this block.
    const b = 88;
    console.log("inside @ a, b: " + a, b);
}
// const a = 661;  // "MultipleErrors": Duplicate declaration
console.log("outside @ a: " +a);