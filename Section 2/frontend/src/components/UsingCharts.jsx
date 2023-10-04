import React from 'react';
import { Chart, CategoryScale, LinearScale, BarElement,Title, Tooltip, Legend, PointElement, LineElement} from 'chart.js';
import {Bar, Line} from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, Title,Tooltip, Legend, PointElement, LineElement);


const UsingCharts = () => {
    const chartData = {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: 'No. of Orders',
            data: [156,126,672,890,475,213,444, 900],
            backgroundColor: "#f00", 
            borderColor: "#00f"
        }]
    }
  return (
    <div>
        <div className='container'>
        <h1>Using Bar Chart</h1>
        <hr/>
<Bar data={chartData}/>
<Line data={chartData}/>
        </div>
        </div>
  )
}

export default UsingCharts