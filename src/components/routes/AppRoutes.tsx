import { FC, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { routePath } from './routesPath'
import Layout from '../../pages/layout/Layout'
import HomePage from '../../pages/home/HomePage'

const AppRoutes: FC = () => {
	const location = useLocation()

	useEffect(() => {
		window.scrollTo({ top: 0 })
	}, [location])

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					{routePath.map(route => (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					))}
				</Route>
			</Routes>
		</>
	)
}

export default AppRoutes
