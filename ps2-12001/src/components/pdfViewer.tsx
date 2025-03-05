'use client';

import { useState } from "react";
import { Worker,Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
export default function PdfViewer(){
    const [pdfFile,setPdfFile] = useState<string|null>(null);
    const handleFileChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files?.[0];
        if(file&&file.type==="application/pdf"){
            const fileURL = URL.createObjectURL(file);
            setPdfFile(fileURL);
        }else{
            alert("Please upload a valid pdf file");
        }
    };
    return(
        <div className="p-4">
            <input type="file" accept="application.pdf" onChange={handleFileChange}/>
            {pdfFile&&(
                <div className="mt-4">
                    <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`}>
                        <Viewer fileUrl={pdfFile} />
                    </Worker>
                </div>
            )}
        </div>
    )
}