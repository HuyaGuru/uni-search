import React, { Suspense, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import UniPage from "./UniPage"
import Loading from "./Loading";

// components
const Home = React.lazy(() => import("./Home"))
const UniList = React.lazy(() => import("./UniList"))

const App = () => {
  //selectors
  const country = useSelector(state => state.data.country)

  //states
  const [options, setOptions] = useState(["india", "germany", "canada", "russian federation", "united states"])
  if (!options.includes(country) && country !== "") {
    setOptions([...options, country])
  }

  //dispatch
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const handleChange = (e) => {
    dispatch({ type: "data/setCountry", payload: e.target.value })
    navigate(`/${e.target.value}`)
  }
  const handleClick = () => {
    navigate("/")
  }
  return (
    <>
      <header className="main-header">
        <button onClick={handleClick}>
          <h1>Uni Search</h1>
        </button>
      </header>
      <div className="main-grid-container">
        <div className="side-nav">
          <div className="choice">
            <label htmlFor="country" className="country-label">Country :</label>
            <select value={country} onChange={handleChange} name="country" id="country" className="country-select">
              {options.map((item, index) => {
                return (
                  <option value={item} key={index}>{item}</option>
                )
              })}
            </select>
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path={`/`} element={<Home />} />
            <Route path={`/:country`} element={<UniList />} />
            <Route path={`/:country/:uniId`} element={<UniPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
export default App;
