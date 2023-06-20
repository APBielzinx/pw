document.addEventListener('DOMContentLoaded', function () {
    var myChart;
    var columnCount = 1;

    document.getElementById('dataForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var chartType = document.getElementById('chartType').value;
        var chartColor = document.getElementById('chartColor').value;
        var backgroundColor = document.getElementById('backgroundColor').value;
        var chartTitle = document.getElementById('chartTitle').value; // Obtenha o título do gráfico
        var body = document.body;

        var columnNames = [];
        var columnValues = [];

        for (var i = 1; i <= columnCount; i++) {
            var columnName = document.getElementById('columnName' + i).value;
            columnNames.push(columnName);

            var columnValue = parseInt(document.getElementById('columnValue' + i).value);
            columnValues.push(columnValue);
        }

        if (myChart) {
            myChart.destroy();
        }

        var ctx = document.getElementById('myChart').getContext('2d');

        myChart = new Chart(ctx, {
            type: chartType,
            data: {
                labels: columnNames,
                datasets: [{
                    label: chartTitle,
                    data: columnValues,
                    borderColor: chartColor,
                    backgroundColor: chartColor,
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        font: {
                            size: 18
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        document.getElementById('chartContainer').style.display = 'block';
        document.getElementById('newChartButton').style.display = 'block';
        document.getElementById('generateChartButton').style.display = 'none';

        body.style.backgroundColor = backgroundColor;
        document.getElementById('columnInputs').style.display = 'none';
        document.getElementById('graficoTitulo').style.display = "none"

    });

    document.getElementById('addColumnButton').addEventListener('click', function () {
        columnCount++;
        var newColumn = document.createElement('div');
        newColumn.innerHTML = `
            <label for="columnName${columnCount}">Nome da coluna ${columnCount}:</label>
            <input type="text" id="columnName${columnCount}" name="columnName${columnCount}" required>

            <label for="columnValue${columnCount}">Valor da coluna ${columnCount}:</label>
            <input type="number" id="columnValue${columnCount}" name="columnValue${columnCount}" required>
        `;
        document.getElementById('columnValues').appendChild(newColumn);
    });

    document.getElementById('newChartButton').addEventListener('click', function () {
        document.getElementById('chartContainer').style.display = 'none';
        document.getElementById('newChartButton').style.display = 'none';
        document.getElementById('generateChartButton').style.display = 'block';
        document.getElementById('columnInputs').style.display = 'block';
        document.getElementById('graficoTitulo').style.display = "block"

        var body = document.body;
        body.style.backgroundColor = 'white';
    });

    function getChartColors(color, count) {
        var colors = [];
        for (var i = 0; i < count; i++) {
            colors.push(color);
        }
        return colors;
    }
});