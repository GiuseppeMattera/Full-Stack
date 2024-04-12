import { useEffect, useState } from "react";
import ConstantsPosts from "./constants/index_posts";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ConstantsPosts().API);
        const result = await response.json();

        if (response.ok) {
          setData(result.posts);
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
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Our Blog</h2>
            <p className="font-light text-gray-500 sm:text-xl">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          </div>
        </div>
        <div>
          {
            data.length > 0 ?
            data.map((item, index) => (
              <div key={index}>
                  <Card posts={item} />
              </div>
            ))
            :
            <p>Data not found</p>
          }
        </div>
      </section>
    </>
  )
}

export default App;