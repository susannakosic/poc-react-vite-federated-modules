import React from "react";
import "./Button.css"

export default ({ caption = "Shared Button", onClick }) => {
    const dynProps = {};
    if(onClick) dynProps.onClick = onClick;
    return (<button className='shared-btn' {...dynProps}>{caption}</button>);
};
