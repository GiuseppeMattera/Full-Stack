import { useState } from "react";

const Container = ({ title, children }) => {
    const [collapsed, setCollapsed] = useState(false)

    const handleToogleCollapse = () => {
        setCollapsed((item) => !item)
    }

    return (
        <>
            <div className="container" >
                <h2 onClick={handleToogleCollapse}>{ title }</h2>
                { collapsed && <div>{ children }</div> }
            </div>
        </>
    )

}

export default Container;