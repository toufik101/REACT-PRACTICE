import Timer from "./Components/Timer"
import WindowResize from "./Components/WindowResize"

function App() {
  return (
    < >
    <div className=" bg-blue-200 flex flex-col items-center justify-center h-screen">
      <Timer/>
      <WindowResize/>
    </div>
    </>
  )
}

export default App
