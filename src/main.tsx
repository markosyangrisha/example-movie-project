import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { setupStore } from './store/store.ts'
import './index.css'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
