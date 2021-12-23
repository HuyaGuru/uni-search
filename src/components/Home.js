import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate()
    const goToFirstOption = () => {
        navigate("/india")
    }
    useEffect(() => {
        goToFirstOption()
    })
    return (
        <main className="main-content">
            <h3>Choose a Country</h3>
        </main>
    )
}
export default Home;