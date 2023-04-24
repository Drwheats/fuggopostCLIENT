import {useEffect, useReducer, useState} from "react";
import Pokemon from "./Pokemon";
import {FiPlusSquare} from "react-icons/fi";
import axios from "axios";


export default function CoachPage() {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [data, setData] = useState(true)

    const [allCoaches, setAllCoaches] = useState([]);
    const [leData, setLeData] = useState(true);
    const [week, setWeek] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [oppPokemons, setOppPokemons] = useState([]);
    // const [activeMon, setActiveMon] = useState({name: "lol", type: "", type2: "", atk: 0, def: 0, spe: 0, hp: 0, spa: 0, spd: 0});
    const [activeMons, setActiveMons] = useState([]);

    const [oppMoves, setOppMoves] = useState([]);
    const [heroMoves, setHeroMoves] = useState([]);

    const [matchups, setMatchups] = useState([]);
    let pageLoc = window.location.pathname.split('/')[3];
    const [thisCoach, setThisCoach] = useState({
        coachName: "",
        coachNum: 0,
        teamName: "",
        winLoss: 0,
        mons: [],

    })
    const [thatCoach, setThatCoach] = useState({
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
                        setPokemons(result[pageLoc].mons)
                        setMatchups(result[pageLoc].matchups)
                        setLeData(false);

                    }
                )
        }

    }, [leData, allCoaches])

    function setHeroActive(mon) {
        document.getElementById("actives").style.display = "block";

        for (let i = 0; i < pokemons.length; i++) {
            pokemons[i].active = false;
        }
        mon.active = true;
        setActiveMons(mon)
        console.log(" now setting " + mon.name + " as active.")
    }
    function setVillainActive(mon) {
        document.getElementById("actives").style.display = "block";

        for (let i = 0; i < oppPokemons.length; i++) {
            oppPokemons[i].active = false;
        }
        mon.active = true;
        setActiveMons(mon)
        console.log(" now setting " + mon.name + " as active.")
    }

    function sortPoints() {
        let tempMons = pokemons.sort((a, b) => b.pts - a.pts);
        setPokemons(tempMons);
        setPokemons(pokemons.sort((a, b) => b.pts - a.pts))
        setOppPokemons(oppPokemons.sort((a, b) => b.pts - a.pts))

        forceUpdate(); // i dont care that it sbad


    }

    function sortSpeed() {
        let tempMons = pokemons.sort((a, b) => b.spe - a.spe);
        setPokemons(tempMons);
        setPokemons(pokemons.sort((a, b) => b.spe - a.spe));
        setOppPokemons(oppPokemons.sort((a, b) => b.spe - a.spe));

        forceUpdate(); // i dont care that it sbad
    }
    function sortAttack() {
        let tempMons = pokemons.sort((a, b) => b.atk - a.atk);
        setPokemons(tempMons);
        setPokemons(pokemons.sort((a, b) => b.atk - a.atk));
        setOppPokemons(oppPokemons.sort((a, b) => b.atk - a.atk));

        forceUpdate(); // i dont care that it sbad
    }
    function sortDefense() {
        let tempMons = pokemons.sort((a, b) => b.def - a.def);
        setPokemons(tempMons);
        setPokemons(pokemons.sort((a, b) => b.def - a.def));
        setOppPokemons(oppPokemons.sort((a, b) => b.def - a.def));

        forceUpdate(); // i dont care that it sbad
    }
    function sortSpecialAttack() {
        let tempMons = pokemons.sort((a, b) => b.spa - a.spa);
        setPokemons(tempMons);
        setPokemons(pokemons.sort((a, b) => b.spa - a.spa));
        setOppPokemons(oppPokemons.sort((a, b) => b.spa - a.spa));

        forceUpdate(); // i dont care that it sbad
    }
    function sortSpecialDefense() {
        let tempMons = pokemons.sort((a, b) => b.spd - a.spd);
        setPokemons(tempMons);
        setPokemons(pokemons.sort((a, b) => b.spd - a.spd));
        setOppPokemons(oppPokemons.sort((a, b) => b.spd - a.spd));

        forceUpdate(); // i dont care that it sbad
    }
    function sortHP() {
        let tempMons = pokemons.sort((a, b) => b.hp - a.hp);
        setPokemons(tempMons);
        setPokemons(pokemons.sort((a, b) => b.hp - a.hp));
        setOppPokemons(oppPokemons.sort((a, b) => b.hp - a.hp));

        forceUpdate(); // i dont care that it sbad
    }

    function showAbilities() {
    }

    const getOpp = (value) => {
        for (let i = 0; i < allCoaches.length; i++) {
            if (allCoaches[i].teamName === value) {
                setOppPokemons(allCoaches[i].mons);

                setThatCoach(allCoaches[i])
                document.getElementById("coachPageVillainHeader").style.display = "block";
                console.log("showing")
                break;
            }
        }
    };

    const getMove = (pokemon) => {
        let tempname = pokemon.name.toLowerCase();
        tempname = tempname.replace(' ', '-')
        tempname = tempname.replace('rapid-strike', '')
        tempname = tempname.replace('(all forms)', '')
        tempname = tempname.replace('therian', '')
        tempname = tempname.replace('10%', '')
        tempname = tempname.replace('rotomheat', 'rotom-heat')
        tempname = tempname.replace('rotomwash', 'rotom-wash')

        console.log("getting move:")
            axios.get('https://pokeapi.co/api/v2/pokemon/' + tempname, {headers: "mo"})
                .then(response => {
                    let tempList = [];
                    const resp1 = response.data.moves;
                    for (let i = 0; i < resp1.length; i++) {
                        tempList[i] = resp1[i].move;
                    }
                    
                    for (let i = 0; i < pokemons.length; i++) {
                        console.log(pokemon.name + " VS " + pokemons[i].name)
                        if (pokemons[i].name === pokemon.name) {
                            setHeroMoves(tempList);
                            forceUpdate();
                            return;
                        }
                    }
                    for (let i = 0; i < oppPokemons.length; i++) {
                        console.log(pokemon.name + " VS " + oppPokemons[i].name)
                        if (oppPokemons[i].name === pokemon.name) {
                            setOppMoves(tempList);
                            forceUpdate();
                            return;
                        }
                    }



                })



    }

    return (

        <div className="coachPage">
            <span  className="coachPageHeroHeader">

            <h1 className="coachPageHeroName">{thisCoach.coachName} ({thisCoach.teamName})</h1>
                                <div className="dropdown">
  <button className="dropbtn">SORT</button>
  <div className="dropdown-content">
        <button onClick={sortSpeed} className="sortButton">Speed</button>
        <button onClick={sortAttack} className="sortButton">Attack</button>
        <button onClick={sortSpecialAttack} className="sortButton">Special Attack</button>
        <button onClick={sortDefense} className="sortButton">Defense</button>
        <button onClick={sortSpecialDefense} className="sortButton">Special Defense</button>
        <button onClick={sortHP} className="sortButton">Hit Points</button>
        <button className="sortButton" onClick={sortPoints}>Points</button>
  </div>
</div>

                                <div className="dropdown">
                <button className="dropbtn">nnatchups</button>
                <div className="dropdown-content">NATCHUPS:
                    {matchups.map((matchup, index) => {
                        return <button onClick={(e) => getOpp(e.currentTarget.id)} className="sortButton" id={matchup.Opponent}>Week {index + 1} : {matchup.Opponent}</button>

                    })}

                </div>
                                    </div>
            <h3>Score: {thisCoach.winLoss}</h3>

            </span>

                <div className="heroMonHolder">
            {pokemons.map((mon) => {
                if (mon.active === true) {
                    return <span className="monColumnHolderGlowing">

               <Pokemon key={mon.name} mon={mon}/>
                   <span><button className="monButton" >more info</button><button className="monButton" onClick={(event) => setHeroActive(mon)}>Active</button></span>
</span>
                }
               else return <span className="monColumnHolder">

               <Pokemon key={mon.name} mon={mon}/>
                   <span><button className="monButton" >more info</button><button className="monButton" onClick={(event) => setHeroActive(mon)}>Active</button></span>
</span>
            })}
                </div>


<div>
    <span  className="coachPageVillainHeader" id="coachPageVillainHeader"><h1>VS: {thatCoach.coachName} ({thatCoach.teamName})</h1><h5>{thatCoach.winLoss}</h5></span>
</div>

            <div className="heroMonHolder">
                {oppPokemons.map((mon) => {
                    if (mon.active === true) {
                        return <span className="monColumnHolderGlowingV">
               <Pokemon key={mon.name} mon={mon}/>
                   <span><button className="monButton" ></button><button className="monButton" onClick={(event) => setVillainActive(mon)}>Active</button></span>
</span>
                    }
                    else return <span className="monColumnHolder">
               <Pokemon key={mon.name} mon={mon}/>
                   <span><button className="monButton" ></button><button className="monButton" onClick={(event) => setVillainActive(mon)}>Active</button></span>
</span>
                })}
            </div>

            <div className="actives" id="actives">

            <div className="heroActiveZone">{pokemons.map((mon) => {
                if (mon.active === true) {
                    return <span className="monColumnHolderGlowing"><Pokemon key={mon.name} mon={mon} />
                                            <button className="monButton" onClick={(event) => getMove(mon)}>Get Moves</button>
                <div className="heroMoves">
                    {heroMoves.map((move) => {
                        return <a className="moveList" href={move.url}>{move.name}, </a>
                    })}
                </div>
</span>

                }
            })}</div>
            <div className="villainActiveZone">{oppPokemons.map((mon) => {
                if (mon.active === true) {
                    return <span className="monColumnHolderGlowingV"><Pokemon key={mon.name} mon={mon} />
                        <button className="monButton" onClick={(event) => getMove(mon)}>Get Moves</button>
                <div className="oppMoves">
                    {oppMoves.map((move) => {
                        return <a className="moveList" href={move.url}>{move.name}, </a>
                    })}
                </div>
                    </span>
                }

            })}</div>


            </div>
            <span className="coachPageButtons">
                  <button className="dropbtn" onClick={showAbilities}>SHOW ABILITIES</button>

                </span>


        </div>
    )
}