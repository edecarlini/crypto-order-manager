// jest.config.cjs
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1', // Agregado para paths absolutos
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
