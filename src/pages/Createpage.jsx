import React, { useEffect } from 'react'
import Appbar from '../components/Appbar'
import Forminput from '../components/Forminput'

function Createpage() {

    return (
        <div>
            <Appbar />
            <Forminput isedit={false} />
        </div>
    )
}

export default Createpage
