


import React, {useState, useEffect} from 'react'
import APIService from '../service/APIService'
import { useCookies } from 'react-cookie';
import Media from '../models/Media';


// interface Media {
//     title: string;
// }

interface FormMediaProps {
    media: Media | null;
    // updatedInformation: (media: Media) => void;
    insertedInformation: (media: Media) => void;
}



function MediaForm(props:FormMediaProps) {

    
    // const [medias, setMedias] = useState<Media[]>([]) //[]


    const [title, setTitle] = useState<string>('')
    const [source, setSource] = useState<string>('')
    // const [created_date, setCreatedDate] = useState<string>('')
    // const [updated_date, setUpdatedDate] = useState<string>('')
    // // const [user, setUser] = useState(props.user)
    const [token] = useCookies<string>(['mytoken'])



    useEffect(() => {
        if (props.media) {
            setTitle(props.media.title)
            setSource(props.media.source)
        }
        
    //     setSource(props.source)
    //     setCreatedDate(props.updated_date)
    //     setUpdatedDate(props.updated_date)
    //     // setUser(props.user)
        
    }, [props.media])


    // const insertedInformation = (media:Media) => {

    //     const new_media = [...medias, media]
    //     setMedias(new_media)
    
    //   }

    

    //   const updatedInformation = (media:Media) => {
    //     const new_media = medias.map(mymedia => {
    //       if(mymedia.id === media.id) {
    //         return media;
    //       } else {
    //         return mymedia;
    //       }
    //     })
    
    //     setMedias(new_media)
    
    //   }


    
    // const updateBook = () => {
    //     APIService.UpdateMedia(props.id, {id:props.id, title, source:'CR', created_date, updated_date:'Date.now'}, token['mytoken'])
    //     .then(resp => updatedInformation(resp))

    // }

    const addMedia = () => {
        // console.log(title)
        // console.log(source)
        const media = {
            title: title,
            source: source
        }
        // console.log(media)
        APIService.AddMedia(media, token['mytoken']) // why 400 bad request?
        .then(resp => props.insertedInformation(resp));
        
    }


  return (
    
    <div>
      
        {props.media ? (

            <div className='mb-3'>
                <label htmlFor = 'title' className = 'form-label'>Title</label>
                <input type = 'text' className='form-control' id='title' placeholder='Please Enter the title'
                value = {title} onChange={e => setTitle(e.target.value)}
                
                />

                <label htmlFor = 'source' className = 'form-label'>Source</label>
                <input type='text' className='form-control' id='source' placeholder='list options'
                value = {source} onChange={e => setSource(e.target.value)}

                />


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
                    // props.id ? <button onClick={updateBook} className='btn btn-success'>Update Media</button> 
                    // : 
                    
                    <button onClick={addMedia} className='btn btn-success'>Add Media</button>
                }

                

            </div>

        ) : null}

    </div>
  )
}

export default MediaForm
