import '../styles/Banner.css'
function Banniere({children}){
 {/*une autre possibilité  children = props.children
  dans ce cas on obtirn 
  function BannerPresi(props){
      const children = props.children
      return <div>{children}</div>
  }
*/}
return<div className='lmj-banner'>{children}</div>
}
export default Banniere;