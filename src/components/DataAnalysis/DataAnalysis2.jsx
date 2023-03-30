import { useEffect, useState } from "react";
import data from "./data2.json"
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
    setInterval(async () => {

      data.push({
        "second": new Date().getSeconds().toString(),
        "time": new Date().getHours().toString() + ":" + new Date().getMinutes().toString(),
        "br": (Math.round(((Math.random() * 2) + 95) * 100) / 100)
      })

      // fs.writeFile('./data.json', JSON.stringify(data))

      console.log(data[data.length - 1]);

      setChartData({
        labels: [...data.slice(data.length - 61, data.length - 1),data[data.length-1]].map((item) => item.second),
        datasets: [
          {
            label: '',
            data: [...data.slice(data.length - 61, data.length - 1), {
              "second": new Date().getSeconds().toString(),
              "time": new Date().getHours().toString() + ":" + new Date().getMinutes().toString(),
              "br": 60
            }].map((item) => item.br),
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
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