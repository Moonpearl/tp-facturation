import { shape, number } from 'prop-types';
import ref from './ref';

export default (data) => shape({
  ref,
  ts: number.isRequired,
  data: shape(data).isRequired,
}).isRequired;
