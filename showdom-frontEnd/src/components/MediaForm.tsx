


import React, {useState, useEffect} from 'react'
import APIService from '../service/APIService'
import { useCookies } from 'react-cookie';
import { RetrieveMediaParams, CreateMediaParams } from '../models/Models';





interface FormMediaProps {
    media: RetrieveMediaParams | null;
    updatedInformation: (media: RetrieveMediaParams) => void;
    insertedInformation: (media: RetrieveMediaParams) => void;
}




function MediaForm({media, updatedInformation, insertedInformation}: FormMediaProps) {


    // const [medias, setMedias] = useState<Media[]>([]) //[]


    const [title, setTitle] = useState<string>('')
    const [source, setSource] = useState<string>('')
    const [id, setId] = useState<number | null>(null)
    // const [created_date, setCreatedDate] = useState<string>('')
    // const [updated_date, setUpdatedDate] = useState<string>('')
    // // const [user, setUser] = useState(props.user)
    const [token] = useCookies<string>(['mytoken'])



    useEffect(() => {
        
        if (media) {
            if (media.id !== undefined) {
            setId(media.id)
            // console.log(props.media.id)
        }
            setTitle(media.title)
            setSource(media.source)
        } 

        
    //     setSource(props.source)
    //     setCreatedDate(props.updated_date)
    //     setUpdatedDate(props.updated_date)
    //     // setUser(props.user)
        
    }, [media])

    // why do I need this here???? comment out below
    // const updatedInformation = (media:Media) => { 
    //     const existing_media = medias.map(mymedia => {
    //       if(mymedia.id === media.id) {
    //         return media;
    //       } else {
    //         return mymedia;
    //       }
    //     })
    
    //     setMedias(existing_media)
    
    //   };
    
    const updateMedia = () => {
        

        if (media?.id) {
            // if (props.media !== null)
            // console.log(props.media.id)

            const editedMedia:RetrieveMediaParams = {
                id: media.id,
                title: title,
                source: source
            }

            // if (props.media !== null)
            // console.log(editedMedia)
    
            APIService.UpdateMedia(media.id, editedMedia, token['mytoken'])//, token['mytoken'])
            .then(resp => updatedInformation(resp))
        
        }
        

    }

    const addMedia = () => {

        const addedMedia = {
            // id: props.media.id,
            title: title,
            source: source
        }
        
        APIService.AddMedia(addedMedia, token['mytoken']) 
        .then(resp => insertedInformation(resp));
        
    }


  return (
    
    <div>
      
        {media ? (

            <div className='mb-3'>
                <label htmlFor = 'title' className = 'form-label'>Title</label>
                <input type = 'text' className='form-control' id='title' placeholder='Please Enter the title'
                value = {title} onChange={e => setTitle(e.target.value)}
                
                />

                <label htmlFor = 'source' className = 'form-label'>Source</label>
                <input type='text' className='form-control' id='source' placeholder='list options'
                value = {source} onChange={e => setSource(e.target.value)}

                

                />

                {/* <h1>{props.media.id ? id : <h2>None</h2>}</h1> */}

                {/* <label htmlFor = 'created_date' className = 'form-label'>Created date</label>
                <input type='text' className='form-control' id='created_date' placeholder='created'
                value = {created_date} onChange={e => setCreatedDate(e.target.value)}

                />

                <label htmlFor = 'updated_date' className = 'form-label'>Updated date</label>
                <input type='text' className='form-control' id='source' placeholder='updated date'
                value = {updated_date} onChange={e => setUpdatedDate(e.target.value)}

                /> */}

                {/* <label htmlFor = 'synopsis' className = 'form-label'>Synopsis</label>
                <input type='text' className='form-control' id='source' placeholder='list options'
                value = {source} onChange={e => setSource(e.target.value)}

                /> user goes here */}

                <br/>
                
                {
                    media.id ? <button onClick={updateMedia} className='btn btn-success'>Update Media</button> 
                    : <button onClick={addMedia} className='btn btn-success'>Add Media</button>
                }

                

            </div>

        ) : null}

    </div>
  )
}

export default MediaForm
