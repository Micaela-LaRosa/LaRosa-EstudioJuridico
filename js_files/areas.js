$(() => {

    $("#btnAvisoLegal").click (() => {
        $(".modal-dialog").fadeOut(10000, function(){
            $("#btnAvisoLegal").text('Aviso Revisado'),
            $(".modal-dialog").fadeIn(2000);
        });
    });
    
});