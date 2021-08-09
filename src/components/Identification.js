import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg'
function Identification({number, type}){
    {/*ce composant utilise la destruturatiion*/}
    const tableau =[1,2,3]
    const expmlType =
        type==='light' ?(
            <img src={Sun} alt='sun icone'/>
        ):(
            <img src={Water} alt='water icone'/>
        )

     return(
         <div>
             {tableau.map((tabElmt)=> 
               number >=tabElmt ?<span key={tabElmt.toString()}>{expmlType}</span>:null
             )}
         </div>
     )

}
export default Identification