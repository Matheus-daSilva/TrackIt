import { React, createContext, useContext, useState} from 'react';

const ImageContext = createContext();

export default function TokenProvider({ children }){
    const [image, setImage] = useState(null);

    return (
        <ImageContext.Provider value={{image, setImage}}>
            {children}
        </ImageContext.Provider>
    )
}

export function useImage() {
   const context = useContext(ImageContext);
   const { image, setImage } = context;
   return { image, setImage }
}