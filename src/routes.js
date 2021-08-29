import React from 'react'
import { Fragment ,lazy} from 'react'
import {Switch,Route} from 'react-router-dom'
import {Suspense} from 'react'
import LoadingScreen from './layouts/Pages/LoadingScreen'
import AuthGuard from './components/Guards/AuthGuard';
import GuestGuard from './components/Guards/GuestGuard';
import ContainerLayout from './layouts/ContainerLayout'
export const renderRoutes = (routes = []) =>(
    <Suspense fallback={<LoadingScreen/>}>
        <Switch>
        {
            routes.map((route,index)=>{
                const Guard = route.guard || Fragment
                const Component = route.component
                const Layout = route.layout || Fragment;
                
                console.log('routing...')
                return (
                    <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    // component={route.component}
                    render= {(props)=>(
                            <Guard>
                                <Layout>
                                <Component {...props}/>   
                                </Layout>
                               
                            </Guard>
                )
                    }
                    />


                );
            })
        }
    </Switch>
    </Suspense>
   
)

const my_routes =  [
    {
        guard:AuthGuard,
        path:"/",
        exact:true,
        component:lazy(() => import('./layouts/Pages/Home'))
    },
    {
        guard:GuestGuard,
        path:"/Login",
        exact:true,
        component:lazy(() => import('./layouts/Pages/Login'))
    },
    {
        guard:GuestGuard,
        path:"/Signup",
        exact:true,
        component:lazy(() => import('./layouts/Pages/Signup'))
    },
    {
        guard:AuthGuard,
        layout:ContainerLayout,
        path:"/Movie",
        exact:true,
        component:lazy(() => import('./layouts/Pages/Movie'))
    },
    {
        guard:AuthGuard,
        layout:ContainerLayout,
        path:"/Home",
        exact:true,
        component:lazy(() => import('./layouts/Pages/Home'))
    }

];

export default my_routes





