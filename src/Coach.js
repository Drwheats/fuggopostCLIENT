import Pokemon from "./Pokemon";
import {useState} from "react";

export default function Coach({coachName, coachNum, teamName, winLoss, mons}) {
    const [bigMons, setBigMons] = useState(false);
    let tempMons = mons.sort((a, b) => b.pts - a.pts);
    let otherMons = mons.slice(3, 8);
    tempMons = tempMons.slice(0, 3);

    function makeBigger() {
        if (bigMons === false) {
            setBigMons(true);
        }
        else setBigMons(false);
    }

    return (
        <div className="coachCard" key={coachNum}>
            <h1 > <a className="coachCardHeader" href={"/mons/coach/" + coachNum}>#{coachNum +1} - {coachName} ({teamName})</a></h1>
            <h5>{winLoss}</h5>
            <div className="coachCardMonList">
            {tempMons.map((mon) => {
               return <Pokemon mon={mon}/>
            })}
                {otherMons.map((mon) => {
                    if (bigMons)
                    return <Pokemon className="hiddenMons" mon={mon}/>
                    else return null;
                })}

            </div>
            <button className="seeMoreMons" onClick={(event) => makeBigger()}>></button>
        </div>
    )
}