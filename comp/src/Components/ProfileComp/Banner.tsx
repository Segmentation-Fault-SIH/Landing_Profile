
"use client"
import { useEffect, useState } from "react";
import { useRef } from "react";
import Image from "next/image";


const Banner= ({ }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
  
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl(null);
      }
    };
  
    const handleUpload = async () => {
      if (!selectedFile) {
        return;
      }
  
      const formData = new FormData();
      formData.append('image', selectedFile);
  
      try {
        const response = await fetch('/upload', {
          method: 'POST',
          body: formData,
        });
        if (response.status === 200) {
          const data = await response.json();
          console.log('Image URL:', data.imageUrl);
          // You can use the image URL as needed (e.g., display it on the page).
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
      return( 
        
      <div className=" flex justify-center items-center h-full min-w-full bg-black-100 " onClick={handleUpload}>
       {selectedFile ? (
        <div className="w-full h-full relative">
          <img
            alt="Selected"
            decoding="async"
            data-nimg="fill"
            src={previewUrl}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              objectFit: "cover",
             
            }}
          />
        </div>
      ) : (
        <>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>
        </>
      )}
      </div>
      );
  };
  

export default Banner;



