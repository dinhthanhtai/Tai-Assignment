import { connect } from "react-redux"
import TipSelect from "../components/TipSelect"
import { updateTip } from "../store/tip-percentage/actions"

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTip: (tipPercentage) => {
            dispatch(updateTip(tipPercentage))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        tipPercentage: state.tipPercentage
    }
}

export const TipSelectContainer = connect(mapStateToProps, mapDispatchToProps)(TipSelect);