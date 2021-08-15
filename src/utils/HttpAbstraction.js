import {HttpBase} from './HttpBase'

class HttpAbstraction{
    http
    constructor(url_prefix = '')
    {
        this.http = new HttpBase(url_prefix)
    }
    async login(body) {
        return await this.http.post(`login`, body)
    }
}

export default HttpAbstraction