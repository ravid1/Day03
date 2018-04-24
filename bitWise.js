var options = [
    'hummus', //1
    'hamutzim', //2
    'salat', //4
    'chips' //8
];

var bitwiseOptions = {};
var pita = 0;

buildOptions();
console.log(bitwiseOptions);

var bitwiseOptions = {
    'hummus': 1,
    'hamutzim': 2,
    'salat': 4,
    'chips': 8
};


function buildOptions() {
    for (var i=0; i<options.length; i++){
        bitwiseOptions[options[i]] = 1 << i;
    }
}


console.log(is(pita, 'hummus')) // false
is(pita, 'hummus') // true


function is(obj, option) {
    if(pita & bitwiseOptions[option])
        return true;

    return false;
}

pita=set(pita,'hummus');
console.log(is(pita,'hummus'));
pita=set(pita,'hummus');
console.log(pita);
pita=setOff(pita,'hummus');
console.log(pita);
function set(obj, option) {
    if(!is(obj,option)){
        obj |= bitwiseOptions[option];
    }
    return obj;
}

function setOff(obj, option) {
    if(is(obj,option)){
        obj=obj-bitwiseOptions[option];
    }
    return obj;
}

// build options
//

//
