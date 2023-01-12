import './style/Compstyle.css'
import {useState} from 'react'
import MemesData from '../MemesData'


export const Form = () => {

    const [colo, setColo] = useState('black')
    const getMeme = () => {
        console.log('button clicked')
    }
    const clutter = () => {
        setColo(colo === 'black' ? 'white' : 'black')
        console.log('over')
    }


    return (
        <div action="#" id='mem-form'>
            <h3 onMouseOver={clutter} style={{color: colo}}>test move</h3>
            <div className="input-holder">
                <div className="upp-hold">
                    <input type="text" name='upper' placeholder='upper' />
                </div>
                <div className="bot-hold">
                    <input type="text" name='lower' placeholder='lower' />
                </div>
            </div>
            <div className="button-holder">
                <button type='submit' onClick={getMeme}>Gen Meme</button>
            </div>
        </div>
    )
}