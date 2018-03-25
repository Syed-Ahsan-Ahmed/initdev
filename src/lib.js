import React from 'react'
import text from './titles.json'
import './stylesheets/goodbye.scss'
import './stylesheets/hello.css'

export const hello =(
    <h1 id='title'
    className='style1'>
    {text.hello}
    </h1>
)

export const goodbye =(
    <h2 id='title'
    className='style2'>
    {text.goodbye}
    </h2>
)