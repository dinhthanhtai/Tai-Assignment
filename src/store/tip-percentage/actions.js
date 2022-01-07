import { TIP_PERCENTAGE_UPDATED } from "../constant"

export const updateTip = (tipPercentage) => ({
    type: TIP_PERCENTAGE_UPDATED,
    payload: +tipPercentage
})