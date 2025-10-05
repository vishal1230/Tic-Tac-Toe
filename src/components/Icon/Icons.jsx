import{ FaTimes,FaPen,FaRegCircle} from 'react-icons/fa';   

function Icon({name}){
    if(name==="cross") 
     {return <FaTimes />}
    else if(name==="circle") 
    {return <FaRegCircle />;}
    else (name==="pen") 
    {return <FaPen />;}
}
export default Icon;