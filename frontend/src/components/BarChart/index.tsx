import Chart from 'react-apexcharts';
const BarChart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Pamela Doki', 'Barry Allen', 'Lucas Veiga', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };



    return (
        <Chart 

                options = {{...options, xaxis:mockData.labels}}
                series={mockData.series}
                type="bar"
                heigth="240"

        />
    );
}


export default BarChart;