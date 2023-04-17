let titulo = document.getElementById("titulo");
let frutas = document.querySelector('.frutas')

let newTitle = ['hola', 'chao', 'nos vidrios', 23]
console.log(newTitle)
titulo.textContent = `${newTitle[0]}  ${newTitle[3]*2}`
let arrFrutas=['manzana', 'naranja', 'pera', 'pepino']

frutas.textContent= arrFrutas.length

const numeros = [1,2,3,4,5]
console.log(numeros)
// numeros.push(6)
// console.log(numeros)
// console.log(numeros.pop())
// console.log(numeros)
// console.log(numeros.shift())
// console.log(numeros) 
// console.log(numeros.unshift("a"))
// console.log(numeros) 
// numeros[99]=7
// console.log(numeros.indexOf('a'))
let arr5=[]
for(let i=0; i<numeros.length; i++){
    arr5.push("la edad es: "+(numeros[i]*5))

}
console.log(numeros.filter(x=>x % 2==0))
console.log(numeros.reduce((acc, el)=>acc+el, 0))
console.log(arr5)