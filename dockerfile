# Dockerfile

# Fase de build
FROM node:18-alpine AS build

WORKDIR /app

# Copie apenas package.json e package-lock.json para instalar dependências
COPY package*.json ./

RUN npm install

# Agora copie o resto dos arquivos da aplicação
COPY . .

# Execute o build da aplicação
RUN npm run build

# Fase de produção
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
