export function Card(props) {
    const API_URL = import.meta.env.API_URL;
    return (
        <>
            <div className="card hstack">
                <img className="profileicon" src={API_URL+'profileicons/' + props.cardprops.imageID + '.png'}></img>
                <div className="vstack cardtext" style={{maxHeight: "100%"}}>
                    <p style={{color: 'lightgrey'}}>{props.cardprops.gameName}</p>
                    <p>{props.cardprops.tier} {props.cardprops.rank} - {props.cardprops.leaguePoints} LP</p>
                </div>
                <div className="vstack" style={{maxHeight: "100%", fontSize: '16pt', fontWeight: '500'}}>
                    <p style={{color: 'rgb(175, 255, 175'}}>W: {props.cardprops.wins}</p>
                    <p style={{color: 'rgb(255, 120, 120'}}>L: {props.cardprops.losses}</p>
                </div>
                <div className="winrate">
                    <p>{(props.cardprops.wins/(props.cardprops.losses + props.cardprops.wins)).toLocaleString(undefined, {style: 'percent', minimumFractionDigits:0})}</p>

                </div>
                <img className="rankicon" src={API_URL+'ranks/' + props.cardprops.tier + '.png'}></img>
            </div>
        </>
    )
}