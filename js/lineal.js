let X0 = 0;
let resultadoOperacion1 = 0;
let resultadoOperacion2 = 0;
let a = 0;
let c = 0;
let mod = 0;
let iteraciones = 0;


let resultadoX = '';
let resultadoR = '';


//regresa un valor multiplicado por si mismo
function multiplica(numero, numero2)
{
    return numero * numero2;
}

function lineal()
{
    limpia_contenedores();

    X0 = document.getElementById('semilla').value;
    a = document.getElementById('constanteMp').value;
    c = document.getElementById('constanteAd').value;
    mod = document.getElementById('modulo').value;
    iteraciones = document.getElementById('cantidad').value;

    console.log('hecho');
    for(iteracionActual = 0; iteracionActual < iteraciones; iteracionActual++)
    {
        resultadoX = 'X' + (iteracionActual + 1) + ' = (' + a + ' x ' + X0 + ' + ' + c + ') mod ' + mod + ' = ';
        resultadoOperacion1 = (a * X0 + parseFloat(c)) % mod;

        resultadoX += resultadoOperacion1;

        resultadoOperacion2 = resultadoOperacion1 / (mod -1);
        resultadoR = 'r' + (iteracionActual + 1) + ' = ' + resultadoOperacion1 + '/' + (mod - 1) + ' = ' + resultadoOperacion2.toFixed(4);

        X0 = resultadoOperacion1;

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
    let nuevoH23 = document.createElement('h2');
    let contenedorRR = document.getElementById('resultadosR');
    contenedorRR.innerHTML = '';
    nuevoH23.innerHTML = 'r';
    contenedorRR.appendChild(nuevoH23);
}