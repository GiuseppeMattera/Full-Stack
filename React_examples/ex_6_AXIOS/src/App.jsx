import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: "https://jsonplaceholder.typicode.com/albums",
          method: "GET"
        });
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <>
        <table>
          <thead>
            <tr>
              {
                data.length > 0 ?
                Object.keys(data[0]).map((item, index) => (
                  <th key={index}>{item}</th>
                ))
                :
                  <th>titles not found</th>
              }
            </tr>
          </thead>
          <tbody>
              {
                data.length > 0 ?
                data.map((item, index) => (
                  <tr key={index}>
                    {
                      Object.values(item).map((value) => (
                        <td key={value}>{value}</td>
                      ))
                    }
                  </tr>
                ))
                :
                  <tr>Empty data</tr>
              }
          </tbody>
        </table>
    </>
  )
}

export default App;