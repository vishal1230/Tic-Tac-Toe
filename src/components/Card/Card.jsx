import Icon from "../Icon/Icons";
import './Card.css'
function Card({onPlay,player,index}){
    let icon=<Icon/>
    if(player==="x"){
        icon=<Icon name="cross"/>
    }
    else if(player==="0"){
        icon=<Icon name="circle"/>
    }
    return(
        <div className="card" onClick={()=>onPlay(index)}>
            {icon}
        </div>
        
    )
}
export default Card; 