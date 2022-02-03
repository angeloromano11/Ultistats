const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: [
      'Passes',
      'Backhand',
      'Forehand',
      'turnovers',
      'Jumping',
      'Cleaning',
      'Running',
    ],
    datasets: [
      {
        label: 'Actual Player',
        data: [65, 59, 90, 81, 56, 55, 70],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'One year ago player',
        data: [28, 48, 40, 19, 30, 27, 50],
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
