import { useParams } from "react-router-dom"

function City() {
    const {id} = useParams()
    return (
        <div>
            City {id}
        </div>
    )
}

export default City
