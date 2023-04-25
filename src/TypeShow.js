export default function TypeShow2(type) {

        let tempType = type.type;
    console.log(tempType)
        if (tempType === null || tempType === undefined) {
            return;
        }

        tempType = tempType.toLowerCase();

        if (tempType === "steel") {
            return <th className="typeColours" style={{background: "lightgray"}}> {tempType} </th>
        }

    if (tempType === "rock") {
        return <th className="typeColours" style={{background: "rosybrown"}}> {tempType} </th>
    }

    else if (tempType === "water") {
            return <th className="typeColours" style={{background: "deepskyblue"}}> {tempType} </th>
        }
        else if (tempType === "electric") {
            return <th className="typeColours" style={{background: "yellow"}}> {tempType} </th>
        }
        else if (tempType === "poison") {
            return <th className="typeColours" style={{background: "mediumpurple"}}> {tempType} </th>
        }
        else if (tempType === "fighting") {
            return <th className="typeColours" style={{background: "maroon"}}> {tempType} </th>
        }
        else if (tempType === "ghost") {
            return <th className="typeColours" style={{background: "rebeccapurple"}}> {tempType} </th>
        }
        else if (tempType === "psychic") {
            return <th className="typeColours" style={{background: "lightpink"}}> {tempType} </th>
        }
        else if (tempType === "flying") {
            return <th className="typeColours" style={{background: "lightblue"}}> {tempType} </th>
        }
        else if (tempType === "normal") {
            return <th className="typeColours" style={{background: "#FFF"}}> {tempType} </th>
        }
        else if (tempType === "fire") {
            return <th className="typeColours" style={{background: "red"}}> {tempType} </th>
        }
        else if (tempType === "grass") {
            return <th className="typeColours" style={{background: "green"}}> {tempType} </th>
        }
        else if (tempType === "dragon") {
            return <th className="typeColours" style={{background: "cadetblue"}}> {tempType} </th>
        }
        else if (tempType === "fairy") {
            return <th className="typeColours" style={{background: "hotpink"}}> {tempType} </th>
        }
        else if (tempType === "dark") {
            return <th className="typeColours" style={{background: "darkgray"}}> {tempType} </th>
        }
        else if (tempType === "ground") {
            return <th className="typeColours" style={{background: "sandybrown"}}> {tempType} </th>
        }
        else if (tempType === "bug") {
            return <th className="typeColours" style={{background: "limegreen"}}> {tempType} </th>
        }
        else if (tempType === "ice") {
            return <th className="typeColours" style={{background: "whitesmoke"}}> {tempType} </th>
        }






}