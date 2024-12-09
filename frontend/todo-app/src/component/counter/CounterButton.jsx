import{PropTypes} from 'prop-types'

export default function CounterButton({by, incrementMethod, decrementMethod}) {
    //[0,f]
    

    // function incrementCounterFunction() {
    //     incrementMethod(by)
    // }

    function decrementCounterFunction(){
        decrementMethod(by)
    }

    return(
        <div className="Counter">
            <button className="counterButton" 
                    onClick={() => incrementMethod (by)}
                    >+{by}</button>
            <button className="counterButton" 
                    onClick={() => decrementCounterFunction (by)}
                    >-{by}</button>
        </div>
    )
}

CounterButton.protoTypes = {
    by: PropTypes.number
}

