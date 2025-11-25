import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [musteriler, setMusteriler] = useState([]);

    useEffect(() => {
        axios.get("https://10.110.110.97:5000/api/musteriler")
            .then(res => setMusteriler(res.data))
            .catch(err => console.error("API HATASI:", err));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Müşteriler</h1>
            <ul>
                {musteriler.map((m) => (
                    <li key={m.MusteriID}>{m.MusteriAdi}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
