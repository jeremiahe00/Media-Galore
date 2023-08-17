


import React from 'react'
// import APIService from '../../service/APIService'
import Media from '../../models/Media'
// import 'bootstrap/dist/css/bootstrap.min.css';


interface FormMediaProps {
    medias: Media[];
    editBtn: (media: Media) => void;
}

function MediaList(props:FormMediaProps) {


    const editBtn = (media:Media) => {
        props.editBtn(media)
    }

//     const deleteBtn = (media:Media) => {
//         APIService.DeleteMedia(media.id)
//         .then(() => props.deleteBtn(media))
//         .catch(error => console.log(error))
//     }

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
        {props.medias.map(media => { // think of removing this return
            return (
            //   <tr key = {media.id}>
            <tr>
                {/* <table> */}
                        
                        {/* <tr> */}
                          {/* <td>{media.updated_date}</td> */}
                          <td>{media.title}</td>
                          <td>{media.source}</td>
                          <td>
                            {/* <div className="input-group mb-3"> */}
                              <button
                                className="btn btn-warning"
                                onClick={() => editBtn(media)}
                              >
                                Edit
                              </button>
                            {/* </div> */}
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger"
                                name=""
                                value="Remove"
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
