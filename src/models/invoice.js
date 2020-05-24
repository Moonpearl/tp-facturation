import { number, string } from 'prop-types';
import faunaModel from './fauna-model';

export default faunaModel({
  createdAt: string.isRequired,
  due: string.isRequired,
  time: number.isRequired,
  unit: string.isRequired,
  rate: number.isRequired,
  accountant: string.isRequired,
  client: string.isRequired,
});
