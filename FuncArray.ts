var funcs = [];

for (let i = 0; i < 3; i++) {
    funcs.push(function() {
        console.log("@func: ",i);
    })
}

for (let j = 0; j < 3; j++) {
    funcs[j]();
}