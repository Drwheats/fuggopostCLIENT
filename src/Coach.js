import {useState} from "react";
import Pokemon from "./Pokemon";
// import axios from "axios";



export default function Coach({coachName, coachNum, teamName, winLoss, mons}) {
           // this state variable and helper function below are used to make pokemon API calls. I reuse this and mostly use it to put shit into arrays.
    // const [data, setData] = useState(true)
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

    // wrap this in a function to sort by SPEED or by POINTS or ETC.
    mons = mons.sort((a, b) => b.spe - a.spe);

    return (
        <div className="coachCard" key={coachNum}>
            <h1> <a href={"/mons/coach/" + coachNum}>#{coachNum} - {coachName} ({teamName})</a></h1>
            <h5>{winLoss}</h5>
            {mons.map((mon) => {
               return <Pokemon mon={mon}/>
            })}
        </div>
    )
}