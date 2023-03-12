/* eslint-disable import/no-cycle */
import dark from './dark';
import { Colors } from '../../types';
import baseTheme from '../baseTheme';

const gaming = {
  ...baseTheme,
  colors: { dark, light: {} as Colors },
};

export default gaming;
