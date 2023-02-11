import { Colors } from '../../types';
import baseTheme from '../baseTheme';
import dark from './dark';

const gaming = {
  ...baseTheme,
  colors: { dark, light: {} as Colors },
};

export default gaming;
