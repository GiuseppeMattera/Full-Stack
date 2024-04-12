import { useEffect, useState } from "react";
import Constants from "./constants";
import TextCard from "./components/TextCard";

const App = () => {
  const [data, setData] = useState([])
  const [rows, setRows] = useState(12)

  // const handleSetRow = (event) => {
  //   setRows(event.target.value)
  // }

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(Constants({rows}).API);
        const result = await response.json();

        if (response.ok) {
          setData(result);
        } else {
          throw new Error("Data not found")
        }

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [rows])

  return (
    <>
      <div className="flex flex-wrap max-w-[30%]">
        <label htmlFor="rows" className="block mb-2 text-sm font-medium text-gray-900">Select a number of rows</label>
        <select onChange={(e) => setRows((e.target.value))} id="rows" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
        </select>
        {
          data.length > 0 ?
            data.map((item, index) => (
              <div key={index}>
                <TextCard data={item} />
                <br />
              </div>
            ))
            :
            <p>Empy Data</p>
        }
      </div>
    </>
  )
}

export default App;