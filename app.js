//Definición de las cadenas de prueba para el sistema
let prueba = "gato";
let desafio = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";

//Definición de las claves de encriptación y desencriptación
let clavesEncriptar = ["ai","enter","imes","ober","ufat"];
let clavesDesencriptar = ["a","e","i","o","u"];

//Declaración de función para encriptar texto ingresado
function encriptar(texto){
    let textoEncriptado="";
    //Reemplazo de claves recorriendo el texto ingresado
    for(let i=0;i<texto.length;i++){
        if(texto[i]===clavesDesencriptar[0]){
            textoEncriptado += clavesEncriptar[0];
        }else if(texto[i]===clavesDesencriptar[1]){
            textoEncriptado += clavesEncriptar[1];
        }else if(texto[i]===clavesDesencriptar[2]){
            textoEncriptado += clavesEncriptar[2];
        }else if(texto[i]===clavesDesencriptar[3]){
            textoEncriptado += clavesEncriptar[3];
        }else if(texto[i]===clavesDesencriptar[4]){
            textoEncriptado += clavesEncriptar[4];
        }else{
            textoEncriptado += texto[i];
        }
    }
    return textoEncriptado;
}

//Declaración de función para desencriptar texto ingresado
function desencriptar(texto){
    let textoDesencriptado="";
    //Definición de expresión regular con las ocurrencias que deberia encontrar, para usar la función match 
    let patronDesencriptar = /(ai)|(enter)|(imes)|(ober)|(ufat)/g;

    //Reemplazo de ocurrencias con las claves de desenciptado
    textoDesencriptado = texto.replace(patronDesencriptar, function(match, p1, p2, p3, p4, p5) {
        if (p1 !== undefined) return clavesDesencriptar[0];
        if (p2 !== undefined) return clavesDesencriptar[1];
        if (p3 !== undefined) return clavesDesencriptar[2];
        if (p4 !== undefined) return clavesDesencriptar[3];
        if (p5 !== undefined) return clavesDesencriptar[4];
    });
    
    return textoDesencriptado; 
}
//Pruebas en la terminal
console.log(encriptar(prueba));
console.log(desencriptar(desafio));
