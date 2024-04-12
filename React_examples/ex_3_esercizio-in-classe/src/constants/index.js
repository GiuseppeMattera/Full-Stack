const Constants = ({ rows }) => ({
    API: `https://poetrydb.org/author,linecount/Shakespeare;${rows}/lines`
})

export default Constants;