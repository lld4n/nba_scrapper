import {
  boxscorescontent,
  boxscoresinfo,
  boxscoresmeta,
  boxscorespbp,
  boxscoresplusminus,
  boxscoresshotchart,
  coacheslist,
  draftlist,
  draftpages,
  leagueslist,
  leaguespages,
  leaguesyears,
  logos,
  otheractualseason,
  othersearch,
  playersalphabet,
  playersgamelog,
  playersinfo,
  playerslist,
  playerspages,
  playersshooting,
  playerssplits,
  playoffslist,
  teamsinfo,
  teamslist,
  teamslogos,
  teamspages,
  teamsyears,
} from './api';
import { responseType } from './@types/response';
import express from 'express';
import { masteamspages } from './mas';

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

app.get('/teams/:key/pages/:path', async (req, res) => {
  try {
    const response = await teamspages(req.params.key, req.params.path);
    res.send(response);
  } catch (error) {
    const response: responseType = {
      OK: false,
      error,
    };
    res.status(500).send(response);
  }
});

app.get('/teams/:key/years/:year/:path', async (req, res) => {
  try {
    const response = await teamsyears(req.params.key, req.params.year, req.params.path);
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

app.get('/boxscores/info/:path', async (req, res) => {
  try {
    const response = await boxscoresinfo(req.params.path);
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

app.get('/boxscores/meta/:path', async (req, res) => {
  try {
    const response = await boxscoresmeta(req.params.path);
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

app.get('/boxscores/content/:path', async (req, res) => {
  try {
    const response = await boxscorescontent(req.params.path);
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

app.get('/boxscores/pbp/:path', async (req, res) => {
  try {
    const response = await boxscorespbp(req.params.path);
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

app.get('/boxscores/shot-chart/:path', async (req, res) => {
  try {
    const response = await boxscoresshotchart(req.params.path);
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

app.get('/boxscores/plus-minus/:path', async (req, res) => {
  try {
    const response = await boxscoresplusminus(req.params.path);
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

app.get('/leagues/list', async (req, res) => {
  try {
    const response = await leagueslist();
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

app.get('/leagues/pages/:path', async (req, res) => {
  try {
    const response = await leaguespages(req.params.path);
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

app.get('/leagues/years/:year/:path', async (req, res) => {
  try {
    const response = await leaguesyears(req.params.year, req.params.path);
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

app.get('/draft/list', async (req, res) => {
  try {
    const response = await draftlist();
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

app.get('/draft/:path', async (req, res) => {
  try {
    const response = await draftpages(req.params.path);
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

app.get('/draft/:path', async (req, res) => {
  try {
    const response = await draftpages(req.params.path);
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

app.get('/coaches/:path', async (req, res) => {
  try {
    const response = await coacheslist(req.params.path);
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

app.get('/playoffs/list', async (req, res) => {
  try {
    const response = await playoffslist();
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
