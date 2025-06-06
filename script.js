
const ctx = document.getElementById('kpiChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Identidad indígena (%)',
            'Sin servicios básicos (%)',
            'Mujeres sin escolaridad (%)',
            'Sin agua entubada (%)',
            'Pobreza indígena (%)'
        ],
        datasets: [{
            label: 'Indicadores DEI',
            data: [19.4, 67.4, 20.9, 35.8, 76.8],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
