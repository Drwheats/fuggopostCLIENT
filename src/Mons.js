import {useEffect, useState, useRef} from "react";
import PostMap from "./PostMap";
import CoachMap from "./CoachMap";

export default function Mons() {
    const [allCoaches, setAllCoaches] = useState([]);
    const [leData, setLeData] = useState(true);
    const [permanentCoaches, setPermanentCoaches] = useState([]);


    useEffect(() => {
        if (leData) {
            const scoreJSON = {
                method: 'post',
                headers: {
                    "access-control-allow-origin": "*",
                    'Content-Type': 'application/json'
                },
            }
            fetch("http://localhost:4000/coaches", scoreJSON)
                .then(res => res.json())
                .then(
                    (result) => {
                        setAllCoaches(result);
                        setLeData(false);
                        setPermanentCoaches(result);

                    }
                )
        }

    }, [leData, allCoaches])



    return (
            <div className="coachHolder">
                <h1>COACHCES:</h1>
                <CoachMap coaches={allCoaches}/>
            </div>
        )
}
