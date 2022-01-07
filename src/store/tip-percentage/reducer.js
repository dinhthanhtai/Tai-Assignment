import { TIP_PERCENTAGE_UPDATED } from "../constant";

const initialPercentage = 20;

export const reducer = (state = initialPercentage, action) => {
    const {type, payload} = action;
    if (type === TIP_PERCENTAGE_UPDATED) {
        return payload;
    }

    return state;
}

export default reducer;