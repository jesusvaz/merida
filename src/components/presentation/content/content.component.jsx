import React,{useState} from 'react'
import  './content.styles.scss'

let messages = [
    'Abuela fue el Tuy!',
    'Y si te echo al agua? quiero ver que te atrevaz',
    'Toodos te queremos igual!',
    'Firmes que llego el jefe',
    'Todos tus hijos y nietos',
    'Pos quien hizo esta presentacion pos yooooo.',
    'Sundance ',
    `Abuelita, quiero decirte que te amo mucho!! Eres súper divertida y se que amas a cada unos de nosotros mucho. Feliz día!! DANA 😘 `

    +`Abuelita , te quierrrrooooo muchooooo!!!! Me encanta pasar tiempo contigo siempre me sacas una sonrisa 😁, 
    me encanta tu energía y como siempre me enseñas algo ! Te amo y agradezco por haber sido una mamá genial de mi papá . 
    Yo no estaría aquí hoy sin ti y por eso yo te lo agradezco !! Te amo mucho abue !!! Feliz día ! 
    Con mucho amor , tu nieta más guapa , KIA:) 😘 `
    ,'De todos tu nietos',
    'Firmes!',
    'Ahhhh! FIN'
]


const Content = () => {

    const [count,setCount] = useState(0)
    
    console.log('siguiente: ',count)
    const pic = `/images/${count+1}.jpg`
    console.log('Picture:',pic)
    return (
        <>
        <div className='content'>

            <img className='responsive' src={pic} alt=""/>
            <div>
                <h1>Feliz dia de las Madres</h1>
                <p>
                    {messages[count]}
                </p>
            </div>
        

        </div>
        <div>
               { count >= 1  ?  
               <button onClick={ (prevCount => setCount(prevCount => prevCount - 1)) } >Back</button> 
               : null}
               { count < 10 ?
               <button onClick={ (prevCount => setCount(prevCount => prevCount + 1)) } >Next</button>
               : null}
        </div>
        </>
    )
}

export default Content