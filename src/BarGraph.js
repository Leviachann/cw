import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const BarGraph = ({ totalIncome, totalExpenses }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    const newChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Total Income', 'Total Expenses', 'Total Left Money'],
        datasets: [{
          label: 'Amount',
          data: [totalIncome, totalExpenses, totalIncome - totalExpenses],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
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

    setChartInstance(newChartInstance);

    return () => {
      newChartInstance.destroy();
    };
  }, [totalIncome, totalExpenses, chartInstance]);

  return (
    <div>
      <h3>Bar Graph</h3>
      <canvas ref={chartRef} width="50" height="25"></canvas>
    </div>
  );
};

export default BarGraph;
