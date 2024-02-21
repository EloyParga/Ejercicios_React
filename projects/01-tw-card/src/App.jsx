import './App.css'
import { TwitterFolowCard } from './TwitterFolowCard'

export function App (){
     
    return (
        <section className='App'>
            <TwitterFolowCard userName="darthmaul"  >
                Darth Maul
            </TwitterFolowCard>

            <TwitterFolowCard userName="darthvader" >
                Darth Vader
            </TwitterFolowCard>

            <TwitterFolowCard userName="starwars" >
                El Imperio Sith
            </TwitterFolowCard>
            
        </section>
    )
}