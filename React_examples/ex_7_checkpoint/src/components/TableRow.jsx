const TableRow = ({ data }) => {
    return (
        <>
            <tr>
                <td>{data.id}</td>
                <td>{data.body}</td>
                <td>{data.postId}</td>
                <td>{data.user.username}</td>
            </tr>
        </>
    )
}

export default TableRow;