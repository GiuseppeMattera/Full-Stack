import UseGithubUser from "../hook/useGitHubUser";

const GitHubUser = ({ username }) => {

    const { data, error } = UseGithubUser(username);

    return (
        <>
            <div className="w-[100px] h-[100px]">
                {data && (
                    <>
                        <img src={data.avatar_url} />
                        <div>{data.login}</div>
                        <div>{data.name}</div>
                    </>
                )}
                {error && <div>{error.message}</div>}
            </div>
        </>
    )
}
export default GitHubUser;