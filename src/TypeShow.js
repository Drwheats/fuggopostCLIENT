export default function TypeShow2(type) {

        let tempType = type.type;
        if (tempType === null || tempType === undefined) {
            return;
        }
        try {
            tempType = tempType.toLowerCase();
        }
        catch (e) {
            console.log(e)
        }

        if (tempType === "steel") {
            return <th className="typeColours" style={{background: "#B7B7CE"}}> {tempType} </th>
        }

    if (tempType === "rock") {
        return <th className="typeColours" style={{background: "#B6A136"}}> {tempType} </th>
    }

    else if (tempType === "water") {
            return <th className="typeColours" style={{background: "#6390F0"}}> {tempType} </th>
        }
        else if (tempType === "electric") {
            return <th className="typeColours" style={{background: "#F7D02C"}}> {tempType} </th>
        }
        else if (tempType === "poison") {
            return <th className="typeColours" style={{background: "#A33EA1"}}> {tempType} </th>
        }
        else if (tempType === "fighting") {
            return <th className="typeColours" style={{background: "#C22E28"}}> {tempType} </th>
        }
        else if (tempType === "ghost") {
            return <th className="typeColours" style={{background: "#735797"}}> {tempType} </th>
        }
        else if (tempType === "psychic") {
            return <th className="typeColours" style={{background: "#F95587"}}> {tempType} </th>
        }
        else if (tempType === "flying") {
            return <th className="typeColours" style={{background: "#A98FF3"}}> {tempType} </th>
        }
        else if (tempType === "normal") {
            return <th className="typeColours" style={{background: "#A8A77A"}}> {tempType} </th>
        }
        else if (tempType === "fire") {
            return <th className="typeColours" style={{background: "#EE8130"}}> {tempType} </th>
        }
        else if (tempType === "grass") {
            return <th className="typeColours" style={{background: "#7AC74C"}}> {tempType} </th>
        }
        else if (tempType === "dragon") {
            return <th className="typeColours" style={{background: "#6F35FC"}}> {tempType} </th>
        }
        else if (tempType === "fairy") {
            return <th className="typeColours" style={{background: "#D685AD"}}> {tempType} </th>
        }
        else if (tempType === "dark") {
            return <th className="typeColours" style={{background: "#705746"}}> {tempType} </th>
        }
        else if (tempType === "ground") {
            return <th className="typeColours" style={{background: "#E2BF65"}}> {tempType} </th>
        }
        else if (tempType === "bug") {
            return <th className="typeColours" style={{background: "#A6B91A"}}> {tempType} </th>
        }
        else if (tempType === "ice") {
            return <th className="typeColours" style={{background: "#96D9D6"}}> {tempType} </th>
        }






}