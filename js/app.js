const comid = [
    {
        id: 1,
        nombre: "Pacifico Mar",
        direccion: "Av. 85 Nro. 45 - 85 Barranquilla",
        texto: "Deliciosa comida de mar",
        Imagen: "./Imagenes/Imagen Productos mar.png",
    },

    {
        id: 2, 
        nombre: "Italiano 65", 
        direccion: "Av. 45 Nro. 1 - 85 Medellín", 
        texto: "Deliciosa comida italiana",
        Imagen: "./Imagenes/Imagen Productos italiano.png",   
    },

    {
        id: 3,
        nombre: "Fristos y Más",
        direccion: "Calle 45 Medellín",
        texto: "Comida rápida",
        Imagen: "./Imagenes/Imagen Productos fritos.png",   
    },

    {
        id: 4,
        nombre: "Pollo Frito",
        direccion: "Cr 32 # 56 - 89",
        texto: "Lo mejor del pollo frito",
        Imagen: "./Imagenes/Imagen Productos pollo.png",   
    },

];

//console.log(comida);

let card = document.getElementById("card-template");
comid.map((x)=>{
card.innerHTML += `  
<div class="col">
    <div class="card">
      <img src="${x.Imagen}" class="card-img-top" alt="${x.nombre}">
      <div class="card-body">
        <h5 class="card-title text-center">${x.nombre}</h5>
        <p class="card-text text-center">${x.direccion}</p>
        <p class="card-text text-center">${x.texto}</p>
      </div>
    </div>
  </div>
`;

});