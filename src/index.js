import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app'

fetch("http://localhost:3001/getnotes",{
            method: "GET",
            header: {
                "content-type": "application/json",
                'Access-Control-Allow-Origin':'http://127.0.0.1:3000'
            }
        })
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            console.log(res.notes)
            ReactDOM.render(<App notes={res.notes}/>,document.getElementById('root'))
        })


