import { useEffect, useState } from "react";

const CustomTable = ({ url, isLoaded }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (isLoaded && url !== "") {

            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const result = await response.json();

                    if (response.ok) {
                        setData(result);
                    } else {
                        throw new Error("data non found")
                    }
                    
                } catch (error) {
                    console.log(error);
                }
            }
            fetchData();
        } else {
            setData([])
        }
    }, [isLoaded])

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