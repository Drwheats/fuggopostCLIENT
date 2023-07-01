import {useEffect, useState} from "react";
import CoachMap from "./CoachMap";
//NOTE: I changed the POST to a GET, for the /coaches part of my API. So this may be where the fuck happens iif it do.


let server = "https://fuggo.lol/";
// let server = "http://localhost:4000/";

export default function Mons() {
    const [allCoaches, setAllCoaches] = useState([]);
    const [leData, setLeData] = useState(true);
    const [week, setWeek] = useState(0);

    // These 2 functions and helper IF are copied over from my coach page. I'm going to keep them in case someone tries to access the site through a coach page, but thsi is very bad.
    const getTypingAPI = async (type) => {
        if (type === null) return;

        let tempType = type.toLowerCase();
        if (window.localStorage.getItem(tempType) === null || window.localStorage.getItem(tempType) === undefined ) {
            console.log("we dont have " + tempType + ". Getting it ...")
            try {
                const response = await fetch(
                    'https://pokeapi.co/api/v2/type/' + tempType
                );

                const data = await response.json();
                localStorage.setItem(tempType, JSON.stringify(data));
                console.log("now fetching" + data);
            } catch (err) {
                console.log(err);
            }
        }
    }
    const callAPI = async () => {
        try {
            const response = await fetch(
                'https://pokeapi.co/api/v2/move/?offset=0&limit=1000'
            );

            const data = await response.json();
            localStorage.setItem('all pokemom moves :)', JSON.stringify(data));
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    if (window.localStorage.length === 0 ) {
        callAPI();
        let allTypes = ['normal', 'fighting', 'dark', 'psychic', 'ghost', 'fire', 'water', 'grass', 'electric', 'bug', 'flying', 'dragon', 'steel', 'fairy', 'rock', 'ground', 'ice', 'poison']
        for (let i = 0; i < allTypes.length; i++) {
            getTypingAPI(allTypes[i]);
        }
        console.log("calling API")
    }
    useEffect(() => {
        if (leData) {
            const scoreJSON = {
                method: 'GET',
                headers: {
                    "access-control-allow-origin": "*",
                    'Content-Type': 'application/json'
                },
            }
            fetch(server + "coaches", scoreJSON)
                .then(res => res.json())
                .then(
                    (result) => {
                        setAllCoaches(result);
                        setLeData(false);
                    }
                )
        }

    }, [leData, allCoaches])




    return (
        <div className="monPage">
            <h1>Week {week}</h1>

            <div className="coachHolder">
                <img alt="coaches" src={"coaches.png"}></img>

                <CoachMap coaches={allCoaches}/>
                <img alt="amogus imageboard mascott" src="/squamogus.png" /> <h5>Copyright ©2023 ben dot place </h5>
            </div>
            <div className="tierHolder">
                <img alt="tier list" src={"tierlist.png"}/>
                <h1>Coming soon to a smogon near you ...</h1>
                <h3>Moves : I removed any move that I thought was useless. So "reflect type" and "rock throw" will not show up in the list of moves. Click "Get moves" twice if it doesn't load the first time.</h3>
            </div>
            {/*<div className="dexHolder">*/}
            {/*    <img src={"bendex.png"}/>*/}
            {/*</div>*/}
        </div>

    )
}
