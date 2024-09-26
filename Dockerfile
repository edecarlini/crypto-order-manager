# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:stable-alpine

# Copia los archivos estáticos desde la etapa de construcción
COPY --from=build /app/dist /usr/share/nginx/html

# Copia la configuración personalizada de Nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
