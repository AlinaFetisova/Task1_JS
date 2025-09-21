//Кількість параграфів
const paragraphs=document.querySelectorAll("p");
console.log("Кількість <p>:", paragraphs.length);

//Кількість заголовків
const h2Elements=document.querySelectorAll("h2");
console.log("Кількість <h2>:", h2Elements.length);

// Значення background-color елемента <body>
const bodyBg=window.getComputedStyle(document.body).backgroundColor;
console.log("Background-color <body>:", bodyBg);

// Значення font-size елемента <h1>
const h1=document.querySelector("h1");
if (h1){
  const h1FontSize=window.getComputedStyle(h1).fontSize;
  console.log("Font-size <h1>:", h1FontSize);
} else {
  console.log("На сторінці немає <h1>");
}
