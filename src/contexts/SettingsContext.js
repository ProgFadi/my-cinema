import { ContactSupportOutlined } from '@material-ui/icons'
import React,{useEffect,useState,createContext } from 'react'
import {SETTINGS_KEY} from '../common/Constants'
const defaultSettings = {
    direction : 'ltr',
    lang:'en',
    theme:'DARK'
}
const SettingsContext = createContext({
    settings:defaultSettings
})
 export const SettingsProvider = ({settingsParam,children}) => {
     // states
     let [settings,setSettings] = useState(settingsParam || defaultSettings)
     useEffect(()=>{
         let st = loadSettings()
         console.log("IN use effect")
         console.log(st)
         if(st)
         {
             setSettings(st)
             console.log("states updated")
             console.log(settings)
         }
     },[])
     useEffect(()=>{
         document.dir = settings.direction
     },[settings])
     const saveSettings = (newObject) =>{
        // update
        setSettings(newObject)
        storeInLS(newObject)
    }
   
    const storeInLS = (newObject) =>{
        window.localStorage.setItem(SETTINGS_KEY,JSON.stringify(newObject))
    }
   
    const loadSettings = () => {
        let sett = null
        try{
            sett = window.localStorage.getItem(SETTINGS_KEY)
            if(sett)
            {
               sett =  JSON.parse(sett)
               
            }
            else{
                sett = defaultSettings;
            }
        }
        catch(err)
        {
            console.log("Connot get settings")
        }
        return sett;
    }
     return <SettingsContext.Provider
     value={{
         settings:settings,
         saveSettings:saveSettings
     }}
     >
         {children} 
     </SettingsContext.Provider>
 }

 export default SettingsContext