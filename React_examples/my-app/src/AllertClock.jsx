export function AllertClock({ label, onClick }) {
    return (
        <>
            <button onClick={ onClick }>{ label }</button>
        </>
    )
}

{/* quando richiameremo questo componente nel componente genitore (App) i valori dei props
    saranno onClick={HandleShowTime} (il componente HandleShowTime deve essere a sua volta
    importato e label={"Click me for the Current Time"} */}

{/* il componente HandleShowTime:

    export function HandleShowTime() {
    const date = new Date();

    alert(`Current Time: ${date.toLocaleTimeString()}`);
    }
    
     */}
