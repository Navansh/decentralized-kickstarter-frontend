import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router }  from 'react-router-dom'
import {ChainId, ThirdwebProvider, thirdwebProvider} from '@thirdweb-dev/react'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
    <ThirdwebProvider desiredChainId = {ChainId.Goerli}>
        <Router>

            <App />

        </Router>

    </ThirdwebProvider>
)
