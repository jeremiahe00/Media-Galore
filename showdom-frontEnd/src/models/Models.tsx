



export interface RetrieveMediaParams { 
    id: number;
    title: string;
    source: string;
    // created_date: string;
    // updated_date: string;
    // user: string;
}

export interface CreateMediaParams extends Omit<RetrieveMediaParams, 'id'> {}
//{ //example updateMediaForm
//     id: number;
//     media: Media; // or individual fields
//     // created_date: string;
//     // updated_date: string;
//     // user: string;
// }

// export default Media