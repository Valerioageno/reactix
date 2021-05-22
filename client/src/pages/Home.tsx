import React from 'react'
import Counter from '../components/Counter'
import Link from '../components/Link'

const Home: React.FC = () => {
   return (
      <>
         <div className='wrapper'>
            <h1>
               Hello from
               <br />
               Reactix
            </h1>
            <p>React (SSR) project powered by actix backend and graphql</p>
            <Counter />
            <Link link='https://github.com/Valerioageno/reactix'>Repo</Link>
         </div>
      </>
   )
}

export default Home
