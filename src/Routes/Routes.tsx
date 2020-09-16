import React, { useContext } from 'react'
import { RouteProps as ReactDOMRouteProps,  Route as ReactDOMRoute, Redirect} from 'react-router-dom'

import { AuthContext } from '../hooks/auth'

interface RouteProps extends ReactDOMRouteProps{
    isPrivate?: boolean
    component : React.ComponentType
}

const Route: React.FC<RouteProps> = ({  isPrivate = false, component: Component, ...rest }) => {
    const {currentUser}  = useContext(AuthContext)

    return(
        <ReactDOMRoute { ... rest} render={(location)=>{
            return isPrivate === !!currentUser ? (
                <Component />
            ): (
                <Redirect 
                    to={{
                        pathname: isPrivate ? '/' : '/Home'
                          
                    }} 
                />
            )
        }}/>
        
    )
}

export default Route