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

// export const findCourses = async (filter: {
//   isOnline?: string
//   startDate?: string
// }): Promise<Document<unknown, any, Ioperation>[]> => {
//   const { isOnline, startDate } = filter
//   switch (true) {
//     case isOnline !== undefined && startDate !== undefined:
//       return await Course.find({
//         isOnline: isOnline === 'true',
//         startDate: {
//           $lte: new Date(),
//         },
//       })
//     case isOnline !== undefined:
//       return await Course.find({
//         isOnline: isOnline === 'true',
//       })
//     case startDate !== undefined:
//       return await Course.find({
//         startDate: {
//           $lte: new Date(),
//         },
//       })
//     default:
//       return await Course.find()
//   }
// }

// export const findCoursesWithLimitSortSelect = async (
//   limit: number,
//   key: string,
//   keys: string[],
//   desc: boolean
// ): Promise<Document<unknown, any, Ioperation>[]> => {
//     const select: any = {}
//     for(const key of keys) {
//         select[key] = 1
//     }
//   return await Course.find()
//     .limit(limit)
//     .sort({ [key]: desc ? -1 : 1 })
//     .select(select)
// }
