import axios from "axios";
import { useEffect, useState } from "react";

const UseGithubUser = (username) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        if (error) {
            setError(false)
        }

        try {
            const options = {
                url: `https://api.github.com/users/${username}`,
                method: "GET"
            }

            const response = await axios(options);

            setData(response.data);
        } catch (error) {
            setError(error);
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error }
}

export default UseGithubUser;