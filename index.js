$(() => {

    $(".card").animate({height: '150px',
                    width:'150px' },
                    10000,
                    function () {
                        $(".card").animate({
                        height: '450px',
                        width: '300px'
                    });
                });
                
    $("h1").slideUp("slow", function (){
        $("h1").slideDown(5000);
    });
    
    $("#btnAvisoLegal").click (() => {
        $(".modal-dialog").fadeOut(10000, function(){
            $("#btnAvisoLegal").text('Aviso Revisado'),
            $(".modal-dialog").fadeIn(2000);
        });
    });

});

const URLClientes= './data/clientes.json';

$('#botonClientes').prepend('<button id="btnClientes" class=" m-3 btn btn-primary fw-bold"> Que empresas eligen Sulet Abogados? </button>')

$('#btnClientes').click(() => {
    $.getJSON(URLClientes, function(response, status) {
        if(status === 'success') {
            let misDatos = response;
            for (const dato of misDatos) {
                $('#botonClientes').prepend(`
                    <div class="bg-white p-3 rounded shadow-lg>
                        <h2 class="text 2x1 font-bold">${dato.nombre}</h2>
                        <p class="text-gray-700">de la localidad de ${dato.localidad}</p>
                    </div>
                `)
            }
        }
    });
});



