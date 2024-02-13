import { FC } from 'react'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import Form from '../../components/form/Form'

const Layout: FC = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
			<Form />
		</>
	)
}

export default Layout
