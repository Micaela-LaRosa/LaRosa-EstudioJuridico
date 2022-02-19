$(() => {

    const divAbono = $("#abono");
    const divMontos =  $("#montos");

    class Abonos{
        constructor(id, abono, precio){
            this.id= id;
            this.abono = abono;
            this.precio = parseFloat(precio);
        }
    }

    function guardarStorage(clave, valor){
        localStorage.setItem(clave, JSON.stringify(valor));
    }

    function recuperarStorage(clave){
        return JSON.parse(localStorage.getItem(clave));
    }

    function imprimirAbono(monto){
        divAbono.html('');
        divAbono.prepend(`<p class="m-4" id="abono">Tu abono dura ${monto.abono}, y tiene un valor de ${monto.precio}</p>`);
    }

    if (recuperarStorage('monto')){
        let monto = recuperarStorage('monto');
        imprimirAbono(monto);
    }

    let montos = [];

    const abono1 = (new Abonos(1, '1 año', 36000));
    const abono2 = (new Abonos(2, '2 años', 84000));
    const abono3 = (new Abonos(3, '3 años', 120000));

    montos.push(abono3, abono2, abono1);
                
    for (const monto of montos) {

        divMontos.prepend(`<div><h3 class="m-4"> N° de abono: ${monto.id})</h3> 
                            <p class="m-2"> Tiempo: ${monto.abono}<p>
                            <b class="m-2"> $ ${monto.precio}</b>
                            <button id="btn${monto.id}" class="boton btn btn-primary">Seleccionar</button>
                            </div>`);

        $(`#btn${monto.id}`).on('click', function (){
            guardarStorage('monto', monto);
            imprimirAbono(monto);
        });

    }

    $("#btnAvisoLegal").click (() => {
        $(".modal-dialog").fadeOut(10000, function(){
            $("#btnAvisoLegal").text('Aviso Revisado'),
            $(".modal-dialog").fadeIn(2000);
        });
    });

});










