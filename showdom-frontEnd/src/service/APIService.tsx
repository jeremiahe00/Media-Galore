




import React, { Component } from 'react'
import { RetrieveMediaParams, CreateMediaParams} from '../models/Models'
import User from '../models/User';


class APIService {
  


    static AddMedia = async(body:CreateMediaParams, token:string) => {
        console.log(JSON.stringify(body));
        const userResponse = await fetch('http://127.0.0.1:8000/api/medias/', {method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
            // 'Authorization': 'Token 1576bb8f98a9899a14d6520d534b8547ba6b93e8'
        }, 
        body: JSON.stringify(body)})
        .then(resp => resp.json())

        return userResponse
    }

    static UpdateMedia = async(media_id:number, body:RetrieveMediaParams, token:string) => {
        console.log(JSON.stringify({body}));
        const userResponse = await fetch(`http://127.0.0.1:8000/api/medias/${media_id}/`, {method: "PUT", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
            // 'Authorization': 'Token 1576bb8f98a9899a14d6520d534b8547ba6b93e8'
        }, 
        body: JSON.stringify(body)})
        .then(resp => resp.json())

        return userResponse
    }

    static DeleteMedia = async(media_id:number, token:string) => {
        const userResponse = await fetch(`http://127.0.0.1:8000/api/medias/${media_id}/`, {method: "DELETE", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
            // 'Authorization': 'Token 1576bb8f98a9899a14d6520d534b8547ba6b93e8'
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

    static async LoginUser(body:User) {

        let authRetrieval = await fetch('http://127.0.0.1:8000/auth/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body:JSON.stringify(body)


        });//.then(resp => console.log(resp.status))
        // let authData = authRetrieval;
        // console.log(authRetrieval)
        return authRetrieval

    }


    static RegisterUser(body:User) {

        return fetch('http://127.0.0.1:8000/api/users/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body:JSON.stringify(body)


        }).then(resp => resp.json())

    }

}

export default APIService
