const items = document.getElementById('itemsLugarCompra')
const templateCard = document.getElementById('ubicacion').content;
const fragment = document.createDocumentFragment();

lugar = localStorage.getItem('lugarCompra')

if (lugar != 'México City Marriott Reforma Hotel'){
    if(lugar != 'México City International Airport'){
        if(lugar != 'México City Mexico'){
            localStorage.setItem('lugarCompra', undefined)
        }
    }
}

console.log(lugar)

if (lugar == 'undefined'){
    lugar= 'México City Marriott Reforma Hotel'
    localStorage.setItem('lugarCompra',lugar)
}

document.addEventListener('DOMContentLoaded',()=>{
    LoadData()
})

const LoadData = () => {
    let lugarCompra = localStorage.getItem('lugarCompra')
    templateCard.querySelector('h3').textContent = lugarCompra
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
    items.appendChild(fragment)
}