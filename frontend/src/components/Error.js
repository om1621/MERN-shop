import React from 'react'
import { Alert } from '@material-ui/lab'
const Error = ({ err }) => {
    return (
        <div>
            <Alert severity="error">{err}</Alert>
        </div>
    )
}

export default Error
