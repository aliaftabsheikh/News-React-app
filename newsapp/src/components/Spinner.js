import React from 'react'
import loading from './loading.gif'

const spinner = ()=> {

        return (
            <div className = "text-center btn-lg">
                <img className ="my-3" src={loading} alt="loadng" />
            </div>
        )
    
}

export default spinner
