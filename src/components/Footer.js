import { useState } from "react";
import '../styles/Footer.css'
function Footer(){
    const [inputValue, setInputValue] = useState('amenyona.late@gmail.com')
    function declanche(arg){
        if(!arg.includes('@')){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
        }

    }
    return(
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
				Pour les passionné·e·s des présidents 🌿🌱🌵
			</div>
            <div className='lmj-footer-elem'>Contacter nous au :</div>      
            <input type='email' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onBlur={(e)=>declanche(e.target.value)}/>
        
        </footer>
    )
}

export default Footer;