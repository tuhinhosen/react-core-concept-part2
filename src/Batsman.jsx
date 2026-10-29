import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)


    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns)
    }
    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns)
    }
    const handleSix = () => {
        const updateRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes);
        setRuns(updateRuns);
    }

    const runsStyle = {
        border: '2px solid green',
        marginTop: '20px'
    }
    return (
        <div style={runsStyle}>
            <h3>Playes : Bangla Batsman</h3>
            <p>Total Sixes : {sixes}</p>
            {
                runs >= 50 && <p>You Score : 50</p>
            }
            <h1>Score: {runs} </h1>
            <button onClick={handleSingle}>Single Run</button>
            <button onClick={handleFour}>Four Run</button>
            <button onClick={handleSix}>Six Run</button>
        </div>
    )
}