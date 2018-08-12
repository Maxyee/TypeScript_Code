
// typescript function code -------------
function Greeter (person: string)
{
    return 'Hello, ' + person;
}

var user = 'eyamin';

document.body.innerHTML = Greeter(user);

//----------------------------------------


//variable in  declaration typescript -----------------
var a: number;    //postfix variable define
var b : boolean;
var c: string;

a = 10;
b = true;
c = 'Julhas';
//-----------------------------------------------------


//Arrays and tuples in tpyescripts-------------
var foo: undefined; // it is undefined and null types
var myArr: number[];  // it is the declaration of array types

myArr = [];
myArr = [1, 2];
myArr.push(10);
a = myArr.pop()    // the pop value is 10

var antoherArr = [1, 'string', true];

var boo: boolean[];
boo = [true, false, true];

//tuple

var tupArr: [number, boolean];

tupArr = [1,true];
tupArr = [100, false];
//-----------------------------------------------------

//typescripts function , optional and default function and return type -------------------------
function add (a : number ,b : number = 1, c?, d? : string)  //here c parameter is optional and b default value is 1, d is also a optional argument which type is string
{
    return a+b;
}

var sum  = add(1,2,3);
console.log(sum);
//----------------------------------------------------------------------------------------------