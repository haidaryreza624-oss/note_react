import React from 'react'
import Appbar from '../components/Appbar'
import Forminput from '../components/Forminput'
import { useParams } from "react-router-dom";
function Editpage() {
    const { id } = useParams()
    return (
        <div>
            {/* Hello world */}
            <Appbar />
            <Forminput isedit={true} id={id} />
        </div>
    )
}

export default Editpage
