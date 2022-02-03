const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'Point 1',
      'Point 2',
      'Point 3',
      'Point 4',
      'Point 5',
      'Point 6',
      'Point 7',
      'Point 8',
      'Point 9',
      'Point 10',
      'Point 11',
      'Point 12',
      'Point 13',
      'Point 14',
      'Point 15',
    ],
    datasets: [
      {
        label: 'Krakens',
        data: [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Sharks',
        data: [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
      },
    ],
  },
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
});
