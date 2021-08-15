import axios from 'axios'
import { SETTINGS_KEY } from "../common/Constants";
import {handleResponse} from './ResponseHandler'
const ROOT_URL = "http://127.0.0.1:8000/api/";

export class HttpBase{
    headers = {
        
    }
    constructor(url_prefix = "users")
    {
        this.url_prefix = url_prefix
        this.getHeaders()
    }
    getHeaders() {
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
        if (this.checkSession()) {
            let apiToken = this.getSession().token.access_token
            this.headers = {
                ...this.headers,
                "Authorization": `Bearer ${apiToken}`
            }
        }
    }
    getSession() {
        let session = localStorage.getItem(SETTINGS_KEY)
        if (session) {
            return JSON.parse(session)
        }
        return session
    }
    checkSession() {
        return localStorage.getItem(SETTINGS_KEY) !== null
    }
    getUrl(url) {
        return this.url_prefix + url
    }
    /*
    {
        k1:v1,
        k2:v2
    }
    */
    mapQueryParams(queryParams) {
        return queryParams
            ? Object.keys(queryParams).map(function (key) {
                return key + '=' + queryParams[key]
            }).join('&')
            : ""
    }
    // HTTP methods requests
    
    async post(url, body, queryParams = null) { // url = login, reg
        try {
            
            let response = await axios.post(ROOT_URL + this.getUrl(url) + this.mapQueryParams(queryParams),body ,{
                method: "POST",
                headers: this.headers
            })
            return response
        } catch (error) {
            console.log('error in response of axios is',error)
            let res = handleResponse(error)
            
            return error; // null or object of msg
        }

    }


}