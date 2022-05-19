const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'jQuery', 'Angular', 'PHP', 'Symfony', 'Wordpress', 'SQL'],
    datasets: [{
      label: 'Compétence',
      data: [86, 81, 85, 63, 60, 66, 68, 70, 80, 71],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(160, 0, 35, 0.5)',
        'rgba(0, 94, 156, 0.5)',
        'rgba(151, 108, 0, 0.5)',
        'rgba(0, 146, 146, 0.5)'
      ],
      hoverBackgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
        'rgba(160, 0, 35)',
        'rgba(0, 94, 156)',
        'rgba(151, 108, 0)',
        'rgba(0, 146, 146)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(160, 0, 35, 1)',
        'rgba(0, 94, 156, 1)',
        'rgba(151, 108, 0, 1)',
        'rgba(0, 146, 146, 1)'
      ],
      borderWidth: 1,
      hoverBorderWidth: 3,
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      y: {
        suggestedMax: 100
      }
  }
  }
});