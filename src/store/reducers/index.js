import {FETCH_SUCCESS, FETCH_START, FETCH_FAILURE, fetchData} from '../actions'


const initialState = {
    all:[],
    isLoading:false,
    error:'',
}


export const reducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_START:
            return{
                ...state,
                isLoading:true
            }

        case FETCH_SUCCESS:
            return{
                ...state,
                all:action.payload,
                isLoading:false,
                error:''
            }
        
        case FETCH_FAILURE:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }

        default:
            return state
    }
}