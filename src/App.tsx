import { api_data, regions } from "./lib/data"
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_RESTCOUNTRIES_API_KEY;

function App() {
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");
    const [countries, setCountries] = useState<any[]>([]);


    useEffect(() => {
        // const loadCountries = async () => {
        //     const response = await fetch(
        //         'https://api.restcountries.com/countries/v5?limit=100&response_fields=names.common,capitals,population,area,region',
        //         { headers: { 'Authorization': `Bearer ${API_KEY}` } }
        //     );
        //     const json = await response.json();
        //     setCountries(json.data.objects);
        // }
        // loadCountries();
        setCountries(api_data.data.objects);
    }, []);

    const totalCountries = countries.length;
    let maxPopulation = 0;
    let maxArea = 0 // miles
    let maxPopulatedCountry = "";
    let largestCountry = "";
    for (let i = 0; i < totalCountries; i++) {
        const currCountry = countries[i];
        if (currCountry.population > maxPopulation) {
            maxPopulation = currCountry.population;
            maxPopulatedCountry = currCountry.names.common;
        }
        if (currCountry.area.miles > maxArea) {
            maxArea = currCountry.area.miles;
            largestCountry = currCountry.names.common;
        }
    }

    //filter
    const visibleCountries = countries.filter((value) =>
        value.names.common.toLowerCase().includes(search.toLowerCase())
        &&
        value.region.toLowerCase().includes(region.toLowerCase())
    );

    return (
        <div className="min-h-screen">
            <div className="max-w-5xl mx-auto px-4 flex flex-col gap-5">
                <h1 className="text-2xl font-bold text-center">Countries data dashboard</h1>
                <div className="flex gap-5 text-center">
                    <div className="flex-1">
                        <h2>Total Countries</h2>
                        <h4>{totalCountries}</h4>
                    </div>
                    <div className="flex-1">
                        <h2>Most Populated Country</h2>
                        <h4>{maxPopulatedCountry}</h4>
                    </div>
                    <div className="flex-1">
                        <h2>Largest Country</h2>
                        <h4>{largestCountry}</h4>
                    </div>
                </div>
                <div className="flex gap-5 justify-center">
                    <input
                        className="border rounded-sm"
                        type="text"
                        value={search}
                        placeholder="Search country"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select
                        className="border rounded-sm"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                    >
                        <option value="">Select region</option>
                        {regions.map((value) => <option key={value} value={value}>{value}</option>)}
                    </select>
                </div>
                <table className="text-center">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Capital</th>
                            <th>Region</th>
                            <th>Area (miles)</th>
                            <th>Population</th>
                            <th>Density (pop/area)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            visibleCountries.map((value) =>
                                <tr key={value.names.common}>
                                    <td>{value.names.common}</td>
                                    <td>{value.capitals[0]?.name ?? "-"}</td>
                                    <td>{value.region}</td>
                                    <td>{value.area.miles}</td>
                                    <td>{value.population}</td>
                                    <td>{(value.population / value.area.miles).toFixed(2)}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default App