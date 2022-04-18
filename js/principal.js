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
          data: [23, 10, 15, 12, 20, 37, 51],
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
          label: 'Equipos Revisados Por mes',
          backgroundColor: 'rgb( 0, 3, 5 )',
          borderColor: 'rgb( 28, 144, 246 )',
          data: [23, 10, 15, 12, 20, 37, 51],
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


