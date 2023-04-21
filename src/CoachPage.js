import {useEffect, useState} from "react";
import Pokemon from "./Pokemon";
// import axios from "axios";



export default function CoachPage() {
    const [allCoaches, setAllCoaches] = useState([]);
    const [leData, setLeData] = useState(true);
    const [permanentCoaches, setPermanentCoaches] = useState([]);
    const [week, setWeek] = useState(0);
    let pageLoc = window.location.pathname.split('/')[3];
    console.log(pageLoc)
    const [thisCoach, setThisCoach] = useState({
        coachName: "",
        coachNum: 0,
        teamName: "",
        winLoss: 0,
        mons: [],

    })
    useEffect(() => {
        if (leData) {
            const scoreJSON = {
                method: 'post',
                headers: {
                    "access-control-allow-origin": "*",
                    'Content-Type': 'application/json'
                },
            }
            fetch("https://fuggo.lol:4000/coaches", scoreJSON)
                .then(res => res.json())
                .then(
                    (result) => {
                        setAllCoaches(result);
                        setLeData(false);
                        setThisCoach(result[pageLoc])
                        console.log(result[pageLoc])
                    }
                )
        }

    }, [leData, allCoaches])
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
    // mons = mons.sort((a, b) => b.spe - a.spe);

    return (

        <div className="coachPageCard">
            <h1>#{thisCoach.coachNum} - {thisCoach.coachName} ({thisCoach.teamName})</h1>
            <h5>{thisCoach.winLoss}</h5>
            <div className="pageMonHolder">

            {thisCoach.mons.map((mon) => {
               return <Pokemon mon={mon}/>
            })}
            </div>

        </div>
    )
}