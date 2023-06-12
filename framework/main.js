const ctx = document.getElementById('myChart').getContext("2d")

const gradient = ctx.createLinearGradient(0,0,0, 400)
gradient.addColorStop(0, '#5cffca')
gradient.addColorStop(1, '#66ff')

const labels = [
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023'
]

const data = {
    labels,
    datasets: [{
        data: [234, 688, 567, 145, 300, 499, 111, 456, 900, 452],
        label: "Progressão de vendas",
        fill: true,
        backgroundColor: gradient,
       
    }]
}

const config = {
     type: 'line',
     data,
     options: {
        responsive: true,
        radius: 7,
        hoverRadius: 10,
        scales: {
            y: {
                ticks: {
                    callback: function(value){
                        let finalValue = value.toFixed(2)
                        return 'R$ ' + finalValue.replace('.', ',') + ' milhões'
                    }
                }
            }
        }
    }

        
};

const myChart = new Chart(ctx, config)

