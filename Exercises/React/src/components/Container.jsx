import { useState } from "react";

const Container = ({ title, children }) => {
    const [collapsed, setCollapsed] = useState(false)

    const handleToogleCollapse = () => {
        setCollapsed((item) => !item)
    }

    return (
        <>
            <div className="border border-red-600 bg-white w-fit" >
                <h2 className="cursor-pointer" onClick={handleToogleCollapse}>{ title }</h2>
                { collapsed && <div>{ children }</div> }
            </div>
        </>
    )

}

export default Container;

// Create a Container component that renders its children within a div tag.
// Have the div tag use a white background and a red border.
// Add a title prop that will contain the title value to be displayed before the children.
// Make the container collapsible, so that when the title is clicked the children are either hidden of shown again.
// Use the useState hook to keep track of the collapsed state.

