const TextCard = ({data}) => {
    return (
        <>
            <div>
                <p>
                    {
                        data.lines.join("[end-line]")
                    }
                </p>
            </div>
        </>
    )
}

export default TextCard;