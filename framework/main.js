const ctx = document.getElementById('myChart')

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
        label: "Progressão de vendas"
    }]
}

const config = {
     type: 'line',
     data,
     options: {
        responsive: true
    }

        
};

const myChart = new Chart(ctx, config)

