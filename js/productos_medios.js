//---------------------variables del algoritmo---------------------
let X0 = 0; //X0 o semilla
let X1 = 0; //X1 o semilla2
let X2 = 0; //contenedor de resultado de multiplicar X0 x X1
let Y = 0; //Y que servida para el cuadrado de X
let r = 0; //el resultado al que se le agregará "0." al principio
let digitosSemilla = 0; //cantidad de digitos que tiene "X"
let cantidadIteraciones = 0; //Cantidad de iteraciones que se necesitan

let resultadoY = ''; //permitirá almacenar el resultado para mostrar en pantalla
let resultadoX = '';//*--
let resultadoR = '';//*--


//regresa un valor multiplicado por si mismo
function multiplica(numero, numero2)
{
    return numero * numero2;
}


function numeros_centrales(numero)
{
    let numeroStr = numero.toString();
    let cerosFaltantes = '';
    let cerosAagregar = 0;

    //si la cantidad de digitos que tiene el numero recibido es menor a la cantidad
    //de digitos que tenia la semilla entonces:
    if(numeroStr.length < digitosSemilla)
    {
        //obtenemos la cantidad de ceros a agregar
        cerosAagregar = digitosSemilla - numeroStr.length;

        for(i = 0; i < cerosAagregar; i++)
        {
            //agregamos los ceros en una variable
            cerosFaltantes += '0';
        }

        //agregamos los ceros a nuestro numero que necesitaba ceros
        let numeroConCeros = cerosFaltantes + numeroStr;

        //regresamos el valor completo
        return numeroConCeros;
    }
    else
    {
        //los digitos que estan extra a la cantidad de digitos que tenía el numero inicial (D)
        //ejemplo: D = 1234 o bien 4 digitos
        //y el numero recibido es 12345678 o bien 8 digitos, los numeros extra son 4
        //la resta de los 4 digitos a los 8 del numero recibido
        let numerosExtra = numeroStr.length - digitosSemilla;

        let numerosCentrales = numeroStr.substring(numerosExtra/2, numerosExtra/2 + digitosSemilla);

        return numerosCentrales;
    }
}



function productos_medios()
{
    limpia_contenedores();

    //obtiene el valor "semila" del cuadro de texto
    X0 = document.getElementById('semilla').value;

    //obtiene el valor "semila 2" del cuadro de texto
    X1 = document.getElementById('semilla2').value;

    //calcula la cantidad de digitos que tiene la semilla
    digitosSemilla = X0.length;

    //obtiene la cantidad de iteraciones del cuadro de texto
    cantidadIteraciones = document.getElementById('cantidad').value;


    //iteraciones
    let contadorXs = 2;
    for(iteracionActual = 0; iteracionActual < cantidadIteraciones; iteracionActual++)
    {
        //agrega "Y(numero) = ([Valor de X])^2 = " a nuestro resultado
        resultadoY = 'Y' + iteracionActual + ' = (' + X0 + ')  (' + X1 + ') = ';

        //multiplica X0 x X1
        let multiplicacion = multiplica(X0, X1);

        //le agrega lo ultimo al resultado para asi tener el formato completo
        //"Y(numero) = ([Valor de X])^2 = (resultado de X^2)"
        resultadoY += multiplicacion;
        
        //obtiene los numeros del centro del cuadrado de X, se lo asigna a X para 
        //poder continuar con las siguientes iteraciones
        X2 = numeros_centrales(multiplicacion);
        
        //reasigna las variables, el algoritmo dice que con cada iteracion
        //X0 se le asigna el valor de X1 y a X1 se le asigna el valor de X2
        X0 = X1;
        X1 = X2;

        //asigna "0." a los resultados, esto es parte del algoritmo y se debe hacer
        //a fuerza
        resultadoR = 'r' + (contadorXs++) + ' = 0.' + X2;
        
        //muestra el resultado con el formato "X(numero) = (numeros centrales de X^2)"
        resultadoX = 'X' + (iteracionActual+1) + ' = ' + X2;

//muestra los resultados
        muestra_resultado(resultadoY, 'resultadosY');
        muestra_resultado(resultadoX, 'resultadosX');
        muestra_resultado(resultadoR, 'resultadosR');
    }
}



//Agrega los resultados a sus respectivos contenedores
//----------------------------------------------------
//  <div id="resultadosY"> (resultadosX o resultadosR)
//      <h2>Y</h2>
//  </div>
//----------------------------------------------------
function muestra_resultado(resultado, idContenedor)
{
    //crea una nueva etiqueta "p" y le asigna el valor recibido
    let nuevoResultado = document.createElement('p');
    nuevoResultado.innerHTML = resultado;

    //busca el contenedor en el cual se va meter el resultado
    let contenedorResultado =  document.getElementById(idContenedor);
    //mete el resultado al contenedor para que se muestre en pantalla
    contenedorResultado.appendChild(nuevoResultado);
}


function limpia_contenedores()
{
    //crea el encabezado del contenedor
    let nuevoH2 = document.createElement('h2');
    //obtiene el contenedor
    let contenedorRX = document.getElementById('resultadosX');
    //limpia el contenedor
    contenedorRX.innerHTML = '';
    //asigna el encabezado del contenedor
    nuevoH2.innerHTML = 'X';
    //agrega el encabezado del contenedor
    contenedorRX.appendChild(nuevoH2);


    //hace lo mismo que las lineas anteriores pero con otro contenedor
    let nuevoH22 = document.createElement('h2');
    let contenedorRY = document.getElementById('resultadosY');
    contenedorRY.innerHTML = '';
    nuevoH22.innerHTML = 'Y';
    contenedorRY.appendChild(nuevoH22);

    //hace lo mismo que las lineas anteriores pero con otro contenedor
    let nuevoH23 = document.createElement('h2');
    let contenedorRR = document.getElementById('resultadosR');
    contenedorRR.innerHTML = '';
    nuevoH23.innerHTML = 'r';
    contenedorRR.appendChild(nuevoH23);
}