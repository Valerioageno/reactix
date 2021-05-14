import './styles/index.scss'
import logo from './logo.svg'
import Counter from './components/Counter'

export default function App() {
    return(
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="wrapper">
                <h1>Hello from<br />Reactix</h1>
                <p>React (SSR) project powered by actix backend and graphql</p>
                <Counter />
            </div>
        </>
    )
}
