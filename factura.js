function calcular(){
    const iva = 0.19;
    let precio = document.simuladorfactura.precio.value;
    let cantidad = document.simuladorfactura.cantidad.value;
    producto.document.getElementById('producto').value;


    //validar o aplicar una estructura condicional

    if(precio == 0 || precio == null ){
        alert('no se puede realizar la simulacion, intente de nuevo')   
    } else {
            let valortotal = precio*cantidad;
            let valoriva = valortotal*iva;
            let totalpagar = valortotal+iva;

            //imprimir los resultados por pantalla
            document.getElementById('valorprod').innerHTML = producto;
            document.getElementById('valort').innerHTML = valortotal;
            document.getElementById('valori').innerHTML = valoriva;
            document.getElementById('totalp').innerHTML = totalpagar;

    }

}
