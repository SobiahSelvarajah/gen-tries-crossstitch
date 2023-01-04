import React from "react";
import deleteIcon from "../../assets/icons/delete.svg"; 
import "./DeletePostIcon.scss";

export default function DeletePostIcon() {
    return(
        <img 
            className="deletePostIcon__image"
            src={deleteIcon}
            alt="deleteIcon"
        /> 
    )
}