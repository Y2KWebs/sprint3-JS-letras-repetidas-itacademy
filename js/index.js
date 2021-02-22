let nomString = "MAN3UELL";
var nom = nomString.split("");

// Exercici 1
function exerceci1() {
  nom.forEach((letra) => {
    console.log(letra);
  });
}

// Exercici 2
function exerceci2() {
  console.log("Partin del nom " + nomString);
  nom.forEach((letra) => {
    if (esVocal(letra)) {
      console.log("He trobat la VOCAL: " + letra);
    } else if (esConsonant(letra)) {
      console.log("He trobat la CONSONAT: " + letra);
    } else if (esNumero(letra)) {
      console.log("Els noms de persones no contenen el número: " + letra);
    } else {
      console.log("Debe ser un caracter especial: " + letra); //comprobación adicional
    }
  });
}

function esVocal(c) {
  return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
}

function esNumero(c) {
  return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(c) !== -1;
}

function esConsonant(c) {
  return (
    [
      "b", //Prettier los pone vertical
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "y",
      "z",
    ].indexOf(c.toLowerCase()) !== -1
  );
}

// Exercici 3
function soloUnicos(value, index, self) {
  return self.indexOf(value) === index;
}

const numOcurrencias = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

let ocurrArr = nom.map((x) => {
  let rObj = x + ":" + numOcurrencias(nom, x);
  return rObj;
});

function exerceci3() {
  console.log(ocurrArr.filter(soloUnicos));
}

// Exercici 4
function exerceci4() {
  let cognom = ["C", "O", "N", "G", "O", "S", "T", "O"];
  let espacio = [" "];
  let fullName = nom.concat(espacio, cognom);
  console.log(fullName);
}
//Nivel 2
var str =
  "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";

function extractEmails(text) {
  return text
    .toLowerCase()
    .match(/([a-zA-Z0-9._-]+@[ña-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
}

var unicos = extractEmails(str).filter(soloUnicos);
const exerceci5 = () => console.log(unicos);
