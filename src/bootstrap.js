import React from 'react'

import ReactDOM  from 'react-dom'

import App from './App'

// Mount function to start the app

const mount =(el)=>{
    ReactDOM.render(
       <App/>,
        el
    )
}





//if we are in dev or in isolation call mount immediate
if(process.env.NODE_ENV==="development"){
    const devRoot=document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot)
    }
}



//we are running through container and  we should export the mount
export {mount}