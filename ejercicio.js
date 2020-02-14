

// ejercicio 1//
function a(){
    return 35;
}
console.log(a())
= la salida es 35.

//ejercicio 2//

function a(){
    return 4;
}
console.log(a()+a());
= la salida es 8.


//ejercicio 3//
function a(b){
    return b;
}
console.log(a(2)+a(4));
=la salida es 6.


// ejercicio 4//
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
=la salida es 3 y luego 9


// ejercicio 5//
function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));
= la salida es 40 ya que a(b) es por el primer print 10.

// ejercicio 6//
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
= la salida es 15, por "else" ya que arriba la operacion no da valor.


// ejercicio 7//
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
= la salida es 10, 3, 30 ya que imprime la primera funcion y luego llama y regresa los valores para multiplicar.


//ejercicio 8//
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
= la salida es 3 y 4 se regresa los valores por "i".


// ejercicio 9//
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
= la salida es 2, 5, 8 y 11 se realiza for y suma de i+2.


// ejercicio 10//
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
= la salida es 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0 


// ejercicio 11//
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
= la salida es nada ya que llama a una funcion vacia.


// ejercicio 11//
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
= la salida es 10, ya que solo pide imprimir z.


//ejercicio 13//
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
=la salida es 10 y 15, ya que pide funcion a "A".

//ejercicio 14//
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
= la salida es 15 y 15, ya que al terminar indica z=a().
