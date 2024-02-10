import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routePath } from './routesPath'
import Layout from '../../pages/layout/Layout'
import HomePage from '../../pages/home/HomePage'

const AppRoutes: FC = () => {
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
