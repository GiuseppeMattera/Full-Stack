import useSWR from 'swr'

const fetcher = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error.message);
    }
}

const useGithubUserSWR = (username) => {
    // if (username === null) {
    //     return {
    //         user: null,
    //         error: null,
    //         loading: false,
    //     }
    // }
    
    // oppure

    // if (!url) {
    //   return null;
    // }

    // probabilmente questa condizione non serve se metto l'operatore ternario a riga 30


    const { data, error, mutate } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

    const refetch = () => {
        mutate();
      };

    return {
        user: data,
        error,
        loading: !data && !error,
        refetch
    }
}

export default useGithubUserSWR;