import { useEffect, useState } from "react";
import Constants from "./constants";
import TableRow from "./components/TableRow";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Constants.API_URL)
        const result = await response.json()

        if (response.ok) {
          setData(result.comments)
        } else {
          throw new Error(result)
        }
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
                <th>id</th>
                <th>body</th>
                <th>postId</th>
                <th>username</th>
              </tr>
          </thead>
          <tbody>
            {
              data.map((comment, index) => (
                <TableRow key={index} data={comment}/>
              ))
            }
          </tbody>
        </table>
    </>
  )
}

export default App;