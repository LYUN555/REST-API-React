export default function CounterResetButton({ resetMethod }) {
    return (
        <div className="Counter">
            <button className="resetButton" onClick={resetMethod}>
                Reset
            </button>
        </div>
    );
}