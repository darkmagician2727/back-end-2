const express = require('express');

const cors = require('cors');

const app = express();

const houseController = require('./controller');




app.use(express.json());

app.use(cors());

app.get('/api/houses', houseController.getHouses);
app.post('/api/houses', houseController.createHouse);
app.put('/api/houses/:id', houseController.updateHouse);
app.delete('/api/houses/:id', houseController.deleteHouse);


app.listen(4004, () => console.log('Server is running on port 4004'))