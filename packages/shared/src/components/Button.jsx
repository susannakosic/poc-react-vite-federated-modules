import React from "react";
import "./Button.css"

export default ({ caption = "Shared Button", onClick }) => {
    const dinProps = {};
    if(onClick) dinProps.onClick = onClick;
    return (<button className='shared-btn' {...dynProps}>{caption}</button>);
};
