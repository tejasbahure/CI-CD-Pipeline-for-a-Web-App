FROM node:22-alpine

WORKDIR /app

# copy manifests first for better layer caching
COPY package.json package-lock.json* ./

# install only production deps for runtime image
# (if you ever get a lockfile error, temporarily change to: RUN npm install)
RUN npm ci --omit=dev

# copy app source
COPY src ./src

EXPOSE 3000
CMD ["node","src/index.js"]
