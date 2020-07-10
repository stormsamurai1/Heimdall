
const INITIAL_STATE = {
    requestInformation: {
        baseurl: 'http://localhost:3333',
        httpVerb: 'get',
        req:{
            body: undefined,
            params: undefined,
            query: undefined
        },
        response: {
            data: 'nothing'
        }
    },
    responseInformation:{}
}

export default function reducer(state = INITIAL_STATE, action){
    if(action.type === "SET_RESPONSE_DATA"){
        
        return {
            ... state,
            responseInformation: action.response
        }
    }

    return state
}
