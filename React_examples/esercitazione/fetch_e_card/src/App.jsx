import { useEffect, useState } from "react";
import Card from "./components/Card"
import { Constants } from "./constants"

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Constants().API_BASE);
        const result = await response.json();

        if(response.ok) {
          setPosts(result.posts);
        } else {
          throw new Error("Data not found")
        }
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      {
        posts.length > 0 && posts.map(item => (
          <Card key={item.id} data={item} />
        ))
      }
    </>
  )
}

export default App