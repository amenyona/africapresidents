import Identification from "./Identification";
import '../styles/PlantItem.css'

function PresidentItem({id, cover, name, light, water,description}){
    return(
        <li key={id} className='lmj-plant-item' onClick={()=>alert(`${description}`)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${cover}-${name}`}/>
            {name}
            <div>
               <Identification number={light} type='light'/>
               <Identification number={water} type='water' /> 
            </div>
        </li>
    )

}
export default PresidentItem;