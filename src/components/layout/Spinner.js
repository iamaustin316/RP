import React, { Fragment } from 'react'
import spinner from './spinner.gif'

const Spinner = () =>
    <Fragment>
        <img src={ spinner } alt="Loading..." style={{ width: '80px', marign: 'auto', display: 'block' }} />
    </Fragment>

export default Spinner
