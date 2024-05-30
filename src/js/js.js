console.log("hola");
// fetch("https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=dfda848c72bb073b5719cb794067fb886f17234dcc21ffb1e1ac0863045550a8")
// .then(x=>x.json())
// .then(dato=>console.log(dato))

// fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
// .then(x=>x.json())
// .then(dato=>console.log(dato))

// fetch("https://trackapi.nutritionix.com/v2/search/instant/?query=fast food",{
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'x-app-id': "30c14dbd",
//         'x-app-key': "2330a3c6c20bf305b4d48ad4b9f3b7d8"
//   }
// })
// .then(x=>x.json())
// .then(dato=>console.log(dato))
const promocionados=document.getElementById("grid_promo");
let lista={
    1:{nombre:"Pollo kung pao chino",url:"img/promocionados/pollo-kung-pao.jpg",precio:10.00,descripcion:"pollo chino"},
    2:{nombre:"Milanesa",url:"img/promocionados/milanesa_1.jpg",precio:10.00,descripcion:"pollo chino"},
    3:{nombre:"Basa",url:"img/promocionados/basa.jpg",precio:10.00,descripcion:"pollo chino"},
    4:{nombre:"Cabaña las lilas",url:"img/promocionados/cabaña_las_lilas.jpg",precio:10.00,descripcion:"pollo chino"},
    5:{nombre:"Carne Elena",url:"img/promocionados/carne_elena.jpg",precio:10.00,descripcion:"pollo chino"},
    6:{nombre:"Cause de los fuegos",url:"img/promocionados/cause_de_los_fuegos.jpg",precio:10.00,descripcion:"pollo chino"}
};
function drawItem(lista,key){
    let articulo=document.createElement("article");
    articulo.dataset.id=key;
    articulo.innerHTML=`
    <article class="item_promo">
        <h4>${lista[key].nombre}</h4>
        <img src="${lista[key].url}" alt="${lista[key].url.split("/")[lista[key].url.split("/").length-2]}">
        <span class="item_precio">U$S ${lista[key].precio}</span>
        <p class="item_panel">
            <span class="menos">-</span>
            <input class="input_cantidad" type="number" placeholder="0" value="0">
            <span class="mas">+</span>
        </p>
    </article>
    `;
    return articulo;
}

promocionados.innerHTML="";
for (const key in lista) {
    if (Object.hasOwnProperty.call(lista, key)) {
        promocionados.appendChild(drawItem(lista,key));
    }
}
////////////////////////////////////////////////////////////////////////////////////
const cocteles=document.getElementById("grid_cocteles");
const cargar_mas=document.getElementById("cargar_mas");
function drawItemBebida({nombre,url,id}){
    let articulo=document.createElement("article");
    articulo.dataset.id=id;
    articulo.innerHTML=`
    <article class="item_promo">
        <h4>${nombre}</h4>
        <span class="item_codigo">código: ${id}</span>
        <img src="${url}" alt="${"nada"}">
        <span class="item_precio">U$S ${5}</span>
        <p class="item_panel">
            <span class="menos">-</span>
            <input class="input_cantidad" type="number" placeholder="0" value="0">
            <span class="mas">+</span>
        </p>
    </article>
    `;
    return articulo;
}
cocteles.innerHTML="";
// fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=wine")
// fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
function cargar_cocteles(){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(x=>x.json())
    .then(dato=>{
        console.log(dato);
        if(dato.hasOwnProperty("drinks")){
            let lista=dato.drinks;
            lista.forEach(i => {
                cocteles.appendChild(drawItemBebida(
                    {
                        nombre:i.strDrink,
                        url:i.strDrinkThumb,
                        id:i.idDrink
                    }
                ));
            });
        }
    })
}
for (let i = 0; i < 6; i++) cargar_cocteles();
cargar_mas.addEventListener("click",()=>{
    cargar_cocteles();
    scroll(window.scrollY, window.scrollY+100);
});
// lista.forEach(element => {
// });


const btn_carta=document.querySelector(".btn_carta");
const carta=document.querySelector(".vista_carta");
btn_carta.addEventListener("click",()=>{
    carta.classList.toggle("ocultar_carta");
    btn_carta.classList.toggle("icon-close");
    btn_carta.classList.toggle("icon_carta");
});