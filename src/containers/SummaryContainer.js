import { connect } from "react-redux";
import Summary from "../components/Summary";
import { selectSubtotal, selectTipAmount, selectTotal } from "../store/items/selectors";

const mapStateToProps = (state, ownProps) => {
    const subTotal = selectSubtotal(state)
    const tipAmount = selectTipAmount(state);
    const total = selectTotal(state)

    return {
        subTotal, 
        tipAmount,
        total
    }
}

export const SummaryContainer = connect(mapStateToProps)(Summary)