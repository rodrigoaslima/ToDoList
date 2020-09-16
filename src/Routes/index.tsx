import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Routes'

import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'

const Routes: React.FC = () => (
    <Switch>
        <Route path="/Login" component = {LogIn} />
        <Route path="/SignUp" component = {SignUp} />
        <Route path="/Home" exact component = {Home} isPrivate/>

    </Switch>
)

export default Routes