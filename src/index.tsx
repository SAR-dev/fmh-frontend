import React from 'react'
import ReactDom from 'react-dom'
import "./styles.css";

const App = () => {

    return <div className='px-5 py-5 bg-purple-500'>Hola</div>
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)