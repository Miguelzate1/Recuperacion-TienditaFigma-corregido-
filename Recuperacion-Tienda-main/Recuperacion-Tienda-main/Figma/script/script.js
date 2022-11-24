// ABRIR EL POPO UP DEL LUGAR
const abrirLugar = document.getElementById('abrirLugar')
const preguntarLugar = document.getElementById('preguntarLugar')
const cerrarLugar = document.getElementById('cerrarLugar')

abrirLugar.addEventListener('click', () => {
    (async()=>{
        const { value: lugar } = await Swal.fire({
            title: '¿Dónde quieres recibir tu pedido?',
            color:'black',
            text: 'Para poder ofrecerte productos dentro de tu área, necesitmaos tu dirección',
            input: 'select',
            inputOptions: {
                'México City Marriott Reforma Hotel':'México City Marriott Reforma Hotel',
                'México City International Airport':'México City International Airport',
                'México City Mexico':'México City Mexico'
            },
            inputPlaceholder: 'Ingrese su ubiación',
            confirmButtonText: 'Buscar',
            confirmButtonColor: '#82CD47',
            showCloseButton:true,
        })
        localStorage.setItem('lugarCompra', lugar)
        location.reload()
    })()
})
