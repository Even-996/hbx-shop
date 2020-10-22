import {request} from "./request";

export function getHomeMultData() {
    return request({
        url: '/home'
    })
    
}
