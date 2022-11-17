


const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagenesCargadas = 0;
let totalImagenes = 0;
let photosArray = [];

const count = 30;
const apiKey = 'live_DAhISfn7EjR0eHI9iLsGIpIzZipkWblGlwlEH2hFrSTr7F2cNiLlV8aS0LC1FVLA';
const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=${count}&breed_ids=beng&api_key=${apiKey}`



//drys  set atributos de elemento html
function SetAttributes(element, attributes) {
    for (const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}


//validar que todas la imagenes han sido cargadas
function CargarImagenes(){
    imagenesCargadas++
    if (imagenesCargadas === totalImagenes){
        ready = true;
        loader.hidden = true;
    }
}


//mostra fotos
function MostrarFotos() {
    imagenesCargadas = 0;
    totalImagenes = photosArray.length;
   photosArray.forEach((photo)=>{

    const item = document.createElement('a');            
    //set attributes
    SetAttributes(item, {
        href: photo.url,
        target: '_blank'
    });
    

    const img = document.createElement('img');
    //set attributes
    SetAttributes(img, {
        src: photo.url,
        alt: photo.breeds[0].description
    });
    

    //
    img.addEventListener('load', CargarImagenes)

    //poner img dentro de <a> y image-container
    item.appendChild(img);
    imageContainer.appendChild(item);

   });
}



//obtener fotos
async function ObtenerFotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray =  data = await response.json();
        console.log(data);
        MostrarFotos();
        

    } catch (error) {
        
    }
}


//Cargar mas fotos
window.addEventListener('scroll', ()=>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        ObtenerFotos();
    }
});

//On load
ObtenerFotos();