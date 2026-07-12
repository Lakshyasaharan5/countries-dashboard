import { useParams } from "react-router"

export default function DetailedView() {
    const params = useParams();
    return (
        <h1>Detailed View for {params.country}</h1>
    )
}