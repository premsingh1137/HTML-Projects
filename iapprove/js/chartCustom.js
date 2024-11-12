

  // line chart 
var lineCtx = document.getElementById('myLineChart').getContext('2d');
var myLineChart1 = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['XYZ.co', 'ABZ.co', 'HGY.co', 'WER.co', 'FGR.co', 'UYH.co', 'DVG.co', 'UJK.co', 'KLO.co', 'FRE.co' ],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40,20,60,10,30],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Define data for the bar chart
const barData = {
  labels: ['Completed', 'In Progress', 'On Hold', 'Completed', 'Overdue'],
  datasets: [{
      label: 'My First Dataset',
      data: [5, 6, 2, 5, 3, 7],
      backgroundColor: [
          '#5B93FF',
          '#FFC327',
          '#9747FF',
          '#34B53A',
          '#DB371A',
      ],
      borderRadius: 10
  }]
};

// Define configuration for the bar chart
const barConfig = {
  type: 'bar',
  data: barData,
  options: {
      scales: {
          x: {
              grid: { display: false }
          },
          y: {
              beginAtZero: true
          }
      }
  }
};

// Initialize the bar chart
const barCtx = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(barCtx, barConfig);

// Initialize the circular progress bars
const progressCtx = document.getElementById('progressBarsChart').getContext('2d');
const progressBarsChart = new Chart(progressCtx, {
  type: 'doughnut',
  data: {
      labels: progressData.map(item => item.task),
      datasets: [{
          data: progressData.map(item => item.progress),
          backgroundColor: colors,
          borderWidth: 1
      }]
  },
  options: {
      cutout: '90%',
      plugins: {
          legend: {
              display: false
          }
      },
      animation: {
          animateRotate: false, // Disable rotation animation
          animateScale: false // Disable scale animation
      }
  }
});


//circular progress bar
// Define data for the circular progress bars
const progressData = [
    { task: "Packaging", progress: 67 },
    { task: "Line Extension", progress: 40 },
    { task: "Cartons", progress: 67 },
    { task: "Tray", progress: 15 }
  ];
  
  // Define colors for the circular progress bars
  const colors = ['#FFB200', '#4339F2', '#34B53A', '#FF3A29'];
  
 
