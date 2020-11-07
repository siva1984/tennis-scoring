FROM node:14

WORKDIR /home/tennis-scoring

COPY test /home/tennis-scoring/test
COPY index.js /home/tennis-scoring
COPY Match.js /home/tennis-scoring
COPY package-lock.json home/tennis-scoring
COPY package.json home/tennis-scoring
COPY Player.js home/tennis-scoring

RUN npm install

CMD npm start