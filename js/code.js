//sumar los campos de gastos
function sumai(){
    var camposValGasto = document.Form1["ValIngreso"];
    var camposValRepuesto_num = camposValGasto.length;
    var total = 0;
    for(var i=0, total=0, valor; i<camposValRepuesto_num; i++) {
        valor = parseFloat( camposValGasto[i].value );
        if( !isNaN(valor) )
            total += valor;
    }
    document.Form1["Tingresos"].value = total;
}

//sumar los campos de gastos
function sumag(){
    var camposValGasto = document.Form2["ValGasto"];
    var camposValRepuesto_num = camposValGasto.length;
    var total = 0;
    for(var i=0, total=0, valor; i<camposValRepuesto_num; i++) {
        valor = parseFloat( camposValGasto[i].value );
        if( !isNaN(valor) )
            total += valor;
    }
    document.Form2["Tgastos"].value = total;
}

//restando Ingresos - Gastos
function resta(){
  var num1 = document.getElementById("Tingresos").value;
var num2 = document.getElementById("Tgastos").value;
var Restaig= parseFloat(num1) - parseFloat(num2);
document.getElementById("SaldoEfectivo").value=Restaig;

if(parseFloat(Restaig)<0){
    var cambio = document.getElementById("SaldoEfectivo");
   cambio.style.color="#FD0404";
alert("¡Vaya Has Excedido tus Gastos! =("+"   "+Restaig);
  
}
if(parseFloat(Restaig)>0){
    var cambio = document.getElementById("SaldoEfectivo");
   cambio.style.color="#2E86C1";
alert("¡FELICIDADES has ahorrado! =)"+"   "+"C$ "+Restaig);
  
}
}


//sonido en boton
var sound = new Audio();
sound.src ="Button_sound.mp3"; 


//Validar cajas de texto solo numeros
function solonumeros(e){

	key= e.keyCode || e.which;
	teclado= String.fromCharCode(key);
	numeros="0123456789.";
	//8 backspace 37 izquierda 38 derecha 46 suprimir | array
	especiales="8-37-38-46";
	teclado_especial=false;

	for (var i in especiales) {

		if (key==especiales[i]) {

			teclado_especial=true;

	}
	}
if (numeros.indexOf(teclado)==-1 && !teclado_especial) {

return false;

}

}

