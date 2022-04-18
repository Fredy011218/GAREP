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


