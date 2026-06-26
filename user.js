let arr = [];


for (let i = 0; i < 8; i++) {
    arr[i] = Number(prompt("Enter number " + (i + 1) + ":"));
}


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].includes(10));
}