
import React from 'react'
import {render} from 'react-dom'
import {Skidaycount} from './components/Skidaycount'


window.React=React
render(
<Skidaycount total={38}
            powder={20}
            backcountry={10}
            goal={100}/>,
    document.getElementById('react-container')
)