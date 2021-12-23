import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

const UniPage = () => {
    //selectors
    const data = useSelector(state => state.data.value)

    //dispatch
    const dispatch = useDispatch()

    // params
    const { country, uniId } = useParams()

    //navigate
    const navigate = useNavigate()

    //variables
    const uniData = data[uniId]
    const loading = data.length > 0 ? false : true

    //states
    const [isLoading, setLoading] = useState(loading)

    //useEffect
    useEffect(() => {
        if (data.length === 0) {
            setLoading(true)
            fetch(`http://universities.hipolabs.com/search?country=${country}`).then(response => response.json()).then(jsObject => {
                dispatch({ type: "data/setData", payload: jsObject })
                setLoading(false)
            })
            dispatch({ type: "data/setCountry", payload: country })
        }
    }, [country, data.length, dispatch])

    //functional event handlers
    const handleClick = () => {
        navigate(`/${country}`)
    }
    return (
        <main className="main-content">
            <button className="back" onClick={handleClick}>
                Back
            </button>
            {isLoading && <Loading />}
            {!isLoading &&
                <div className="uni-page">
                    <h1 className="uni-title">{uniData.name}</h1>
                    <p className="uni-text">Location:{" "}
                        {uniData["state-province"] &&
                            <>
                                {uniData["state-province"]}, {uniData["country"]}
                            </>}
                        {!uniData["state-province"] &&
                            <>
                                {uniData["country"]}
                            </>}
                    </p>
                    <p className="uni-text">Website: <a href={uniData["web_pages"]}>{uniData["web_pages"]}</a></p>
                </div>}
        </main>
    )
}

export default UniPage;