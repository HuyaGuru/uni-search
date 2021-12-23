import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "./Loading"

const UniList = () => {
    //params
    const { country } = useParams()

    //selectors
    const data = useSelector(state => state.data.value)

    //dispatch
    const dispatch = useDispatch()

    //states
    const [isLoading, setLoading] = useState(true)

    //useEffect
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal
        setLoading(true)
        fetch(`http://universities.hipolabs.com/search?country=${country}`, {
            signal
        }).then(response => response.json()).then(jsObject => {
            dispatch({ type: "data/setData", payload: jsObject })
            setLoading(false)
        }).catch((err) => {
            if (err.name === 'AbortError') {
                console.log()
            }
            else {
                console.error(err)
            }
        })
        dispatch({ type: "data/setCountry", payload: country })

        return () => {
            controller.abort()
        }
    }, [country, dispatch])

    const navigate = useNavigate()
    const handleClick = (index) => {
        navigate(`/${country}/${index}`)
    }
    return (
        <main className="main-content">
            <div className="cards">
                {isLoading &&
                    <Loading />
                }
                {!isLoading && <>
                    {data.map((item, index) => {
                        return (
                            <button className="card" key={index} onClick={() => handleClick(index)}>
                                <h3 className="card-title">{item.name}</h3>
                            </button>
                        )
                    })}
                </>
                }
            </div>
        </main>
    )
}
export default UniList;