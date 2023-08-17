




import React, { Component } from 'react'
import Media from '../models/Media'

class APIService {
  


    static AddMedia = async(body:Media, token:string) => {
        const userResponse = await fetch('http://127.0.0.1:8000/api/medias/', {method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Token ${token}`
            'Authorization': 'Token 1576bb8f98a9899a14d6520d534b8547ba6b93e8'
        }, 
        body: JSON.stringify({body})})
        .then(resp => resp.json())

        return userResponse
    }

    static UpdateMedia = async(media_id:string, body:Media, token:string) => {
        const userResponse = await fetch(`http://127.0.0.1:8000/api/medias/${media_id}/`, {method: "PUT", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }, 
        body: JSON.stringify({body})})
        .then(resp => resp.json())

        return userResponse
    }

    static DeleteMedia = async(media_id:string, token:string) => {
        const userResponse = await fetch(`http://127.0.0.1:8000/api/medias/${media_id}/`, {method: "DELETE", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
    })}

    // static RandomizeMedia = async(body:Media[], token:string) => {
    //     const userResponse = await fetch('http://127.0.0.1:8000/api/medias/', {method: "GET", 
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Token ${token}`
    //     }, 
    //     body: JSON.stringify({body})})
    //     .then(resp => resp.json())
    //     //output just one

    //     return userResponse
    // }

    // static LoginUser(body:User) {

    //     return fetch('http://127.0.0.1:8000/auth/', {
    //         'method': 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
                
    //         },
    //         body:JSON.stringify(body)


    //     }).then(resp => resp.json())

    // }


    // static RegisterUser(body:User) {

    //     return fetch('http://127.0.0.1:8000/api/users/', {
    //         'method': 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
                
    //         },
    //         body:JSON.stringify(body)


    //     }).then(resp => resp.json())

    // }

}

export default APIService
