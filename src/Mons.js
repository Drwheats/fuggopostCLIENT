import {useEffect, useState} from "react";
import PokeRules from "./PokeRules";
import CoachMap from "./CoachMap";
import PokeDex from "./PokeDex";
let server = "https://api.fuggo.lol/"
// let server = "http://localhost:4000/";


export default function Mons() {
    const [expandedIcon, setExpandedIcon] = useState("+")
    const [expanded, setExpanded] = useState(false);
    const [mainElementShowing, setMainElementShowing] = useState("Coaches");
    const [allCoaches, setAllCoaches] = useState([]);
    const [leData, setLeData] = useState(true);
    const [coachVisible, setCoachVisible] = useState(true);
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


    function expandEverything() {
        if (!expanded) {
            setExpanded(true);
            setExpandedIcon("-")
        }
        else {
            setExpanded(false);
            setExpandedIcon("+")
        }
    }

    function callFuggoLolCoachesAPI() {
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
                    let tempCoaches = result;
                    setAllCoaches(tempCoaches);
                    setLeData(false);
                }
            )
    }

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
            callFuggoLolCoachesAPI();
        }

    }, [leData, allCoaches])


    return (
        <div className="monPage">
            <h1> OUBL - Week 5</h1>
            <div className="monPageHeader">
                <p>Welcome to the Official Page of the OUBL!</p>
            </div>

            <div className="coachHolder">
                <div className="monPageCoachHeader">
                    <button className="monPageButton" onClick={() => {
                        if (mainElementShowing === "Coaches") {
                            setMainElementShowing("Rules");
                            setCoachVisible(false);
                        }
                        if (mainElementShowing === "Rules") {
                            setCoachVisible(false);
                            setMainElementShowing("Pokedex");
                        }
                        if (mainElementShowing === "Pokedex") {
                            setCoachVisible(true);
                            setMainElementShowing("Coaches")
                        }
                    }}>{mainElementShowing} </button>
                    <button onClick={expandEverything}>{expandedIcon}</button>
                </div>
                {mainElementShowing === "Pokedex" ? <PokeDex expanded={expanded}/> : mainElementShowing === "Rules" ?
                    <PokeRules expanded={expanded}/> : !leData ?
                        <CoachMap visible={coachVisible} coaches={allCoaches} transitionState={true}
                                  expanded={expanded}/> : leData ?
                            <img className="circularLogo" alt="amogus imageboard mascott" src="/amoguscircle.png"/> :
                            <div/>
                }
                {
                }

            </div>

            <h5 className="copyrightMons">Copyright
                ©2024 ben dot place </h5>
        </div>

    )
}
