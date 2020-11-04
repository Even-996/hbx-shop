import {request} from './request'


export function sendEmail(email) {
    return request({
        url: 'email/send',
        params:{
            email
        }
    })
}

export function sendEmailAndCode(email,code) {
    return request({
        url: 'email/check',
        params:{
            email,
            code
        }
    })

}