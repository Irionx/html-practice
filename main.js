var saludo = " Hola a todos los que nos estan viendo en";
var despedida = "Adios, gracias por vernos.";
// var juntas = saludo + "\n" + despedida;
var juntas = `Hola a todos${saludo} ${despedida}`;
var fechaNacimiento = 1993;
var fechaActual = 2021;
var edad = fechaActual - fechaNacimiento;
var toDay = new Date();
var cajonCalcetines = ['Calcetin rosa', 'Calcetin negro', 'Calcetin morado'];
var redesSociales = ['Youtube', 'Twitter', 'Whatsapp', 'Instagram'];

var saludoDeRedSocialYoutube = `${saludo} ${redesSociales[0]}`;
var saludoDeRedSocialTwitter = `${saludo} ${redesSociales[1]}`

//console.log(saludoDeRedSocialYoutube);
//console.log(saludoDeRedSocialTwitter);
var persona = {
    nombre: 'Sebastián Kozak',
    edad: 35,
    direccion: {
        calle: 'Avenida siempre viva',
        numero: '9999',
        localidad: 'Pilar',
        Ciudad: 'Buenos Aires',
        Pais: 'Argentina'
    }
}


function imprimirPersonas(){
    console.log(persona);
}
imprimirPersonas()
