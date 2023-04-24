import Pokemon from "./Pokemon";
import {FiPlusCircle, FiPlusSquare} from "react-icons/fi";
import {forceReflow} from "react-transition-group/cjs/utils/reflow";
import {useReducer, useState} from "react";
// import axios from "axios";

export default function Coach({coachName, coachNum, teamName, winLoss, mons}) {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [bigMons, setBigMons] = useState(false);

    // this state variable and helper function below are used to make pokemon API calls. I reuse this and mostly use it to put shit into arrays.
    //const [data, setData] = useState(true)
    // if (data) {
    //     axios.get('https://pokeapi.co/api/v2/move/sticky-web', {headers: "mo"})
    //         .then(response => {
    //             const resp1 = response.data.learned_by_pokemon;
    //             setData(false);
    //             console.log("_____________")
    //             for (let i = 0; i < resp1.length; i++) {
    //                 console.log("'" + resp1[i].name + "', ");
    //
    //             }
    //             console.log("_____________")
    //
    //         })
    // }
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
                })}
            </div>
            <button className="seeMoreMons" onClick={(event) => makeBigger()}>></button>
        </div>
    )
}