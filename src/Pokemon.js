export default function Pokemon({ name, pts, type1, type2, atk, def, spdf, spa, spe, hp, ability1, ability2, ability3 }) {

    return (
        <div className="pokemon">
            <h1>#{name}</h1>
            <h5>{type1} ,  {type2}</h5>
                {/*<table className="monStats">*/}
                {/*    {mons.map((mon) =>*/}
                {/*        <td>{mon.atk}</td> )}*/}
                {/*</table>*/}
        </div>
    )
}