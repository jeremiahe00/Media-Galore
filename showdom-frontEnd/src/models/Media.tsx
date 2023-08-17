



interface Media {
    // id: number; //number;
    title: string;
    source: string;
    // created_date: string;
    // updated_date: string;
    // user: string;
}

interface FullMedia {
    id: number; //number;
    media: Media;
}

export default Media