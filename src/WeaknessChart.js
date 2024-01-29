export default function WeaknessChart(type1) {
    let tempType2 = "";
    let tempType = "";
    tempType = type1.type1.toLowerCase();
    try {
        tempType2 = type1.type2.toLowerCase();
    }
    catch (e) {}

    if (tempType === null || tempType === undefined) {
        console.log("type is le null!")
            return;
        }
    if (window.localStorage.getItem(tempType) === null || window.localStorage.getItem(tempType) === undefined) {
        console.log("cant find the data, exiting. This is a critical error and your code is broken.");
        return;
        }

        let tempWeak = {normal: 1, fighting: 1, dark: 1, psychic: 1, ghost: 1, fire: 1, water: 1, grass: 1, electric: 1, bug: 1, flying: 1, dragon: 1, steel: 1, fairy: 1, rock: 1, ground: 1, ice: 1, poison: 1}
        let type1toCheck = JSON.parse(localStorage.getItem(tempType));
        type1toCheck = type1toCheck.damage_relations;
        let dmgDouble = type1toCheck.double_damage_from;
        let dmgHalf = type1toCheck.half_damage_from;
        let dmgNone = type1toCheck.no_damage_from;
        for (let i = 0; i < dmgDouble.length; i++) {
            let tempName = dmgDouble[i].name;
            let tempValue = tempWeak[tempName];
            tempValue = tempValue * 2;
            tempWeak[tempName] = tempValue;
        }
        for (let i = 0; i < dmgHalf.length; i++) {
            let tempName = dmgHalf[i].name;
            let tempValue = tempWeak[tempName];
            tempValue = tempValue * 0.5;
            tempWeak[tempName] = tempValue;
        }
        for (let i = 0; i < dmgNone.length; i++) {
            let tempName = dmgNone[i].name;
            let tempValue = tempWeak[tempName];
            tempValue = 0;
            tempWeak[tempName] = tempValue;
        }
        if (tempType2 === null || tempType2 === "") {
            // setMonWeak(tempWeak);
            // weaknesses = {normal: 1, fighting: 1, dark: 1, psychic: 1, ghost: 1, fire: 1, water: 1, grass: 1, electric: 1, bug: 1, flying: 1, dragon: 1, steel: 1, fairy: 1, rock: 1, ground: 1, ice: 1, poison: 1}
            return (
                <div className="typeChartMonHolder">
                    <span className="typeChartName">{type1.name}</span><span className="typeChartCell">{tempWeak.normal}</span><span className="typeChartCell">{tempWeak.fighting}</span><span className="typeChartCell">{tempWeak.water}</span><span className="typeChartCell">{tempWeak.fire}</span><span className="typeChartCell">{tempWeak.grass}</span><span className="typeChartCell">{tempWeak.electric}</span><span className="typeChartCell">{tempWeak.dragon}</span><span className="typeChartCell">{tempWeak.fairy}</span><span className="typeChartCell">{tempWeak.steel}</span><span className="typeChartCell">{tempWeak.rock}</span><span className="typeChartCell">{tempWeak.ice}</span><span className="typeChartCell">{tempWeak.ground}</span><span className="typeChartCell">{tempWeak.bug}</span><span className="typeChartCell">{tempWeak.poison}</span><span className="typeChartCell">{tempWeak.psychic}</span><span className="typeChartCell">{tempWeak.dark}</span><span className="typeChartCell">{tempWeak.ghost}</span><span className="typeChartCell">{tempWeak.flying}</span>
                </div>

            )
        }
        try {
            type1toCheck = JSON.parse(localStorage.getItem(tempType2.toLowerCase()));
        }
        catch (e) {
            console.log("firstl oad always fials")
        }
    type1toCheck = JSON.parse(localStorage.getItem(tempType2.toLowerCase()));

    type1toCheck = JSON.parse(localStorage.getItem(tempType2.toLowerCase()));
        type1toCheck = type1toCheck.damage_relations;
        dmgDouble = type1toCheck.double_damage_from;
        dmgHalf = type1toCheck.half_damage_from;
        dmgNone = type1toCheck.no_damage_from;
        for (let i = 0; i < dmgDouble.length; i++) {
            let tempName = dmgDouble[i].name;
            let tempValue = tempWeak[tempName];
            tempValue = tempValue * 2;
            tempWeak[tempName] = tempValue;
        }
        for (let i = 0; i < dmgHalf.length; i++) {
            let tempName = dmgHalf[i].name;
            let tempValue = tempWeak[tempName];
            tempValue = tempValue * 0.5;

            tempWeak[tempName] = tempValue;
        }
        for (let i = 0; i < dmgNone.length; i++) {
            let tempName = dmgNone[i].name;
            let tempValue = tempWeak[tempName];
            tempValue = 0;
            tempWeak[tempName] = tempValue;
        }

    // setMonWeak(tempWeak);

        return (
            <div className="typeChartMonHolder">
                <span className="typeChartName">{type1.name}</span><span className="typeChartCell">{tempWeak.normal}</span><span className="typeChartCell">{tempWeak.fighting}</span><span className="typeChartCell">{tempWeak.water}</span><span className="typeChartCell">{tempWeak.fire}</span><span className="typeChartCell">{tempWeak.grass}</span><span className="typeChartCell">{tempWeak.electric}</span><span className="typeChartCell">{tempWeak.dragon}</span><span className="typeChartCell">{tempWeak.fairy}</span><span className="typeChartCell">{tempWeak.steel}</span><span className="typeChartCell">{tempWeak.rock}</span><span className="typeChartCell">{tempWeak.ice}</span><span className="typeChartCell">{tempWeak.ground}</span><span className="typeChartCell">{tempWeak.bug}</span><span className="typeChartCell">{tempWeak.poison}</span><span className="typeChartCell">{tempWeak.psychic}</span><span className="typeChartCell">{tempWeak.dark}</span><span className="typeChartCell">{tempWeak.ghost}</span><span className="typeChartCell">{tempWeak.flying}</span>
            </div>
        )









}