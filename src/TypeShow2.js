export default function TypeShow(type) {
        let nameClass = "smallColours"
        let tempType = type.type;
        let returnedType = type.type;
        if (tempType === null || tempType === undefined) {
            return;
        }
        try {
            tempType = tempType.toLowerCase();
        }

        catch (e) {
            console.log(e)
        }
    returnedType = returnedType.toUpperCase();
    returnedType = returnedType.slice(0, 3)
    // if (isDecoration) {returnedType = returnedType[0].toUpperCase()}

        if (tempType === "steel") {
            return <th className={nameClass} style={{background: "#B7B7CE"}}> {returnedType} </th>
        }

    if (tempType === "rock") {
        return <th className={nameClass} style={{background: "#B6A136"}}> {returnedType} </th>
    }

    else if (tempType === "water") {
            return <th className={nameClass} style={{background: "#6390F0"}}> {returnedType} </th>
        }
        else if (tempType === "electric") {
            return <th className={nameClass} style={{background: "#F7D02C"}}> {returnedType} </th>
        }
        else if (tempType === "poison") {
            return <th className={nameClass} style={{background: "#A33EA1"}}> {returnedType} </th>
        }
        else if (tempType === "fighting") {
            return <th className={nameClass} style={{background: "#C22E28"}}> {returnedType} </th>
        }
        else if (tempType === "ghost") {
            return <th className={nameClass} style={{background: "#735797"}}> {returnedType} </th>
        }
        else if (tempType === "psychic") {
            return <th className={nameClass} style={{background: "#F95587"}}> {returnedType} </th>
        }
        else if (tempType === "flying") {
            return <th className={nameClass} style={{background: "#A98FF3"}}> {returnedType} </th>
        }
        else if (tempType === "normal") {
            return <th className={nameClass} style={{background: "#A8A77A"}}> {returnedType} </th>
        }
        else if (tempType === "fire") {
            return <th className={nameClass} style={{background: "#EE8130"}}> {returnedType} </th>
        }
        else if (tempType === "grass") {
            return <th className={nameClass} style={{background: "#7AC74C"}}> {returnedType} </th>
        }
        else if (tempType === "dragon") {
            return <th className={nameClass} style={{background: "#6F35FC"}}> {returnedType} </th>
        }
        else if (tempType === "fairy") {
            return <th className={nameClass} style={{background: "#D685AD"}}> {returnedType} </th>
        }
        else if (tempType === "dark") {
            return <th className={nameClass} style={{background: "#705746"}}> {returnedType} </th>
        }
        else if (tempType === "ground") {
            return <th className={nameClass} style={{background: "#E2BF65"}}> {returnedType} </th>
        }
        else if (tempType === "bug") {
            return <th className={nameClass} style={{background: "#A6B91A"}}> {returnedType} </th>
        }
        else if (tempType === "ice") {
            return <th className={nameClass} style={{background: "#96D9D6"}}> {returnedType} </th>
        }






}