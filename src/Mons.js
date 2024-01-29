import {useEffect, useState} from "react";
import CoachMap from "./CoachMap";
//NOTE: I changed the POST to a GET, for the /coaches part of my API. So this may be where the fuck happens iif it do.


let server = "https://api.fuggo.lol/"
// let server = "http://localhost:4000/";

export default function Mons() {
    const [allCoaches, setAllCoaches] = useState([]);
    const [leData, setLeData] = useState(true);
    const [week, setWeek] = useState(7);

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
            <h1> OUBL - Week {week}</h1>
            <div className="monPageHeader">
                <p>Welcome to ben dot place slash mons!</p>
                <p>Click on a coaches' name for further analysis. You can compare teams, view their speed tiers/weakness chart, and view all of their pokemons' moves.</p>
            </div>

            <div className="coachHolder">
                <CoachMap coaches={allCoaches}/>
                <img alt="amogus imageboard mascott" src="/squamogus.png" /> <h5>Copyright ©2023 ben dot place </h5>
            </div>

        </div>

    )
}
