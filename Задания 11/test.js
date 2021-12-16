let someModule = require('./AS');
/*
console.log(someModule.length);
console.log(someModule[0]);
console.log(Object.keys(someModule[0]).length);
console.log(typeof someModule);
*/
console.log('|  ID  |  AdmArea  |  Year  |  global_id  |  Month  |  Calls');


for (const element of someModule)
{

    console.log(element.ID + '|' + element.AdmArea + '|' + element.Year + '|' + element.global_id + '|' + element.Month + '|' + element.Calls);

};