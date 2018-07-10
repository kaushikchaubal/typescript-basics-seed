function sumAll(...data: any[]) {
    return data.reduce((prev, next) => prev + next);
}

console.log(sumAll(1,2,3,4));