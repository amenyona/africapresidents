import logo from '../assets/logo.png'
import Banniere from './Banniere'
import PresidentList from './PresidentList'
import Footer from './Footer'

function App() {
	return (
		<div>
			{/*<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>*/}
			<Banniere>
				<img src={logo} alt='La maison jungle' className='lmj-logo'/>
				<h1 className='lmj-title'>La liste des présidents</h1>
			</Banniere>
			{/* <Cart /><ShoppingList /> */}
			<PresidentList />
			<Footer />
			
		</div>
	)
}

export default App
