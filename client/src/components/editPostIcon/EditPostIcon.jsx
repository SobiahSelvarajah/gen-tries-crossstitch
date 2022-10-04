import React from "react";
import editIcon from '../../assets/icons/edit.svg';
import './EditPostIcon.scss';

export default function EditPost() {
    return(
        <img 
            className='editPostIcon__image'
            src={editIcon}
            alt='editIcon'
        />
    )
}