import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import App from 'App'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from 'redux/reducer'
import { Provider } from 'react-redux'
import { getPokemonListMiddleware } from 'redux/middlewares'

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(getPokemonListMiddleware))
)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
