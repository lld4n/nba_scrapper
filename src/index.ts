import {
  logos,
  otheractualseason,
  othersearch,
  playersalphabet,
  playersawards,
  playerscontract,
  playersfaq,
  playersgamelog,
  playersinfo,
  playerslist,
  playerspages,
  playersshooting,
  playerssplits,
  playerstransactions,
  teamsinfo,
  teamslist,
  teamslogos,
} from './api';
import { responseType } from './@types/response';
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/other/actualseason', async (req, res) => {
  try {
    const response = await otheractualseason();
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/other/search/:key', async (req, res) => {
  try {
    const response = await othersearch(req.params.key);
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/players/list', async (req, res) => {
  try {
    const response = await playerslist();
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/players/:alphabet', async (req, res) => {
  try {
    let response;
    if (req.params.alphabet.includes('shooting')) {
      response = await playersshooting(req.params.alphabet, '', '');
    } else {
      response = await playersalphabet(req.params.alphabet);
    }
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/players/:alphabet/:path/info', async (req, res) => {
  try {
    const response = await playersinfo(req.params.alphabet, req.params.path);
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/players/:alphabet/:path/awards', async (req, res) => {
  try {
    const response = await playersawards(req.params.alphabet, req.params.path);
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/players/:alphabet/:path/transactions', async (req, res) => {
  try {
    const response = await playerstransactions(req.params.alphabet, req.params.path);
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/players/:alphabet/:path/contract', async (req, res) => {
  try {
    const response = await playerscontract(req.params.alphabet, req.params.path);
    res.send(response);
  } catch (error) {
    console.log(error);
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/players/:alphabet/:path/faq', async (req, res) => {
  try {
    const response = await playersfaq(req.params.alphabet, req.params.path);
    res.send(response);
  } catch (error) {
    console.log(error);
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/players/:alphabet/:path/pages/:key', async (req, res) => {
  try {
    const response = await playerspages(req.params.alphabet, req.params.path, req.params.key);
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/players/:alphabet/:path/splits/:key', async (req, res) => {
  try {
    const response = await playerssplits(req.params.alphabet, req.params.path, req.params.key);
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/players/:alphabet/:path/gamelog/:key', async (req, res) => {
  try {
    const response = await playersgamelog(req.params.alphabet, req.params.path, req.params.key);
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/players/:alphabet/:path/shooting/:key', async (req, res) => {
  try {
    const response = await playersshooting(req.params.alphabet, req.params.path, req.params.key);
    res.send(response);
  } catch (error) {
    console.log(error);
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/teams/list', async (req, res) => {
  try {
    const response = await teamslist();
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/teams/:key', async (req, res) => {
  try {
    const response = await teamsinfo(req.params.key);
    res.send(response);
  } catch (error) {
    console.log(error);
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/teams/:key/logos', async (req, res) => {
  try {
    const response = await teamslogos(req.params.key);
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/logos/:key', async (req, res) => {
  try {
    const response = await logos(req.params.key);
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.use((req, res) => {
  // console.log(req.path);
  const response: responseType = {
    OK: false,
  };
  res.status(444).send(response);
});

app.listen(PORT, () => {
  console.log('working ' + PORT);
});
