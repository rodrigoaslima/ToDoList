import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../src/Routes'
import {AuthProvider} from './hooks/auth'


import GlobalStyle from './styles/global'

const App: React.FC = () => (
    <AuthProvider>
        <Router>
            <Routes />
            <GlobalStyle/> 
        </Router>
    </AuthProvider>
    
)

export default App;
