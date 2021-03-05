import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoPlayer from './pages/VideoPlayer';
import Home from './pages/Home';
import MusicPlayer from './pages/MusicPlayer';

export default function Routes(){
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/videoplayer" component={ VideoPlayer } />
      <Route path="/musicplayer" component={ MusicPlayer } />
      
    </Switch>
    </BrowserRouter>
  );
}