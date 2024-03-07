import { Route, Routes } from "react-router-dom"

export default function App () {
return (
  <div>
    <h1>React Routre</h1>
    <Routes>
     <Route path="/" element={<div>Home page</div>}/>
    </Routes>
  </div>
)
}
