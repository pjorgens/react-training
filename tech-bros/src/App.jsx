import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react"
import { getDailyPerformance } from "./services/alphaVantageService"

function App() {

  const data = getDailyPerformance("AAPL");
  console.log(data)

  return (
    <header>
      <SignedOut>
        <SignIn></SignIn>
      </SignedOut>

      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </header>
  )
}

export default App
