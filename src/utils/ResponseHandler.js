export const handleResponse = (err) => {
    let msg = null
    if(err.response)
    {
        msg = err.response.data
        switch(err.response.status)
        {
            case 401:
            msg = {
                ...msg,
                statusCode:err.response.status
            } 
            window.location.href='/login'
            break;
        }
    }
    else if(err.request)
    {
        console.log("Error in the client side at request")
       
    }
    else{
        msg = {
            status:"false",
            message:{
                code:-1,
                text:"Unknown Error"
            },
            statusCode:-1
        }
    }

    return msg;
    
}