import { Link, useLocation } from "react-router";

function DetailView() {
    const location = useLocation();

    const country = location.state?.country;

    if (!country) {
        return (
            <div>
                <p>Country data is unavailable.</p>
                <Link to="/">Back</Link>
            </div>
        );
    }

    return (
        <div>
            <Link to="/">← Back</Link>

            <h1>{country.names.common}</h1>
            <p>Capital: {country.capitals[0]?.name ?? "-"}</p>
            <p>Region: {country.region}</p>
            <p>Area: {country.area.miles}</p>
            <p>Population: {country.population}</p>
            <p>
                Density:{" "}
                {(country.population / country.area.miles).toFixed(2)}
            </p>
        </div>
    );
}

export default DetailView;