
var classroom = [];
var localStorage = window.localStorage;
if (localStorage.getItem('classroom') == 'null') {
  localStorage.setItem('classroom', JSON.stringify(classroom));
} else {
  classroom = JSON.parse(localStorage.getItem('classroom'));
}



var navbar = `
    <nav class="navbar navbar-expand-ms navbar-light bg-white ">
        <div class="container-fluid ">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
            </button>

            <div class="logo">
                <a id="logo" href="https://www.google.hn/"> <img src="img/googlelogo_clr_74x24px.svg"> Classroom </a>
            </div>



            <div class="panelderecho">
                <div class="panelderechodetalle panelderechoplus ">
                    <a class="plus" href="#"> <i class="fas fa-plus"></i> </a>
                </div>
                <div class=" panelderechodetalle panelderechomenu">
                    <a class="plus" href="#"><i class="fab fa-buromobelexperte"></i> </a>
                </div>

                <div class=" panelderechodetalle panelderechousuario">
                    <a class="plus" href="#" type="button" onclick="mostrarInstructor()" data-bs-toggle="modal"
                        data-bs-target="#instructorModal"> <i id="perfilNav" class="fas fa-user"></i> </a> <!-- Halar de localStorage -->
                </div>
            </div>

                

            


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <a class="nav-link" href="#">Clases</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Calendario</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Clases Archivadas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Ajustes</a>
                    </li>
                </ul>

            </div>
        </div>


    </nav> 
    
    
    `;

//foto fondo y flecha
var navbaruno = `
    <div class="imgfondo">
        <div class="foter mb-1">
          <p> ¿No ves tus clases previas? </p>
        </div>

        <div class="foter ">
           <a href="#"> Prueba con otra cuenta</a>
        </div>


    </div>


<div class="mensajeFlecha">
<div class="mensaje ">
    <div>
        <img src="/img/dark_create_class_arrow.svg" alt="" class="flecha">
    </div>
    Crea tu propia clase o apuntate a ella.
</div>
</div>

`


// usado para el detalle de las clases
////var navbardos = ;








document.getElementById('navb').innerHTML = navbar + navbaruno;






function mostrarInstructor() {

  document.getElementById('instructoresid').innerHTML = '';

  classroom.forEach(function (inst, id) {

    nombreUsuario = inst.instructor.nombre;
    correoUsuario = inst.instructor.correo;
    imgUsuario = inst.instructor.imagen;

    document.getElementById('instructoresid').innerHTML +=
      `
            <div class="modal-body" >
              <br>
              <br>
              <a href="#" onclick="mostrarClase(${id})">
              <img src=" /img/profile-pics/${imgUsuario}" class="card-img-top profilefoto"  alt="..." >
              <div id="nombreCorreo">
                 ${nombreUsuario}<br>
                 ${correoUsuario}<br>
                 
              </div>
              </a>
            </div>   
 
        `;




  });


}





// Mostramos todas las clases que el instructor tiene

function mostrarClase(id) {
  document.getElementById('detalleiddos').innerHTML = '';
  document.getElementById('navb').innerHTML = navbar;
  document.getElementById('perfilNav').innerHTML = '';
  document.getElementById('detalleid').innerHTML = '';

  for (let j = 0; j <= classroom.length; j++) {


    for (; j < classroom[id].clases.length; j++) {
      console.log(classroom[id].clases[j].nombreClase);
      nClase = classroom[id].clases[j].nombreClase
      seccion = classroom[id].clases[j].seccion

      for (let t = 0; t < classroom[id].clases[j].asignaciones.length; t++) {
        console.log(classroom[id].clases[j].asignaciones[t].fecha);
        fecha = classroom[id].clases[j].asignaciones[t].fecha
        titulo = classroom[id].clases[j].asignaciones[t].titulo


        for (let p = 0; p < classroom[id].clases[j].anuncios.length; p++) {
          console.log(classroom[id].clases[j].anuncios[p].mensaje);

          for (let k = 0; k < classroom[id].clases[j].participantes.length; k++) {
            console.log(classroom[id].clases[j].participantes[k].nombre);
            document.getElementById('detalleid').innerHTML +=
            ` 
        <div class="col-3 mt-5" > <!-- Halar de localStorage -->
       
                <a href="#" onclick="detalleClase(${id},${j},${t},${p},${k})" class="" style="text-decoration: none; color: rgba(0, 0, 0, 0.698);">
                <div class="card" style="width: 18rem;">
                    <h4>${nClase} </h4> <!-- Halar de localStorage -->
                    <h6>${seccion}</h6> <!-- Halar de localStorage -->
                    <img src="/img/ventanas/detalle2.png" class="card-img-top" alt="..."> 
                    <div class="card-body">
                        <h5 class="card-title">${fecha}</h5> <!-- Halar de localStorage -->
                        <h5 class="card-title"><strong>${titulo}</strong> </h5> <!-- Halar de localStorage -->
                      
                    </div>
                </div>
                 </a>
          </div>
          `;

          console.log('Pinta')

       
      }
    }

      }

    }

    document.getElementById('perfilNav').innerHTML =
      `
     (<img src=" /img/profile-pics/${classroom[id].instructor.imagen}" class="card-img-top profilefoto"  alt="..." >)

`;

  }

}





function detalleClase(id, j, t, p,k) {
  document.getElementById('detalleiddos').innerHTML = '';
  document.getElementById('navb').innerHTML = '';
  document.getElementById('navb').innerHTML = `
  <nav class="navbar navbar-expand-ms navbar-light bg-white ">
      <div class="container-fluid ">
      
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon "></span>
          </button>

          <div class="logo" >
              <a id="logo" href="https://www.google.hn/"></a>
          </div>

          <div class="panelCentral">
            <div class="panelCentralIndividual mx-5 " >
              <a type="button" onclick="detalleClase(${id},${j},${t},${p},${k})" id="logo" href="#">Clases</a>
            </div>
            <div class="panelCentralIndividual mx-5" >
                <a type="button" onclick="asignacionesDetalle(${id},${j},${t},${p},${k})" id="logo" href="#"> Asignaciones</a>
              
            </div>
            <div class="panelCentralIndividual mx-5" >
                <a type="button" onclick="mostrarParticipantes(${id},${j},${t},${p},${k})" id="logo" href="#">Participantes</a>
                  
            </div>
  
           </div>




          <div class="panelderecho">
              <div class="panelderechodetalle panelderechoplus ">
                  <a class="plus" href="#"> <i class="fas fa-cog"></i> </a>
              </div>
              <div class=" panelderechodetalle panelderechomenu">
                  <a class="plus" href="#"><i class="fab fa-buromobelexperte"></i> </a>
              </div>

              <div class=" panelderechodetalle panelderechousuario">
                  <a class="plus" href="#" type="button" onclick="mostrarInstructor()" data-bs-toggle="modal"
                      data-bs-target="#instructorModal"> <i id="perfilNav" class="fas fa-user"></i> </a> <!-- Halar de localStorage -->
              </div>
          </div>



          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                  <li class="nav-item">
                      <a class="nav-link" href="#">Clases</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="#">Calendario</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Clases Archivadas</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Ajustes</a>
                  </li>
              </ul>

          </div>
      </div>
  </nav> `;
















  document.getElementById('logo').innerHTML =
    `<div  id="logo">
  ${classroom[id].clases[j].nombreClase}<br>
  <div  style="font-size: 1rem;">
  ${classroom[id].clases[j].seccion}
  </div>
  </div>
  
  

`;

  document.getElementById('perfilNav').innerHTML =
    `
     <img src=" /img/profile-pics/${classroom[id].instructor.imagen}" class="card-img-top profilefoto"  alt="..." >

`;


  //mostrar mas de detalle 

  document.getElementById('detalleid').innerHTML =
    //Banner
    `
<div class="col-12 mt-3" id="centradoCard"> <!-- Halar de localStorage -->
       
                
                <div class="card" id="centradoCardDetalle">
                  
                    <div class="imgCard">
                      <h4>${classroom[id].clases[j].nombreClase} </h4> <!-- Halar de localStorage -->
                      <h6>${classroom[id].clases[j].seccion}</h6><br> <!-- Halar de localStorage -->
                      <img src="/img/ventanas/detalle2.png" class="imgg"  alt="..."> 
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><strong>Descripcion:</strong> ${classroom[id].clases[j].descripcion}</h5> <!-- Halar de localStorage -->
                        <h5 class="card-title"><strong>Aula:</strong> ${classroom[id].clases[j].aula} </h5> <!-- Halar de localStorage -->
                    </div>
                    
                </div>
          </div>

          <!-- Mensajes -->
          <div class="container-fluid">
           <div class="row">
              <div class="col-6 my-3">
              <div id="porEvaluar">
              <p><strong>Por evaluar</strong> </p>
              ${classroom[id].clases[j].asignaciones[t].fecha}<br>
              ${classroom[id].clases[j].asignaciones[t].titulo}
                  
               </div>
              </div>

              <div class="col-6 my-3">
                  <div class="chatmsj">
                  <img src=" /img/profile-pics/${classroom[id].instructor.imagen}" class="card-img-top profilefotochat"  alt="..." >
                  <input id="anuncioVivo" class="cajaAnuncio" type="text" placeholder="Anunciar algo a tu clase"> 
                  
                  <a type"button" href="#" onclick="publicacionAnuncio(${id},${j},${p})"><i class="fas fa-retweet"></i></a>
                  
                  </div>

                  <div id="anuncioPublicado">

                  <div id="chatmsjEncabezado" class="chatmsj mt-5"  >
                    <img src=" /img/profile-pics/${classroom[id].instructor.imagen}" class="card-img-top profilefotochat"  alt="..." >
                    <div class="cajaAnuncio">
                    ${classroom[id].instructor.nombre}<br>
                    ${classroom[id].clases[j].anuncios[p].mensaje}
                   </div>
                   </div>
                   <div class="chatmsj" style="border-radius: 0px 0px 6px 6px;">
                   <img src=" /img/profile-pics/${classroom[id].instructor.imagen}" class="card-img-top profilefotochat"  alt="..." >
                  <input  class="cajaAnuncio"  type="text" placeholder="Agrega un comentario"> 
                  
                 <a href="#" onclick=""><i class="fas fa-paper-plane"></i></a>
                  
                    </div>


                  </div>
                  
              </div>
          </div>
      </div>

    
`;

}



function publicacionAnuncio(id, j, p) {

  document.getElementById('anuncioPublicado').innerHTML +=
    `
<div id="chatmsjEncabezado" class="chatmsj mt-5"  >
<img src=" /img/profile-pics/${classroom[id].instructor.imagen}" class="card-img-top profilefotochat"  alt="..." >
<div class="cajaAnuncio" >
${classroom[id].instructor.nombre}<br>
${document.getElementById('anuncioVivo').value}<br>


</div>
</div>
<div class="chatmsj" style="border-radius: 0px 0px 6px 6px;">
      <img src=" /img/profile-pics/${classroom[id].instructor.imagen}" class="card-img-top profilefotochat"  alt="..." >
      <input class="cajaAnuncio"  type="text" placeholder="Agrega un comentario"> 
                  
      <a href="#" onclick=""><i class="fas fa-paper-plane"></i></a>
                  
 </div>

 
`;

document.getElementById('anuncioVivo').value = '';


}




function asignacionesDetalle(id, j, t, p,k) {

  document.getElementById('anuncioPublicado').innerHTML = '';
  document.getElementById('detalleid').innerHTML = '';

  document.getElementById('detalleiddos').innerHTML = ` 

  <div> 
  <button type="button" id="btnAsignacion" data-bs-toggle="modal" data-bs-target="#agregarAsignacionModal" onclick=""> <i class="fas fa-plus mx-1"></i></i>Nueva Asignacion</button>

  <div class="container-fluid" id="aqui">
      <div class="row" >
          <div class="col-12" id="contenidoAsignacion" >
           <div id="nuevaAsignacion">
               
               <div id="datoTituloAsignacion">
               <i class="far fa-file-alt mx-4"></i> 
               ${classroom[id].clases[j].asignaciones[t].titulo}

               </div>
               <div id="datoTituloFecha">
               ${classroom[id].clases[j].asignaciones[t].fecha}
               </div>
               
               
            </div>
            
       
          </div>
          
  
     </div>
       
      </div>
  </div>

</div>
  
  

  `;

}


function mostrarAsignacion() {

  document.getElementById('detalleiddos').innerHTML +=
    `
  <div> 
  <button type="button" id="btnAsignacion" data-bs-toggle="modal" data-bs-target="#agregarAsignacionModal" onclick=""> <i class="fas fa-plus mx-1"></i></i>Nueva Asignacion</button>

  <div class="container-fluid">
      <div class="row" >
          <div class="col-12" id="contenidoAsignacion" >
           <div id="nuevaAsignacion" class="mt-5">
               
               <div id="datoTituloAsignacion">
               <i class="far fa-file-alt mx-4"></i> 
               ${document.getElementById('nuevoAsignacion').value}
               </div>
               <div id="datoTituloFecha">
               ${document.getElementById('nuevoFecha').value}
               </div>
            </div>
            
       
          </div>
          
  
     </div>
       
      </div>
  </div>

</div>
  
  

  `;

}


function mostrarParticipantes(id, j, t, p,k) {
  document.getElementById('anuncioPublicado').innerHTML = '';
  document.getElementById('detalleid').innerHTML = '';
  document.getElementById('detalleiddos').innerHTML += ` 

  <div>
  <div class="container-fluid">

      <div class="row" >

          <div class="col-12" id="contenidoAsignacion" >

           <div id="nuevaAsignacionUno" >

               <div id="datoTituloAsignacion">
               <h2 style="color: #2B7DE9 ">Profesores</h2>
               </div>
              
               <div id="datoTituloFecha">
              <i id="perfilNav" class="fas fa-user"></i>
               </div>

            </div>

            <div id="participanteInstructor">
              <div id="chatmsjEncabezado" class=""  >
                <img src=" /img/profile-pics/${classroom[id].instructor.imagen}" class="card-img-top profilefotochat"  alt="..." >
                  <div class=" mx-5">
                      ${classroom[id].instructor.nombre}
                   </div>
              </div>
           
            </div>

            <div id="nuevaAsignacionDos" class="lineaBaja">

            <div id="datoTituloAsignacion">
            <h2 style="color: #2B7DE9 ">Estudiantes</h2>
            </div>
           
            <div id="datoTituloFecha">
           <i id="perfilNav" class="fas fa-user"></i>
            </div>

           
            <div id="">
            <div id="" class="mt-5"  >
              <img src=" /img/profile-pics/${classroom[id].instructor.imagen}" class="card-img-top profilefotochat"  alt="..." >
                <div class="mx-5">
                    ${classroom[id].clases[j].participantes[k].nombre}
                 </div>
            </div>

         </div>
            


          </div>



     </div>


      </div>

  </div>

</div>


  `;

}



function agregarInstructor() {
  
  nombre = document.getElementById('nuevoInstructor').value,
    correo = document.getElementById('nuevoCorreo').value,
    imagen = document.getElementById('listaInstructores').value


  instr = {
    instructor: {
      nombre: nombre,
      correo: correo,
      imagen: imagen
    },
    clases: [
      { //*clase 1
        nombreClase: "Redes 1",
        codigo: "RED11XZ",
        seccion: "1400",
        imgFondo: "detalle2.png",
        imgFondoDetalle: "detalle2.png",
        aula: "B-14",
        descripcion: "Clase donde se enseña Redes",
        participantes: [
          {
            nombre: "Trunks",
            correo: "trunks@gmail.com",
            imagen: "trunks.jpg",
          },
          // ...Otro participante
        ],
        anuncios: [
          {
            mensaje: "Hoy es el examen de Redes",
            fecha: "08/11/2020",
          },
          // ...Otro anuncio
        ],
        asignaciones: [
          {
            titulo: "Tarea 3 ",
            descripcion: "Entregar una red",
            fecha: "08/12/2020",
          },
          // ...Otra asignación
        ],
      },
    ]
  }
  classroom.push(instr)
  localStorage.setItem('classroom', JSON.stringify(classroom));

  console.log(classroom);

  alert('Instructor agregado con exito');

  document.getElementById('nuevoInstructor').value = '';
  document.getElementById('nuevoCorreo').value = '';
  document.getElementById('listaInstructores').value = '';
  

}






instructoresPosibles =
  ['androide_16.jpg', 'androide_18.jpg', 'androide_19.jpg', 'baby.jpg', 'bulma.jpg', 'kibito.jpg', 'picoro.jpg',
    'roshi.jpg', 'kami.jpg', 'dende.jpg', 'mr_satan.jpg', 'cell.jpg', 'freezer.jpg', 'goku.jpg', 'vegeta.jpg'];


for (let i = 0; i < instructoresPosibles.length; i++) {

  document.getElementById('listaInstructores').innerHTML +=
    `<option value="${instructoresPosibles[i]} ">${instructoresPosibles[i]}</option> `

}

