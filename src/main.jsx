import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './components/router/Router.jsx'
import AuthProvider from './components/provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AuthProvider>
			<Router></Router>
		</AuthProvider>
	</StrictMode>,
)
