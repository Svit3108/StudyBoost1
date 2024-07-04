# Stage 1: Node.js-Basisimage zum Bauen der App
FROM node:lts as build-stage

# Arbeitsverzeichnis im Container festlegen
WORKDIR /app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm ci

# Quellcode kopieren
COPY . .

# Anwendung bauen
RUN npm run build

# Stage 2: Nginx zum Ausführen der App
FROM nginx:alpine as production-stage

# Gebaute Dateien kopieren
COPY --from=build-stage /app/build /usr/share/nginx/html

# Nginx-Konfigurationsdatei hinzufügen (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Standardmäßig verwendet Nginx Port 80
EXPOSE 80

# Nginx im Vordergrund laufen lassen
CMD ["nginx", "-g", "daemon off;"]
