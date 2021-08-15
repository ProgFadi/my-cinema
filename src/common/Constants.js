import Login from '../layouts/Pages/Login'
import Home from '../layouts/Pages/Home'
import Signup from '../layouts/Pages/Signup'
import Movie from '../layouts/Pages/Movie'
import AuthGuard from '../components/Guards/AuthGuard'
import GuestGuard from '../components/Guards/GuestGuard'

export const SETTINGS_KEY = "userData";

export const ROUTES =  [
    {
        guard:GuestGuard,
        path:"/",
        exact:true,
        component:()=> <Login />
    },
    {
        guard:GuestGuard,
        path:"/Login",
        exact:true,
        component:()=> <Login />
    },
    {
        guard:GuestGuard,
        path:"/Signup",
        exact:true,
        component:()=> <Signup />
    },
    {
        guard:AuthGuard,
        path:"/Movie",
        exact:true,
        component:()=> <Movie />
    },
    {
        guard:AuthGuard,
        path:"/Home",
        exact:true,
        component:() => <Home />
    }

];