class Person{  //類型必須大寫
    constructor(name='noname',age=0){//constructor建構函式
        this.name = name;
        this.age = age;
    }
    toJSON(){
        return{
            name: this.name,
            age: this.age
        }
    }
    sayHello(){
        return `Hello $(this.name)`;
    }
}
console.log('person.mjs');

export const f3 = a=> a*a*a;
const f1= a=> a*a;

export {f1};
//在package.json輸入“type":"module"可以使整個專案為MJS
export default Person;


