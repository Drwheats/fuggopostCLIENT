import Pokemon from "./Pokemon";
import {useState} from "react";
export default function Coach({coachName, coachNum, teamName, winLoss, mons, leagueRank}) {
    const [bigMons, setBigMons] = useState(false);

    let tempMons = mons.sort((a, b) => b.pts - a.pts);
    let otherMons = mons.slice(3, 8);
    tempMons = tempMons.slice(0, 3);

    return (

        <div className={(coachNum + 1) % 2 === 0 ? "coachCardBlue" : "coachCardGreen"} key={coachNum}>
            <h1 > <a className="coachCardHeader" href={"/mons/coach/" + coachNum}>{coachName} ({teamName} - #{leagueRank+1})</a></h1>
            <h5 className="coachCardHeader">{winLoss[0]} Wins | {winLoss[2]} Losses (Differential of {winLoss.split("(")[1]}</h5>
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
            {/*<button className="seeMoreMons" onClick={(event) => makeBigger()}>{ImArrowRight2()}</button>*/}
        </div>
    )
}