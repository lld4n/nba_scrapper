import {
  allstarcareerstats,
  allstarcontests,
  allstarinfo,
  allstarleadercareer,
  allstarleadersingle,
  allstarlist,
  allstarmeta,
  allstarvoting,
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
  playoffsfinalpart,
  playoffslist,
  playoffsmeta,
  playoffspages,
  playoffsyears,
  teamsinfo,
  teamslist,
  teamslogos,
  teamspages,
  teamsyears,
} from './api';
import { responseType } from './@types/response';
import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/other/actualseason', async (req: Request, res: Response) => {
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

app.get('/other/search/:key', async (req: Request, res: Response) => {
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

app.get('/players/list', async (req: Request, res: Response) => {
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

app.get('/players/:alphabet', async (req: Request, res: Response) => {
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

app.get('/players/:alphabet/:path/info', async (req: Request, res: Response) => {
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

app.get('/players/:alphabet/:path/pages/:key', async (req: Request, res: Response) => {
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

app.get('/players/:alphabet/:path/splits/:key', async (req: Request, res: Response) => {
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

app.get('/players/:alphabet/:path/gamelog/:key', async (req: Request, res: Response) => {
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

app.get('/players/:alphabet/:path/shooting/:key', async (req: Request, res: Response) => {
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

app.get('/teams/list', async (req: Request, res: Response) => {
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

app.get('/teams/:key', async (req: Request, res: Response) => {
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

app.get('/teams/:key/logos', async (req: Request, res: Response) => {
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

app.get('/teams/:key/pages/:path', async (req: Request, res: Response) => {
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

app.get('/teams/:key/years/:year/:path', async (req: Request, res: Response) => {
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

app.get('/boxscores/info/:path', async (req: Request, res: Response) => {
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

app.get('/boxscores/meta/:path', async (req: Request, res: Response) => {
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

app.get('/boxscores/content/:path', async (req: Request, res: Response) => {
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

app.get('/boxscores/pbp/:path', async (req: Request, res: Response) => {
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

app.get('/boxscores/shot-chart/:path', async (req: Request, res: Response) => {
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

app.get('/boxscores/plus-minus/:path', async (req: Request, res: Response) => {
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

app.get('/leagues/list', async (req: Request, res: Response) => {
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

app.get('/leagues/pages/:path', async (req: Request, res: Response) => {
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

app.get('/leagues/years/:year/:path', async (req: Request, res: Response) => {
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

app.get('/draft/list', async (req: Request, res: Response) => {
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

app.get('/draft/:path', async (req: Request, res: Response) => {
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

app.get('/draft/:path', async (req: Request, res: Response) => {
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

app.get('/coaches/:path', async (req: Request, res: Response) => {
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

app.get('/playoffs/list', async (req: Request, res: Response) => {
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

app.get('/playoffs/finalpart', async (req: Request, res: Response) => {
  try {
    const response = await playoffsfinalpart();
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

app.get('/playoffs/years/:year/:path', async (req: Request, res: Response) => {
  try {
    const response = await playoffsyears(req.params.year, req.params.path);
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

app.get('/playoffs/meta/:path', async (req: Request, res: Response) => {
  try {
    const response = await playoffsmeta(req.params.path);
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

app.get('/playoffs/pages/:path', async (req: Request, res: Response) => {
  try {
    const response = await playoffspages(req.params.path);
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

app.get('/allstar/list', async (req: Request, res: Response) => {
  try {
    const response = await allstarlist();
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

app.get('/allstar/leaderssingle', async (req: Request, res: Response) => {
  try {
    const response = await allstarleadersingle();
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

app.get('/allstar/leaderscareer', async (req: Request, res: Response) => {
  try {
    const response = await allstarleadercareer();
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

app.get('/allstar/contents', async (req: Request, res: Response) => {
  try {
    const response = await allstarcontests();
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

app.get('/allstar/careerstats', async (req: Request, res: Response) => {
  try {
    const response = await allstarcareerstats();
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

app.get('/allstar/meta/:path', async (req: Request, res: Response) => {
  try {
    const response = await allstarmeta(req.params.path);
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

app.get('/allstar/info/:path', async (req: Request, res: Response) => {
  try {
    const response = await allstarinfo(req.params.path);
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

app.get('/allstar/voting/:path', async (req: Request, res: Response) => {
  try {
    const response = await allstarvoting(req.params.path);
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

app.get('/logos/:key', async (req: Request, res: Response) => {
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

app.use((req: Request, res: Response) => {
  // console.log(req.path);
  const response: responseType = {
    OK: false,
  };
  res.status(444).send(response);
});

app.listen(PORT, () => {
  console.log('working ' + PORT);
});
