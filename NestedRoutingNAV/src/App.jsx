import { Outlet } from "react-router";
import Nav from "./Components/Nav";
function App() {
  return (
    <>
      <Nav />
      <main className="flex h-screen items-center justify-center">
        <Outlet />
      </main>
    </>
  );
}

export default App;
