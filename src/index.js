import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { colors } from './data/Colors'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const ColorContext = createContext(colors)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ColorContext.Provider value={colors}>
				<App />
			</ColorContext.Provider>
		</BrowserRouter>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
