//Definición de las claves de encriptación y desencriptación
let clavesEncriptar = ["ai","enter","imes","ober","ufat"];
let clavesDesencriptar = ["a","e","i","o","u"];

//Declaración de función para encriptar texto ingresado
function encriptar(){
    let textoInicial = document.getElementById('textoInicial').value;
    let textoEncriptado="";
    //Reemplazo de claves recorriendo el texto ingresado
    for(let i=0;i<textoInicial.length;i++){
        if(textoInicial[i]===clavesDesencriptar[0]){
            textoEncriptado += clavesEncriptar[0];
        }else if(textoInicial[i]===clavesDesencriptar[1]){
            textoEncriptado += clavesEncriptar[1];
        }else if(textoInicial[i]===clavesDesencriptar[2]){
            textoEncriptado += clavesEncriptar[2];
        }else if(textoInicial[i]===clavesDesencriptar[3]){
            textoEncriptado += clavesEncriptar[3];
        }else if(textoInicial[i]===clavesDesencriptar[4]){
            textoEncriptado += clavesEncriptar[4];
        }else{
            textoEncriptado += textoInicial[i];
        }
    }

    //Se asigna el resultado de la función de encriptado
    asignarTexto(document.querySelector('#textoConvertido'),textoEncriptado);
    //Se activa la opción de copiar el resultado arrojado al usuario
    document.getElementById('copiar').removeAttribute('disabled');
    limpiar();
    return;
}

//Declaración de función para desencriptar texto ingresado
function desencriptar(){
    let textoInicial = document.getElementById('textoInicial').value;
    let textoDesencriptado="";
    //Definición de expresión regular con las ocurrencias que deberia encontrar, para usar la función match 
    let patronDesencriptar = /(ai)|(enter)|(imes)|(ober)|(ufat)/g;

    //Reemplazo de ocurrencias con las claves de desenciptado
    textoDesencriptado = textoInicial.replace(patronDesencriptar, function(match, p1, p2, p3, p4, p5) {
        if (p1 !== undefined) return clavesDesencriptar[0];
        if (p2 !== undefined) return clavesDesencriptar[1];
        if (p3 !== undefined) return clavesDesencriptar[2];
        if (p4 !== undefined) return clavesDesencriptar[3];
        if (p5 !== undefined) return clavesDesencriptar[4];
    });
    
    //Se asigna el resultado de la función de desencriptado
    asignarTexto(document.querySelector('#textoConvertido'),textoDesencriptado);
    //Se activa la opción de copiar el resultado arrojado al usuario
    document.getElementById('copiar').removeAttribute('disabled');
    limpiar();
    return;
}
//Declaración de función de copia
function copiar(){
    let copia = document.getElementById('textoConvertido');
    navigator.clipboard.writeText(copia.textContent);
}

//Función que limpia el campo del texto a ser procesado
function limpiar(){
    document.getElementById('textoInicial').value='';
}

//Función qur asigna valores de resultado de los procesos de encriptado y desencriptado
function asignarTexto(elemento, texto){
    elemento.innerHTML = texto;
}
