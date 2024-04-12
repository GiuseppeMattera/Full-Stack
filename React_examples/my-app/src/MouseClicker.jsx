export function MouseClicker() {
    function handleButtonClick(event) {
        console.log(event.target.name);
    }

    function handleImgClick(event) {
        console.log(event.currentTarget.src);
    }

    return (
        <>
            <button name="one" onClick={handleButtonClick}>
                <img onClick={handleImgClick} width={30} height={30} src="https://clipart-library.com/data_images/6103.png" />
                Click me!
            </button>
        </>
    )
}