import { useEffect } from "react";
import { useState } from "react";
// import { Constants } from "./constants/index"

const CustomTable = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/comments")
                const result = await response.json()

                if (response.ok) {
                    setData(result)
                } else {
                    throw new Error("Data not found")
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {
                            data.length > 0 && Object.keys(data[0]).map((key, index) => (
                                <th key={`th-${index}`}>{key}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 ?
                            data.map((item, index) => (
                                <tr key={`tr-${index}`}>
                                    {
                                        Object.values(item).map((value) => (
                                            <td key={`tr-${index}-td-${value}`}>{value}</td>
                                        ))
                                    }
                                </tr>
                            ))
                            :
                            <tr>
                                <td>Empty Data</td>
                            </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default CustomTable;