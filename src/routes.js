import React from 'react'
import { Fragment } from 'react'
import {Switch,Route} from 'react-router-dom'
import {ROUTES} from './common/Constants'


export const renderRoutes = (props) =>{
    return  <Switch>
        {
            ROUTES.map((route,index)=>{
                let Guard = route.guard
                let Comp = route.component
                console.log(Guard)
                return (
                    
                    <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    // component={route.component}
                    render= {
                        (props)=>(
                            <Guard>
                                <Fragment>
                                <Comp {...props}/>
                                </Fragment>
                                
                            </Guard>
                )
                    }
                    >


                    </Route>
                )
            })
        }
    </Switch>
}





