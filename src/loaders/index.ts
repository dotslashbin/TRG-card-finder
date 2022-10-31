import cors from 'cors';
import expressLoader from './Routes';
// import helmet from 'helmet'
// import mongoose from 'mongoose'

/**
 * A function that loads the middlewares for express AND express itself
 * @param expressApp
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, func-names
export default async function (expressApp: any): Promise<any> {
  // Middlewares
  // expressApp.use()

  expressApp.use(cors());

  // Express
  await expressLoader({ app: expressApp });
}
