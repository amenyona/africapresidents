import { presidentListe } from "../datas/presidentListe"
import PresidentItem from "./PresidentItem"
import '../styles/President.css'

function PresidentList(){
    const categorieList = []
    presidentListe.forEach((item)=>{
        categorieList.push(item.category)
    })

    const catSansDoublon = [... new Set(categorieList)]
    return(
        <div>
            
            {/*<ul>
                {catSansDoublon.map((cat)=><li key={cat.toString()}>{cat}</li>)}
            </ul>*/}
            <ul className='lmj-plant-list'>
                {presidentListe.map(({id,cover,name,light,water,description})=>
                <PresidentItem 
                id={id}
                cover={cover}
                name={name}
                light={light}
                water={water} 
                description={description}
                />
                )}
            </ul>
        </div>
    )
}
export default PresidentList;