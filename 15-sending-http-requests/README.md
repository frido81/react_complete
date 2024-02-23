# Section 15 - Sending Http requests

## 226 - Module Introduction

-   up until now data was in react app
-   now data is on server
-   no way to interchange data between clients without
    central server
-   connect/fetch/send

## 227 - How not to connect

-   communicate with a backend not sql
-   HTTP requests

## 228 - Starting project & dummy backend API

-

## 231 - Sendinghttp requests

-   images not loading

```
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use('/images/', express.static(path.join(__dirname, 'images')))
app.use(bodyParser.json());
```
