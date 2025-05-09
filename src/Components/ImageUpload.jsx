import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'


const ImageUpload = () => {
    const [image, setImage] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        setImage(Object.assign(file, {
            preview: URL.createdObjectURL(file)
        }));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': []
        },
        multiple: false
    });


    return (
        <div className="w-full max-w-md mx-auto mt-10">

            <div {...getRootProps()} className="border-2 border-gray-700 border-gray-300 rounded-md p-6 text-center cursor-pointer bg-transparent hover:bg-secondary" >
                <input {...getInputProps()} />

                {
                    isDragActive ? (
                        <p>Drop Your DP Here...</p>
                    ) : image ? (
                            <img src={image.preview} alt="preview" className = "mx-auto max-h-48 object-contain" />
                        ) : (
                                <>
                                    <div className="text-3xl mb-2 ">📤</div>
                                    <p>Drag and Drop to upload or <span className="text-blue-500 underline">Browse</span></p>
                                </>
                    )
                }
            </div>
        </div>
    )
}

export default ImageUpload