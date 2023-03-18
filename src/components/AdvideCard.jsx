import axios from 'axios';
import { useEffect, useState } from 'react';
import './css/advice-card.css';

export const AdvideCard = () => {
    const [advice, setAdvice] = useState({id: 0, textAdvice: ""})

    const getAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
             .then ( response => {
                setAdvice({
                    id: response.data.slip.id,
                    textAdvice: response.data.slip.advice
                })
             })
    }
    
    useEffect(() => {
        getAdvice()
    }, [])
    
    
    return (
        <main className='advice-card'>
            <h3 className='title-advice'>ADVICE #{advice.id}</h3>
            <q>{ advice.textAdvice }</q>
            <div className='divider-advice'>
                <img 
                    src = "./images/pattern-divider-desktop.svg"
                />
            </div>
            <div 
                className="advice-bottom"
                onClick={ getAdvice }
            >
                <img 
                    className='buttom'
                    src = "./images/icon-dice.svg"
                />
            </div>
        </main>
    )
}
