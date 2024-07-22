import '@testing-library/jest-dom';

// Define TextDecoder and TextEncoder
global.TextDecoder = require('util').TextDecoder;
global.TextEncoder = require('util').TextEncoder;

// Mock firebase/auth if needed
jest.mock('firebase/auth', () => require('./src/__mocks__/firebaseMock'));
