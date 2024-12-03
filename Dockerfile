# Използваме официалния Node.js image като база
FROM node:18-alpine

# Създаваме работна директория в контейнера
WORKDIR /app

# Копираме package.json и package-lock.json
COPY package*.json ./

# Инсталираме зависимостите
RUN npm install

# Копираме останалите файлове от проекта
COPY . .

# Отваряме порт 3000
EXPOSE 3000

# Стартираме приложението
CMD ["node", "src/app.js"]
