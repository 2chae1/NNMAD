const quotes = [
    {img:"0.jpg", quote:"묻고 더블로 가", author:"곽철용"},
    {img:"1.jpg", quote:"Why working?", author:"졸라맨"},
    {img:"2.jpg", quote:"개비스콘", author:"제약회사"},
    {img:"3.jpg", quote:"안녕히 계세요 여러분~ 저는 속세를 떠나...", author:"가영"},
    {img:"4.jpg", quote:"으아아아아악", author:"오리"},
    {img:"5.jpg", quote:"????????????????", author:"누구지"}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const bgImg = document.createElement("img");

const chosenQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = chosenQuote.quote;
author.innerText = `from${chosenQuote.author}`;
bgImg.src = `img/${chosenQuote.img}`;

document.body.appendChild(bgImg); //prepend는 앞에 추가
