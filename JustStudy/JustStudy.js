// [VARIABLE]
let num = 3; //숫자
let str = 'abcdefu...'; //문자열
let bool = true; //논리
let arr = ['apple','banana','cat','dog']; //배열
let arr2 = new Array(2); //배열
let nu = null; //null
let un; //undefined
let idol = {
    name: 'chu',
    age: 2222,
    group: 'Girl of this year',
    
    greeting: function greeting() {
        console.log("츄!에요");
    }
};

arr2[0]=1;
arr2.push(3);
arr2.push(-1);
arr2.pop();
let arr3 = arr.concat(arr2);

console.log("숫자 : "+num);
console.log("문자 : "+str);
console.log("논리 : "+bool);
console.log("배열 : "+arr);
console.log("배열 : "+arr2);
console.log("배열 : "+arr3);
console.log("값이 없음 : "+nu);
console.log("자료형이 정해지지 않음 : "+un);
console.log("Name : "+idol.name+"\nAge : "+idol.age+`\ngroup : ${idol.group}`);
console.log(typeof(idol));


// [HOSTING]

let msg = "scope_test1";
function scope_test() {
    let msg = "scope_test2";
    if(true) {
        msg = "scope_test3";
        console.log(msg); // -> scope_test3
    }
    console.log(msg);// -> scope_test3
}

scope_test();
console.log(msg); // -> scope_test1

function var_test() {
    // 후 선언 -> undefined
    console.log(msg1);
    var msg1='var_test1';

    // 전 대입 후 선언 -> test2-2
    msg2 = 'var_test2-2';
    console.log(msg2);
    var msg2 = 'var_test2-1';

    //var을 쓰면 함수 호출 위치에 따라 값이 달라진다 -> var 쓰지마
    console.log(msg3);

    console.log('----------');
}

var_test();
var msg3='var_test3-1';
var_test();
var msg3='var_test3-2';
var msg3='var_test3-3';
var_test();

/*
function let_test() { //let은 선언이 밑에 있으면 오류 띄워줌 -> 그래서 const, let만 쓰자!
    // 후 선언 -> 에러남
    console.log(msg1);
    let msg1='let_test1';

    // 전 대입 후 선언 -> 에러남
    msg2='let_test2-2';
    console.log(msg2);
    let msg2 = 'let_test2-1';

    console.log(msg4);
    console.log(msg5);

    console.log('**********');
}

//에러남
msg4='let_test4-1';
let_test();
let msg4='let_test4-2';

//에러남
let msg5='let_test5-1';
let_test();
let msg5='let_test5-2';
*/