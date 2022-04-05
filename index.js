var numeros=[];
function comprueba(flag){
    var valor = document.getElementById('cantidadNumeros');
    if(valor.value < 0 || valor.value % 1 != 0){
    document.getElementById('mensajeError').innerHTML="Introduzca un numero entero positivo.";
  }
  else{
      if(flag==1){
        $("#ingresoCantidadNumeros").hide();
          ingresoManual();
      }
      else{
        $('#ingresoCantidadNumeros').hide();
        ingresoAleatorio();
      }
  }
}

function ingresoManual(){
    
    console.log("Ingreso manual");
}

function ingresoAleatorio(){
    console.log("Ingreso aleatorio");
}
//Botón contactanos
var integrantes = ["Micaela Gordillo", "Alejandra Pacheco", "Naomi Tacachira", "Carla Valencia"];
window.onload = function contactanos(){
    let html = '';
    for (i=0; i<4; i++){
        html += `
            <div class="wrapper">
                <div class="p-card">
                    <div class="card__image card__image--person"><img src="./resources/images/profileWomen.png" alt="integrante"/></div>
                    <div class="card__title card__title--person">Integrante</div>
                    <div class="card__name">${integrantes[i]}</div>
                    <div class="card__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt omnis id laborum itaque distinctio qui
                    ut officia, perferendis voluptatem, placeat a et dolorem, quod architecto quos inventore veniam odio
                    nisi?
                    </div>
                    <div class="card__contact card__contact--person clearfix">
                        <a class="one-third" href="#"><img src="./resources/images/facebook.png" alt=""></a>
                        <a class="one-third" href="#"><img src="./resources/images/whatsapp.png" alt=""></a>
                        <a class="one-third no-border" href="#"><img src="./resources/images/in.png" alt=""></a>
                    </div>
                </div>
            </div>`
    }
    $('#informacionContactanos').html(html);
}