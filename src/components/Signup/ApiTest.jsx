import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ApiTest = () => {

    const [Data, setData] = useState("")

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "http://192.168.90.215:80"
            );
            setData(response.data);
            // console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        // fetchData();
        setInterval(fetchData,10000)
      });


  return (
    <div>
      <h1>{Data}</h1>
    </div>
  )
}

export default ApiTest
