import { Ioperation } from '../interfaces/operation'
import { AccountOperation } from '../models/operation'
import { Document } from 'mongoose'

export const createOperation = async (
  doc: Ioperation
): Promise<Document<unknown, any, Ioperation>> => {
  const accountOperation = new AccountOperation(doc)
  return await accountOperation.save()
}

export const findAccountOperation = async (
  accountNumber: number
): Promise<Document<unknown, any, Ioperation>[] | null> => {
  return await AccountOperation.find({accountNumber: accountNumber})
}

