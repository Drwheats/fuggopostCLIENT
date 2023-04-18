import {FiMinusSquare, FiPlusSquare, FiXSquare} from "react-icons/fi";
import {useState} from "react";
import Pokemon from "./Pokemon";

export default function Coach({coachName, coachNum, teamName, winLoss, mons}) {
    let showMons = [];
    console.log(mons);
    for (let i = 0; i < mons.length; i++) {
        let tempMon = mons[i].name;
        showMons[i] = tempMon;
     }



    return (
        <div className="coachCard">
            <h1>#{coachNum} - {coachName} ({teamName})</h1>
            <h5>{winLoss}</h5>
            <ul className="coachCardMonList">
                {Pokemon}
            </ul>
        </div>
    )
}