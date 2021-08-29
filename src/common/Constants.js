import Login from '../layouts/Pages/Login'
import Home from '../layouts/Pages/Home'
import Signup from '../layouts/Pages/Signup'
import Movie from '../layouts/Pages/Movie'
import AuthGuard from '../components/Guards/AuthGuard'
import GuestGuard from '../components/Guards/GuestGuard'
import {lazy} from 'react'
import ContainerLayout from '../layouts/ContainerLayout'



export const SETTINGS_KEY = "userData";
export const THEMES = {
    LIGHT: 'LIGHT',
    DARK: 'DARK',
}