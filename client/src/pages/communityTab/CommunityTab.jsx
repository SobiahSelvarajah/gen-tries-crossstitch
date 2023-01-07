import React from "react";
import CommunityForum from "../../components/communityForum/CommunityForum";
import CommunityTabHero from "../../components/communityTabHero/CommunityTabHero";
import "./CommunityTab.scss";

export default function CommunityTab() {
    return(
        <>
            <CommunityTabHero />
            <CommunityForum />
        </>
    )
}