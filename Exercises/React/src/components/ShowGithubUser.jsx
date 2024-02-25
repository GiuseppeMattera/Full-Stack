import { useParams } from "react-router-dom";
import GitHubUser from "./GithubUser";

const ShowGithubUser = () => {
    const { username } = useParams();
    return (
        <>
            <GitHubUser username={username} />
        </>
    )
}

export default ShowGithubUser;