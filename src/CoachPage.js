import {useEffect, useReducer, useState} from "react";
import Pokemon from "./Pokemon";
// import axios from "axios";


export default function CoachPage() {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [allCoaches, setAllCoaches] = useState([]);
    const [leData, setLeData] = useState(true);
    const [week, setWeek] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    let pageLoc = window.location.pathname.split('/')[3];
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
                        setThisCoach(result[pageLoc])
                        console.log(result[pageLoc])
                        setPokemons(result[pageLoc].mons)
                        setLeData(false);

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

    function sortPoints() {
        let tempMons = pokemons.sort((a, b) => b.pts - a.pts);
        setPokemons(tempMons);
        setPokemons(pokemons.sort((a, b) => b.pts - a.pts))
        forceUpdate(); // i dont care that it sbad


    }

    function sortSpeed() {
        let tempMons = pokemons.sort((a, b) => b.spe - a.spe);
        setPokemons(tempMons);
        setPokemons(pokemons.sort((a, b) => b.spe - a.spe));
        forceUpdate(); // i dont care that it sbad
    }


    return (

        <div className="coachPageCard">
            <h1>#{thisCoach.coachNum} - {thisCoach.coachName} ({thisCoach.teamName})</h1>
            <h5>{thisCoach.winLoss}</h5>
            <div className="pageMonHolder">

            {pokemons.map((mon) => {
                console.log(mon.points)
               return <Pokemon key={mon.name} mon={mon}/>
            })}
            </div>
            <span className="coachPageButtons"> <button onClick={sortSpeed} className="sortButton">Speed</button><button className="sortButton" onClick={sortPoints}>Points</button></span>
            <div className="oppZone">           <span className="oppTitle"></span>
            </div>

        </div>
    )
}