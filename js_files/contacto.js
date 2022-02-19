$(() => {
    let datos = [];
    
    class Dato {
        constructor (nombre, apellido, email, telefono, localidad, consulta) {
            this.id = datos.length;
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
            this.telefono = telefono;
            this.localidad = localidad;
            this.consulta = consulta;
        }
    }    
    
    $('#padre').append(`<form id="formulario" class="main__form row g-3 m-auto mb-5">
    <div class="col-6">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" style="height: 30px;">
    </div>
    <div class="col-6">
        <label for="apellido" class="form-label">Apellido</label>
        <input type="text" class="form-control" id="apellido" style="height: 30px;">
    </div>
    <div class="col-6 col-md-12">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="email@server.com" style="height: 30px;">
    </div>
    <div class="col-6 col-md-12">
        <label for="telefono" class="form-label">Telefono</label>
        <input type="tel" class="form-control" id="telefono" placeholder="(011)-(telefono)" style="height: 30px;">
    </div>
        <div class="col-md-7">
        <label for="localidad" class="form-label">Localidad</label>
        <input type="text" class="form-control" id="localidad" style="height: 30px;">
    </div>
    <div class="col-md-5 mt-4" id="esp"> 
    </div>
    <div class="col-md-12">
        <label for="consulta">Consulta:</label>
        <textarea name="consulta" id="consulta" class="form-control"></textarea>
    </div>
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
                Acepto brindar Información personal
            </label>
        </div>
    </div>
    <div class="col-12">
        <button type="submit" class="boton btn btn-primary m-2">Enviar</button>
        <button type="reset" class="boton btn btn-primary">Limpiar formulario</button>
    </div>
    </form>
        `);

    formulario.style="color: white; background: linear-gradient(to top, #ee82ee, #5a0b49); margin-left: 3em; box-shadow: 10px 5px 5px grey; width: 90%; font-size: map-get($tamañosTexto, formulario); padding: 1em; border: 1px solid #CCC; border-radius: 0.5em; color: map-get($coloresTexto, cFormulario);";
    
    let especialidades = ['Derecho Laboral', 'Accidentes de Tránsito', 'Sucesiones'];
    let innerHTML = '';
    for (especialidad of especialidades) {
        innerHTML += `<option value="${especialidad}">${especialidad}</option>`;
    }
    
    $('#esp').append(`<select id="esp" class="mt-4" style="height: 40px;">${innerHTML}</select>`);
    
    $('#esp').change(function(e){ 
        $('#esp').append(`<h2 class="text-2x1">${e.target.value}</h2>`);
    });
    
    
    $('#formulario').submit(function (e){ 
        e.preventDefault();
        let nombre = e.target[0].value;
        let apellido = e.target[1].value;
        let email = e.target[2].value;
        let telefono = e.target [3].value;
        let localidad = e.target[4].value;
        let consulta = e.target[6].value;
    
        let persona = new Dato(nombre, apellido, email, telefono, localidad, consulta);
        datos.push(persona);
        crearPersona(persona);
        eventosPersonas();
    
        e.target.reset();
        
    });
    
    
    function crearPersona(persona) {
        $('#padre').append(`<div>
        <p>Nombre: ${persona.nombre}</p>
        <p>Apellido: ${persona.apellido}</p>
        <p>Email: ${persona.email}</p>
        <p>Telefono: ${persona.telefono}</p>
        <p>Localidad: ${persona.localidad}</p>
        <p>Consulta: ${persona.consulta}</p>
        <button class="btnDatos boton btn-primary" px-2" id='${persona.id}'>Confirmar Datos</button>
        `);
        }
    
    function eventosPersonas(){
        let btnDatos = $('.btnDatos');
        for(buton of btnDatos){
            $('.btnDatos').on('click', function(e) {
                let id = e.target.id;
                let persona = datos.find(persona => persona.id == id);
                $('#padre').append(`<h2 class="text-2x1">Muchas Gracias ${persona.nombre} ${persona.apellido} por tu mensaje. En breve alguien del equipo se estará comunicando para responder tu consulta!</h2>`);
            })
        }
    }

    $("#btnAvisoLegal").click (() => {
        $(".modal-dialog").fadeOut(10000, function(){
            $("#btnAvisoLegal").text('Aviso Revisado'),
            $(".modal-dialog").fadeIn(2000);
        });
    });
    
    });