import React from "react";
import searchButton from '../../assets/icons/magnifying-glass-solid.svg';

export default function SearchButton() {
    return(
        <img 
            className="searchButton__image"
            src={searchButton}
            alt='searchButton'
        />
    )
}