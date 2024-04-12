import { useEffect, useState } from "react";
import Constants from "./constants/index";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
 
  const handleSetId = (event) => {
    setId(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Constants().API);
        const result = await response.json();

        if (response.ok) {
          setData(result);
        } else {
          throw new Error("Data not found");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <div className="mb-6 max-w-[50%]">
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Choose an albumID</label>
        <input onInput={handleSetId} type="number" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
      </div>
      <div className="flex flex-wrap gap-12">
        {
          data.length > 0 ?
            data.filter((item) => (
              item.albumId === Number(id)
            )).map((item, index) => (
              <div key={index}>
                <Card data={item} />
              </div>
            ))
            :
            <h4>Empty data</h4>
        }
      </div>
    </>
  )
}

export default App;