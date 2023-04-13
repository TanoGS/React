import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <>
        <TwitterFollowCard  userName="Vader"  name = "Lord Vader" />
        <TwitterFollowCard  userName="Obi"  name = "Obi-Wan Kenobi" />
        <TwitterFollowCard  userName="Vader"  name = "Lord Vader" />
        </>
    )
}