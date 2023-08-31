


import React from 'react'
import APIService from '../../service/APIService'
import {CreateMediaParams, RetrieveMediaParams} from '../../models/Models'
import { useCookies } from 'react-cookie';
// import 'bootstrap/dist/css/bootstrap.min.css';


interface FormMediaProps {
    medias: RetrieveMediaParams[];
    editBtn: (media: RetrieveMediaParams) => void;
    deleteBtn: (media: RetrieveMediaParams) => void;
}

function MediaList({medias, editBtn, deleteBtn}: FormMediaProps) {

  const [token] = useCookies<string>(['mytoken'])

    const editBtnMediaList = (media:RetrieveMediaParams) => {
        editBtn(media)
    }

    const deleteBtnMediaList = (media:RetrieveMediaParams) => {
      if (media?.id) {
        APIService.DeleteMedia(media.id, token['mytoken'])
        .then(() => deleteBtn(media))
        .catch(error => console.log(error))
      }
        
    }

//     const randomizeBtn = (media:Media) => {
//         APIService.RandomizeMedia(media)
//         .then(() => props.randomizeBtn(media))
//         .catch(error => console.log("Nothing to randomize"))
//     }

  return (
    <div>
      
      <table className='table'>
        <thead>
            <tr>
                {/* <th>Date Added</th> */}
                <th>Name</th>
                <th>Source</th>
                <th></th>
                <th></th>
            </tr>
        </thead>

        <tbody>
        {medias.map(media => { // think of removing this return
            return (
              <tr key = {media.id}>
             {/* <tr> */}
                {/* <table> */}
                        
                        {/* <tr> */}
                          {/* <td>{media.updated_date}</td> */}
                          <td>{media.title}</td>
                          <td>{media.source}</td>
                          <td>
                            {/* <div className="input-group mb-3"> */}
                              <button
                                className="btn btn-warning"
                                onClick={() => editBtnMediaList(media)}
                              >
                                Edit
                              </button>
                            {/* </div> */}
                            </td>
                            <td>
                              <button
                                // type="button"
                                className="btn btn-danger"
                                // name=""
                                // value="Remove"
                                onClick={() => deleteBtnMediaList(media)}
                              >
                                Remove
                              </button>
                            </td>
                            {/* </div> */}
                          {/* </td> */}
                        {/* </tr> */}
                       {/* </table> */}
              </tr>
            )
          })}
        </tbody>
                        

      </table>
        
      

    </div>
  )
}

export default MediaList
