//변수
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