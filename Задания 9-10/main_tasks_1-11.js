function Triangle_1(n) {
        const str = "#";
        for(let i=1;i<=(n+1);i++){
                console.log(Array(i).join(str));
        }
}

function FizzBuzz_2(n) {
        for(i=1;i<=n;i++){
                if(((i%3)==0)||((i%5)==0)){
                        console.log("FizzBuzz");
                }
                else {
                        console.log(i);
                }
        }
}

function Chess_3(a, b) {
        var str1="# ";
        var str2=" #";
        for(i=1; i<=a; i++){
                if(i%2!=0){
                        console.log(Array(b/2+1).join(str1));
                }
                else {
                        console.log(Array(b/2+1).join(str2));
                }


        }
}

function Min_4(a, b){
        if(a>b){
                console.log(b);
        }
        else {
                console.log(a);
        }
}

function countBs_5(str){
        var char ="B";
        var count=0;
        for(i=0;i<str.length;i++){
                if(str.charAt(i) == char){
                        count++;
                }
        }
        return console.log(count);

}

function countChar_5(str, char){
        var count=0;
        for(i=0;i<str.length;i++){
                if(str.charAt(i) == char){
                        count++;
                }
        }
        return console.log(count);

}

function range_6(a, b, c){
        var list=[];
        var x=a;
        list.push(a);
        if(b>a){
                for(i=1;i<(b-a+1);i+=c){
                        list.push(x+c);
                        x+=c;
                }
        }
        else{
                for(i=a;i>=(b+1);i+=c){
                        list.push(x+c);
                        x+=c;
                }
        }

        return console.log(list);
}

function sum_6(list){
        var sum=0;
        for(i=0;i<list.length;i++){
                sum+=list[i];
        }
        return console.log(sum);
}

function reverseArray_7(listreverse){
        var newlistreverse =[];
        for(i=(listreverse.length-1); i>=0;i--){
                newlistreverse.push(listreverse[i]);
        }
        return console.log(newlistreverse);
}

function reverseArrayInPlace_7(listreverse){
        var newlistreverse =[];
        for(i=(listreverse.length-1); i>=0;i--){
                newlistreverse.push(listreverse[i]);
        }
        for(i=0;i<listreverse.length;i++){
                listreverse[i]=newlistreverse[i];
        }
        return console.log(listreverse);
}

function arrayToList_8(arr) {
        var result = null;
        for (var i = arr.length-1; i >= 0; i--) {
                result = {
                        value: arr[i],
                        rest:  result
                }
        }
        return result;
}

function listToArray_8(list) {
        var result = [];
        do {
                result.push(list.value);
                list = list.rest;
        } while ( list !== null )
        return result;
}

function prepend_8(el, list) {
        return {
                value: el,
                rest:  list
        }
}

function nth_8(list, ind) {
        if ( !list ) {
                return undefined;
        } else if ( ind === 0 ) {
                return list.value
        } else {
                return nth(list.rest, ind-1)
        }
}

function deepEqual_9(obj1, obj2) {
        if (obj1 === obj2) {
                return console.log(true);
        }

        if (obj1 === null || obj2 === null) {
                return console.log(false);
        }

        if (typeof obj1 === 'undefined' || typeof obj2 === 'undefined') {
                return console.log(false);
        }

        if (obj1 instanceof Array && obj2 instanceof Array) {
                if (obj1.length !== obj2.length) {
                        return console.log(false);
                }
                for (var key in obj1) {
                        if (!deepEqual(obj1[key], obj2[key])) {
                                return console.log(false);
                        }
                }
                return console.log(true);
        }

        if (typeof obj1 === 'object' && typeof obj2 === 'object' &&
            !(obj1 instanceof Array) && !(obj2 instanceof Array)) {
                if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                        return console.log(false);
                }
                for (var key in obj1) {
                        if (typeof obj1[key] !== 'object' && typeof obj2[key] !== 'object') {
                                if (obj1[key] !== obj2[key]) {
                                        return console.log(false);
                                }
                        }

                        if (typeof obj1[key] === 'function' && typeof obj2[key] === 'function') {
                                if (obj1[key].toString() !== obj2[key].toString()) {
                                        return console.log(false);
                                }
                        }

                        if (!deepEqual(obj1[key], obj2[key])) {
                                return console.log(false);
                        }
                }
                return console.log(true);
        }

        return console.log(false);
}

function reduce_concat_10(list) {
        let newList=[];
        for(i=0;i<list.length;i++){
                newList=newList.concat(list[i]);
        }
        return console.log(newList);
}

let json = require('C:\\Users\\Fujitsu\\Desktop\\Универ\\Технологии разработки web приложений\\Задания 9-10\\dataset_9-10.json');
//console.log(json, 'the json obj');

function average_11(array) {
        function plus(a, b) { return a + b; }
        return array.reduce(plus) / array.length;
}

var byName = {};

json.forEach(function(person) {
        byName[person.name] = person;
});

var differences = json.filter(function(person) {
        return byName[person.mother] != null;
}).map(function(person) {
        return person.born - byName[person.mother].born;
});




//Triangle_1(7);
//FizzBuzz_2(100);
//Chess_3(8, 8);
//Min_4(2,6);
//countBs_5("BB"); //Английская "B"
//countChar_5("Великий воитель", "и");
//range_6(2,10, 2);
//sum_6([2,3,4]);
//reverseArray_7([3,5,7,8,9,4]);
//reverseArrayInPlace_7([3,5,3,8,9,4]);
//console.log(arrayToList_8([10, 20]));
//console.log(listToArray_8(arrayToList_8([10, 20, 30])));
//console.log(prepend_8(10, prepend_8(20, null)));
//console.log(nth_8(arrayToList_8([10, 20, 30]), 0));
//deepEqual_9({name: "Alex", age: 20}, {name: "Misha", age: 30});
//reduce_concat_10([ [1,3,4], [2,5,4] ]);
//console.log( average_11( differences ) );

