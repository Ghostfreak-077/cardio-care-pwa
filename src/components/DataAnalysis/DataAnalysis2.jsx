import { useEffect, useState } from "react";
import data from "./data.json"
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';
import styles from './Analysis.module.scss';



ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DataAnalysis = () => {

  const [chartData, setChartData] = useState({})

  useEffect(() => {

    setTimeout(() => {
      setChartData({
        labels: data.map(item => item.ngay_mua),
        datasets: [
          {
            label: '',
            data: data.map((item) => item.trigia),
            fill: false,
            // type: 'line',
            borderColor: 'rgb(255, 99, 132)',
            tension : 0
          },
        ],
      })
    }, 1000)

  }, [])
  
  return (
    <div className={styles.analysis}>
      <div className='chart'>
      {
          chartData && chartData?.datasets && (
            <Line 
              options={ {
                  // responsive: true,
                  aspectRatio: 1.4,
                  // height: '10vh',
                  plugins: {
                    legend: {
                      display:false,
                      // position: 'top',
                    },
                    title: {
                      display: false,
                      text: 'SPO2 vs TIME',
                    },
                  },
                }} 
              data={chartData} 
            />
          )
        }
      </div>
    </div>
  );
}



export default DataAnalysis;