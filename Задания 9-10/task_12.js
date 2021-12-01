let json = require('C:\\Users\\Fujitsu\\Desktop\\Универ\\Технологии разработки web приложений\\Задания 9-10\\dataset_9-10.json');
//console.log(json, 'the json obj');

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byCenturies = {}

function groupBy(arr, func){
    var groupObj = {};
    arr.forEach(function(p){
        var id = func(p);
        if ( groupObj[id] === undefined ) {
            groupObj[id] = [];
        }
        groupObj[id].push( p )
    });
    return groupObj;
}

function getCentury(p) {
    return Math.ceil(p.died / 100);
}

var byCenturies = groupBy( json, getCentury );

for ( century in byCenturies ) {
    byCenturies[century] = average( byCenturies[century].map(function(p){ return p.died - p.born }) );
    console.log( century + ": " + byCenturies[century] );
}
