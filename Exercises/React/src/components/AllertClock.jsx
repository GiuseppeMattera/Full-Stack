const AllertClock = ({ label, onClick }) => {
    return (
        <>
            <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 
            hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center 
            mb-2 w-[250px]" onClick={ onClick }>
                { label }
            </button>
        </>
    )
}

export default AllertClock;