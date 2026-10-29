import { use, useState } from "react"

export default function Bowler(){

    const [balls, setBalls] = useState(0);
    const [wide, setWide] = useState(0);
    const [noball, setNoball] = useState(0);
    const [extraruns, setExtraruns] = useState(0)
    

    const handleBall = () => {
        const updateBalls = balls + 1;
        setBalls(updateBalls)
    }
    const handleWide = () => {
        const updateBalls = balls + 1;
        setBalls(updateBalls);
        const updatewide = wide + 1;
        setWide(updatewide);
        const updateExtraRuns = extraruns + 1;
        setExtraruns(updateExtraRuns);
    }
    const handleNoBall = () => {
        const updateBalls = balls + 1;
        setBalls(updateBalls);
        const updateNoBall = noball + 1;
        setNoball(updateNoBall);
        const updateExtraRuns = extraruns + 1;
        setExtraruns(updateExtraRuns);
    }
    
    const bowlerStyle = {
        border:'2px solid yellow',
        marginTop: '20px'
    }
    return (
        <div style={bowlerStyle}>
            <h3 style={{
                backgroundColor:'green',
                padding:'10px',
                color:'white'

            }}>Bowler: Sachin Tendulkar</h3>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px'
            }}>
            <p style={{
                
                color: 'white',
                padding:'8px',
                borderRadius: '5px',
                fontSize: '20px',
                border: '1px solid gray'
            }}> <span>Wide Ball:</span> {wide} </p>
            <p style={{
                
                color: 'white',
                padding:'8px',
                borderRadius: '5px',
                fontSize: '20px',
                border: '1px solid gray'
            }}>No Ball: {noball} </p>
            <p style={{
                
                color: 'white',
                padding:'8px',
                borderRadius: '5px',
                fontSize: '20px',
                border: '1px solid gray'
            }}>Extra Runs: {extraruns} </p>
            </div>
            <h1>Ball count: {balls} </h1>

            <button onClick={handleBall}>Add Ball</button>
            <button onClick={handleWide} >Wide Ball</button>
            <button onClick={handleNoBall} >No Ball</button>
        </div>
    )
}