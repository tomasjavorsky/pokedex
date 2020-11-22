import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import App from 'App'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from 'redux/reducer'
import { Provider } from 'react-redux'
import { getPokemonListMiddleware } from 'redux/middlewares'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(getPokemonListMiddleware))
)

const queryCache = new QueryCache()

ReactDOM.render(
    <Provider store={store}>
        <ReactQueryCacheProvider queryCache={queryCache}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ReactQueryCacheProvider>
    </Provider>,
    document.getElementById('root')
)
