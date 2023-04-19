import {FiMinusSquare, FiPlusSquare, FiXSquare} from "react-icons/fi";
import {useState} from "react";
import Pokemon from "./Pokemon";
import axios from "axios";



export default function Coach({coachName, coachNum, teamName, winLoss, mons}) {
    const [data, setData] = useState(true)
    if (data) {
        axios.get('https://pokeapi.co/api/v2/move/sticky-web', {headers: "mo"})
            .then(response => {
                const resp1 = response.data.learned_by_pokemon;
                setData(false);
                console.log("_____________")
                for (let i = 0; i < resp1.length; i++) {
                    console.log("'" + resp1[i].name + "', ");

                }
                console.log("_____________")

            })
    }


    return (
        <div className="coachCard">
            <h1>#{coachNum} - {coachName} ({teamName})</h1>
            <h5>{winLoss}</h5>
            {mons.map((mon) => {
               return <Pokemon mon={mon}/>
            })}
        </div>
    )
}