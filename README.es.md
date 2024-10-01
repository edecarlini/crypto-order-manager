# Challenge Rather Labs

![Licencia](https://img.shields.io/badge/licencia-MIT-blue.svg)

## Tabla de Contenidos

- [Introducción](#introducción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Pruebas](#pruebas)
- [Construcción](#construcción)
- [Contribuyendo](#contribuyendo)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Introducción

**Challenge Rather Labs** es una aplicación web desarrollada con **React**, **Vite** y **TypeScript**, diseñada para gestionar órdenes relacionadas con criptomonedas. Permite a los usuarios crear, visualizar y gestionar órdenes, obteniendo precios en tiempo real desde una API de criptomonedas.

### Estructura del Proyecto

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

## Características

- **Crear Órdenes:** Los usuarios pueden crear nuevas órdenes seleccionando una criptomoneda, especificando la cantidad y estableciendo una fecha de expiración.
- **Ver Órdenes:** Muestra una lista de todas las órdenes con detalles como criptomoneda, cantidad, precio total y fecha de expiración.
- **Editar Órdenes:** Los usuarios pueden editar órdenes existentes para actualizar sus detalles.
- **Eliminar Órdenes:** Los usuarios pueden descartar órdenes que ya no necesitan.
- **Obtención de Precios en Tiempo Real:** Integra con una API de criptomonedas para obtener precios en tiempo real.

## Tecnologías Utilizadas

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

- **Otros:**
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

## Instalación

### Prerrequisitos

- **Node.js** (v14 o superior)
- **npm** (v6 o superior) o **yarn**

### Pasos

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/edecarlini/challenge-ratherlabs.git
   cd challenge-ratherlabs
   ```

2. **Instalar Dependencias**

   Usando npm:

   ```bash
   npm install
   ```

   O usando yarn:

   ```bash
   yarn install
   ```

3. **Configurar Variables de Entorno**

   Crea un archivo `.env` en el directorio raíz y añade las variables de entorno necesarias.

   ```env
   VITE_API_URL=https://api.ejemplo.com
   ```

   Reemplaza `https://api.coingecko.com/api/v3` con tu endpoint de API real.

## Docker

Puedes levantar este proyecto ejecutando:

```bash
docker-compose up --build
```

y el proyecto estará disponible instalando las dependencias y configuraciones necesarias para que funcione correctamente.

Al finalizar estará disponible en:

```bash
localhost:3000
```

Si quieres detener el contenedor:

```bash
docker-compose down
```

## Uso

### Servidor de Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

O usando yarn:

```bash
yarn dev
```

La aplicación estará disponible en `http://localhost:5173` por defecto.

### Construcción para Producción

Para construir la aplicación para producción, ejecuta:

```bash
npm run build
```

O usando yarn:

```bash
yarn build
```

Los artefactos de la construcción se almacenarán en el directorio `dist/`.

### Previsualizar la Construcción de Producción

Para previsualizar la construcción de producción localmente, ejecuta:

```bash
npm run preview
```

O usando yarn:

```bash
yarn preview
```

## Pruebas

El proyecto utiliza **Jest** para realizar pruebas. Las pruebas están escritas utilizando **React Testing Library**.

### Ejecutar Pruebas

Para ejecutar todas las pruebas, ejecuta:

```bash
npm run test
```

O usando yarn:

```bash
yarn test
```

### Configuración de las Pruebas

El proyecto utiliza Jest con `ts-jest` para soporte de TypeScript. La configuración de Jest está definida en `jest.config.cjs`.

### Escribir Pruebas

Las pruebas se encuentran en el directorio `src/test/`. Puedes crear nuevos archivos de prueba siguiendo el patrón `NombreComponente.test.tsx`.

## Construcción

El proceso de construcción está manejado por **Vite** y **TypeScript**.

Para crear una construcción para producción, usa:

```bash
npm run build
```

O usando yarn:

```bash
yarn build
```

Esto generará archivos optimizados y minificados en el directorio `dist/`.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

---

### **Notas Adicionales:**

- **Alias de Paths (`@/`):** La configuración de alias permite importar módulos desde la carpeta `src/` utilizando `@/` como prefijo, lo que simplifica las rutas de importación.

- **Configuración de Jest:** La configuración de Jest está ajustada para manejar TypeScript, React y los path aliases definidos en `tsconfig.app.json`.

### **Contacto**

Para cualquier duda o sugerencia, por favor abre una [issue](https://github.com/edecarlini/membrane-frontend-cc/issues) o contacta al mantenedor del proyecto.
