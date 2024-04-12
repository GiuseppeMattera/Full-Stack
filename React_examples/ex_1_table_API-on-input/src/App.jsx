import { useState } from "react";
import CustomTable from "./components/CustomTable";

const App = () => {
  const [url, setUrl] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  const handleInputUrl = (event) => {
    setUrl(event.target.value);
  }

  const handleClickLoad = () => {
    setIsLoaded(true);
  }

  const handleClickReset = () => {
    setIsLoaded(false);
  }

  return (
    <>
      <div className="mb-6 flex p-12">
        <input onInput={handleInputUrl} type="text" className="max-w-[50%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="URL" />
        <button onClick={handleClickLoad} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          Load
        </button>
        <button onClick={handleClickReset} type="button" className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          Reset
        </button>
      </div>
      <div className="p-12">
        <CustomTable url={url} isLoaded={isLoaded} />
      </div>
    </>
  )
}

export default App;