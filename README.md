
# Challenge Rather Labs

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Build](#build)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

**Challenge Rather Labs** is a web application developed with **React**, **Vite**, and **TypeScript**, designed to manage orders related to cryptocurrencies. It allows users to create, view, and manage orders while retrieving real-time prices from a cryptocurrency API.

### Project Structure

```
challenge-ratherlabs/
├── __mocks__/
│   └── fileMock.js
├── jest.config.cjs
├── jest.setup.cjs
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── src/
│   ├── api/
│   │   └── cryptoAPI.ts
│   │   └── queryClient.ts

│   ├── components/
│   │   └── Order/
│   │       ├── OrderForm.tsx
│   │       ├── OrderList.tsx
│   │       └── OrderListCard.tsx
│   ├── store/
│   │   └── useOrderStore.ts
│   │   └── useSnackbarStore.tsx
│   ├── styles/
│   │   └── theme.ts
│   ├── test/
│   │   ├── OrderForm.test.tsx
│   │   └── OrderFull.test.tsx
│   ├── types/
│   │   └── order.ts
│   └── utils/
│   │   └── cryptos/
│   │       ├── getCodeByCryptoId.ts
│   │       ├── referenceCrypto.ts
└── ...
```

## Features

- **Create Orders:** Users can create new orders by selecting a cryptocurrency, specifying the amount, and setting an expiration date.
- **View Orders:** Displays a list of all orders with details such as cryptocurrency, quantity, total price, and expiration date.
- **Edit Orders:** Users can edit existing orders to update their details.
- **Delete Orders:** Users can discard orders that they no longer need.
- **Real-Time Price Fetching:** Integrates with a cryptocurrency API to fetch real-time prices.

## Technologies Used

- **Frontend:**

  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Material-UI (MUI)](https://mui.com/)
  - [React Hook Form](https://react-hook-form.com/)
  - [Yup](https://github.com/jquense/yup)
  - [Zustand](https://github.com/pmndrs/zustand)
  - [Axios](https://axios-http.com/)

- **Testing:**

  - [Jest](https://jestjs.io/)
  - [ts-jest](https://kulshekhar.github.io/ts-jest/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - [@testing-library/jest-dom](https://github.com/testing-library/jest-dom)

- **Others:**
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/edecarlini/challenge-ratherlabs.git
   cd challenge-ratherlabs
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Set Environment Variables**

   Create a `.env` file in the root directory and add the necessary environment variables.

   ```env
   VITE_API_URL=https://api.example.com
   ```

   Replace `https://api.coingecko.com/api/v3` with your actual API endpoint.

## Docker

You can run this project by executing:

```bash
docker-compose up --build
```

The project will be available after installing the necessary dependencies and configurations.

It will be accessible at:

```bash
localhost:3000
```

If you want to stop the container:

```bash
docker-compose down
```

## Usage

### Development Server

To start the development server, run:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173` by default.

### Production Build

To build the application for production, run:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

To preview the production build locally, run:

```bash
npm run preview
```

Or using yarn:

```bash
yarn preview
```

## Testing

The project uses **Jest** for testing. Tests are written using **React Testing Library**.

### Run Tests

To run all tests, execute:

```bash
npm run test
```

Or using yarn:

```bash
yarn test
```

### Test Configuration

The project uses Jest with `ts-jest` for TypeScript support. Jest configuration is defined in `jest.config.cjs`.

### Writing Tests

Tests are located in the `src/test/` directory. You can create new test files following the pattern `ComponentName.test.tsx`.

## Build

The build process is managed by **Vite** and **TypeScript**.

To create a production build, use:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

This will generate optimized and minified files in the `dist/` directory.

## License

This project is licensed under the [MIT License](LICENSE).

---

### **Additional Notes:**

- **Path Aliases (`@/`):** The alias configuration allows importing modules from the `src/` folder using `@/` as a prefix, simplifying import paths.
- **Jest Configuration:** The Jest configuration is set up to handle TypeScript, React, and the path aliases defined in `tsconfig.app.json`.

### **Contact**

For any questions or suggestions, please open an [issue](https://github.com/edecarlini/membrane-frontend-cc/issues) or contact the project maintainer.
