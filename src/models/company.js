import { string, bool } from 'prop-types';
import faunaModel from './fauna-model';

export default faunaModel({
  name: string.isRequired,
  isClient: bool.isRequired,
  siren: string.isRequired,
  iban: string.isRequired,
});
