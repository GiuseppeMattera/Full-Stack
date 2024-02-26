import { useEffect, useState } from "react";

const GithubUsersList = () => {
    const [inputData, setInputData] = useState("")
    const [actualUser, setActualUser] = useState(null);
    const [data, setData] = useState([]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    const handlePushElement = () => {
        setActualUser(inputData);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${inputData}`);
                const result = await response.json();

                if (response.ok) {
                    setData([...data, result])
                } else {
                    throw new Error("Data not found");
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, [actualUser])

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input onInput={() => setInputData(event.target.value)} className="border-solid border-2 border-black" type="text" />
                <button onClick={() => handlePushElement()} className="border-solid border-2 border-black" type="submit">Enter</button>
            </form>
            <ul className="flex flex-wrap gap-12">
                {
                    data.length > 0 ?
                        data.map((item, index) => (
                            <li key={index}>
                                <img className="h-[50px] w-[50px]" src={item.avatar_url} />
                                <div>{item.login}</div>
                                <div>{item.name}</div>
                            </li>
                        ))
                        :
                        <p>Empty Data</p>
                }
            </ul>
        </>
    )
}

export default GithubUsersList;