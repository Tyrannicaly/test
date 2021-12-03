
const array = ['a', 1, 2, false, 'b'];

// const obj2 = {}
// let number = obj.number = []
// let string = obj.string = []
// let boolean = obj.boolean = []
const obj= {
    number:[],
    string:[],
    boolean:[]
};
let numberOnly = (val) =>{
  for(let i = 0 ; i<= array.length-1; i++){ /* i < array.lenght */
    if(typeof(val) === "number")
        return obj.number.push(val) /*number.push(val)*/
} 
    if (typeof val === "string"){
        return obj.string.push(val) /*string.push(val)*/

}
    if (typeof val === "boolean"){
        return obj.boolean.push(val) /*boolean.push(val)*/
}
};


array.filter(numberOnly);

console.log(obj)
