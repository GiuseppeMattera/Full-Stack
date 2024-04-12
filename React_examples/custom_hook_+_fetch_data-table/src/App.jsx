import { useAxios } from "./hook/useAxios"
import { Constants } from "./constants";
import ErrorAlert from "./components/ErrorAlert";
import Card from "./components/Card";

const App = () => {
  const { data: quotes, error: quotesError, refetch: refetchQuotes, setData: setQuotes } = useAxios(`${Constants.API_URL}/quotes`, { selector: "quotes" });

  const handleDelete = (quoteId) => {
    setQuotes((quotes) => {
      return quotes.filter((quote) => quote.id !== quoteId);
    })
  }

  const handleReload = () => {
    refetchQuotes();
  }

  if (quotesError) {
    return (
      <>
        <ErrorAlert>
          {quotesError}
        </ErrorAlert>
      </>
    )
  }

  return (
    <>
      <div>
        <button onClick={handleReload}>Reload data</button>
      </div>
      <div className="flex justify-center">
        <div className="w-full flex flex-wrap gap-8 p-12">
          {
            quotes && quotes.length > 0 && quotes.map((quote) => (
              <Card key={quote.id} data={quote} onDelete={handleDelete} />
            ))
          }
        </div>
      </div>
    </>
  )
};

export default App;