/* 
Condicionales:

if (condicion) {
    sentencias
}

if (condicion){
    sentencias
} else {
    sentencias
}

if(condicion){
    sentencias
} else if (condicion){
    sentencias
} else if (condicion){
    sentencias
} else {
    sentencias
}

Operadores de Comparacion:

===
==
!==
!=
>=
<=
>
<


Operadores Logicos (And, Or, Not)

&& (and)
|| (or)
! (not)

true && true => true
true && false => false
false && false => false

true || true => true
true || false => true
false || false => false  

!true && !true => false
!true && !false => false
!false && !false => true

!true || !true => false
!true || !false => true
!false || !false => true  


*/

let a = 5;
let b = '5';
//let z = null;

if (a === b) { // Number != String => False
    console.log('Si');
}

if (a == b) {
    let z = 6;
    console.log(z);
}


if (a === b) {
    console.log("Si");
} else {
    console.log("No");
} 

let x = 1;
let y = 2;
let z = 3;

if (x > y && x > z){
    console.log(x)
} else if( y > z){
    console.log(y)
} else {
    console.log(z);
}

if( y > z || x < z || x === y ){
    console.log("Ejecutando otras tareas");
}

if( y > z && x < z && x === y ){
    console.log("Ejecutando otras tareas");
} else {
    console.log("Ejecutando otras tareas");
}




