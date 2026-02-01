import { Header } from './_components/header'
import { Welcome } from './_components/welcome'
import { Stocks } from './_components/stocks'
import { Menu } from './_components/menu'
import { Delivery } from './_components/delivery'
import { About } from './_components/about'
import { Instagram } from './_components/instagram'
import { Footer } from './_components/footer'
import { Order } from './_components/order'
import { Sidebar } from './_components/sidebar'

export default function HomePage() {
	return (
		<>
			<Header/>
			<Welcome/>
			<Stocks/>
			<Menu/>
			<Delivery/>
			<About/>
			<Instagram/>
			<Footer/>
			<Sidebar/>
			<Order/>
		</>
	)
}
