import PdfViewer from "@/components/pdfViewer"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
export default function Upload(){
    return(
        <>
            <Navbar/>
            <h1>Upload the required files</h1>
            <PdfViewer/>
            <div>
            <Button>test1234cd</Button>
            </div>
        </>
    )
}