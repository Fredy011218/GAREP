function graficafinal(){

    const labels = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
      ];
    
      const data = {
        labels: labels,
        datasets: [{
          label: 'Equipos Revisados Por mes',
          backgroundColor: 'rgb( 0, 3, 5 )',
          borderColor: 'rgb( 28, 144, 246 )',
          data: [45, 20, 25, 22, 28, 38, 51],
        }]
      };
    
      const config = {
        type: 'line',
        data: data,
        options: {}
      };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
//doughnut

}


function graficaP(){

    const labels = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
      ];
    
      const data = {
        labels: labels,
        datasets: [{
          label: 'Equipos Reparados por mes',
          backgroundColor: 'rgb( 28,144,246 )',
          borderColor: 'rgb( 0,0,0 )',
          data: [23, 10, 15, 12, 20, 37, 51],
        }]
      };
    
      const config = {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };

  const myChart = new Chart(
    document.getElementById('myChart2'),
    config
  );
//doughnut

}

function reca(){
  location.href="../vista/prueba.html?";
}
function reca2(){
var combo = document.getElementById("inputcorreo");
var selected = combo.options[combo.selectedIndex].text;
  alert("Correo Enviado Correctamente desde: " + selected);
  location.href="../vista/prueba.html?";
}
function aleta(){
  alert("Recuerde seleccionar minimo dos campos de la lista comprobacion");
}


const fechas = new Date();
var currentTime = new Date();


function fecha(){
  const annActual = fechas.getFullYear();
  const hoy = fechas.getDate();
const mesActual = fechas.getMonth() + 1;
const hora = currentTime.getHours();
  const min = currentTime.getMinutes();
  var combo = document.getElementById("Transportadora");
var selected2 = combo.options[combo.selectedIndex].text;
  
  alert("Numero de Guia es: "+"RMA_CO_"+annActual+""+hoy+""+mesActual+""+hora+""+min+"Por transportadora:"+"\n"+selected2);
}


function gestionRMA(){
const annActual = fechas.getFullYear();
const hoy = fechas.getDate();
const mesActual = fechas.getMonth() + 1;
const hora = currentTime.getHours();
  const min = currentTime.getMinutes();
  alert("Numero de seguimiento es: "+"RMA_CO_"+annActual+""+hoy+""+mesActual+""+hora+""+min);
  
}
function srma(){
  const annActual2 = fechas.getFullYear();
  const hoy2 = fechas.getDate();
const mesActual2 = fechas.getMonth() + 1;
const hora2 = currentTime.getHours();
  const min2 = currentTime.getMinutes();
  var final = "RMA_CO_"+annActual2+""+hoy2+""+mesActual2+""+hora2+""+min2;
  document.getElementById("rmaid").innerHTML = final.toString();
}
