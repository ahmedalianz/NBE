import FingerPrint from './FingerPrint/FingerPrint';
import {registerSheet} from 'react-native-actions-sheet';

/**
 * Registering the sheets here because otherwise sheet closes on
 * hot reload during development.
 */
registerSheet('fingerprint', FingerPrint);
// registerSheet('example-sheet', ExampleSheet);
// registerSheet('example-two', ExampleTwo);
export {};
