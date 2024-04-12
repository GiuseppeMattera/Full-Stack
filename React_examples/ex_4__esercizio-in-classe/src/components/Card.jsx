import { useEffect, useState } from "react";
import ConstantsUsers from "../constants/index_users";

const Card = ({ posts }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(ConstantsUsers().API);
            const result = await response.json();
    
            if (response.ok) {
              setData(result.users);
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
            <div className="grid gap-8 lg:grid-cols-2">
                <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                    <div className="flex justify-between items-center mb-5 text-gray-500">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                            <svg className="mr-1 w-3 h-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                            Tutorial
                        </span>
                        <span className="text-sm">14 days ago</span>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"><a href="#">{ posts.title }</a></h2>
                    <p className="mb-5 font-light text-gray-500">{ posts.body }</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                            <span className="font-medium">
                                {/* {
                                    data.length > 0 ?
                                    data.map((item) => (
                                        item.id === posts.id ? 
                                        <p key={item.id}>{ data.firstName }</p>
                                        :
                                        <p>no corrispondence</p>
                                    ))
                                    :
                                    <p>Loading...</p>
                                } */}
                                {/* il map lo devi sostituire con find o filter */}
                            </span>
                        </div>
                        <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:underline">
                            Read more
                            <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;