import React from "react";
import "./Button.css"

export default ({ caption = "Shared Button", onClick }) => <button className='shared-btn' onClick={ onClick ? onClick : () => true}>{caption}</button>;
