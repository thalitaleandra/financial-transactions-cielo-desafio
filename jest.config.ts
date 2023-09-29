export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__tests__/__mocks__/fileMock.ts',
        '\\.(css|less|scss)$': '<rootDir>/src/__tests__/__mocks__/styleMock.ts',
    },
    modulePathIgnorePatterns: ['<rootDir>/src/__tests__/__mocks__']
}