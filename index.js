var numeros=[];
var cantidadNumeros=0;
function comprueba(flag){
    var valor = document.getElementById('cantidadNumeros');
    if(valor.value < 0 || valor.value % 1 != 0){
    document.getElementById('mensajeError').innerHTML="Introduzca un numero entero positivo.";
  }
  else{
      cantidadNumeros=parseInt(valor.value, 10);
      quitarModal('#ingresoCantidadNumeros');
      if(flag==1){
          ingresoManual();
      }
      else{
        ingresoAleatorio();
      }
  }
}

function ingresoManual(){
    console.log("Ingreso manual");
    var html=`<h4>Introduzca los numeros a ordenar: </h4><br>`;
    for(i=0; i<cantidadNumeros; i++){
        if(i%2!=0){//Cada dos valores se hara un salto de linea
            html+=`<label style="margin-right:1vw;">Numero ${i+1}: </label><input style = "height:1.5vw; width:4vw;" id="valor-${i+1}"><br>`;
        }
        else{
            html+=`<label style="margin-right:1vw;">Numero ${i+1}: </label><input style = "height:1.5vw; width:4vw; margin-right:5vw;" id="valor-${i+1}">`;
        }
    }
    console.log(html);
    $('#inputNumeros').html(html);
    $('#ingresoValores').modal({ show: true });
}

function agregarNumeros(){
    for (i=0; i<cantidadNumeros; i++){
        numero = document.getElementById("valor-"+(i+1)).value;
        numeros.push(numero);
    }
    quitarModal("#ingresoValores");
    console.log(numeros);
}
function ingresoAleatorio(){
    console.log("Ingreso aleatorio");
}

function quitarModal(modal){
    $(modal).hide();
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
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