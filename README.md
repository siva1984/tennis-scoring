# Tennis Scoring
This is a NodeJS simulation of a 1-set tennis match

## Run NodeJS App
To install NodeJS dependencies do:  

```bash
npm install
```

To run tests do:

```bash
npm test
```

To run a simulated tennis scoring match do:

```bash
npm start
```

## Run in Docker
To build the image do:

```bash
docker build -t tennis-scoring .
```

To run tests in the container do:

```bash
docker run tennis-scoring sh -c "npm test"
```

To run the container do:

```bash
docker run tennis-scoring
```
