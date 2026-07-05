
function App() {
    return (
        <div className="min-h-screen">
            <div className="max-w-5xl mx-auto px-4 flex flex-col gap-5">
                <h1 className="text-2xl font-bold text-center">Countries data dashboard</h1>
                <div className="flex gap-5 text-center">
                    <div className="flex-1">total countries</div>
                    <div className="flex-1">max population</div>
                    <div className="flex-1">max area</div>
                </div>
                <div className="flex gap-5 justify-center">
                    <input className="border rounded-sm" type="text" placeholder="Search country" />
                    <select className="border rounded-sm">
                        <option value="">select region</option>
                        <option value="europe">europe</option>
                        <option value="asia">asia</option>
                    </select>
                </div>
                <table className="text-center">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Capital</th>
                            <th>Region</th>
                            <th>Area</th>
                            <th>Population</th>
                            <th>Density</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>India</td>
                            <td>New Delhi</td>
                            <td>Asia</td>
                            <td>3287263</td>
                            <td>1400000000</td>
                            <td>425</td>
                        </tr>
                        <tr>
                            <td>France</td>
                            <td>Paris</td>
                            <td>Europe</td>
                            <td>551695</td>
                            <td>68000000</td>
                            <td>123</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default App