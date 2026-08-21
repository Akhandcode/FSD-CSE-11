
const students= {
    name:"Sam",
    age:"41",
    branch:"Cse",
}

const nameStudent = {
    ...students,
    sec:"2",
}
const sumNum = (...num) => {
    var sumOf=0;
    for(let i=0;i<num.length;i++)
    {
    sumOf=sumOf+num[i];
    }
    return sumOf

}


function sum(...num) {
    const sum=num.reduce((s,i)=>s+i,0)
    return sum
}
console.log(sum(1,2,3))
console.log(sumNum(1,2)); 

console.log(nameStudent.branch);

//single function
export default sum;

//for multiple function
export {sum,sumNum}