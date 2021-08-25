import { useState, useEffect } from "react";

const useSetMainImage = () => {
    const [srcImage, setSrcMainImage] = useState({})
    useEffect((e) => {
        const srcMainImage = document.activeElement
        setSrcMainImage(srcMainImage)
        console.log(srcImage)
    }, [])
    return srcImage
}

export default useSetMainImage