import { model, Schema } from "mongoose"
import { Ioperation } from "../interfaces/operation"

const AccountOperationSchema = new Schema<Ioperation>({
    accountNumber: { type: Number, required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    date: {type: Date, default: Date.now},
    intress: Number || null,
    payments: Number || null,
})

export const AccountOperation = model<Ioperation>('AccountOperation', AccountOperationSchema)
