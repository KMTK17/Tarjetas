const card = document.querySelector('.container_cards');
let cont = -1 ;

document.getElementById('añadir').addEventListener('click', ()=>{

    cont ++;

    card.innerHTML += ` <div class="card"><h3>Modelo ${cont}</h3><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, commodi!</p><button id='delete' onclick="eliminar(this)">Eliminar <img src='contenedor-de-basura.png' alt='trashcan' width='20' height='20'></button></div>`
    
    document.getElementById('delete').addEventListener(eliminar);
})

function eliminar(borrar){
    
    borrar.parentNode.parentNode.removeChild(borrar.parentNode);
}

