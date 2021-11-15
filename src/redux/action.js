import { DISPLAY } from "./action-types"

export const displayHandler=(movies)=>{
    return {
        type:DISPLAY,
        payload:movies
    }
}