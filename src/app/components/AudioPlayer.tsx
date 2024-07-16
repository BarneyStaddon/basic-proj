"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

interface AudioPlayer {
  data: any;
}

const AudioPlayer: React.FC<AudioPlayer> = ({ data }) => {

  const audioElem = useRef<HTMLAudioElement | null>(null);
  const audioElem2 = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = (play: boolean) => {
    if (audioElem.current) {
      setPlaying(false)
      audioElem.current.pause();
      audioElem.current = null;
    }
    else {
      setPlaying(true)
      audioElem.current = new Audio(data);
      audioElem.current.play();
    }

  };

  return (
    <Stack spacing={2}>
       <Card variant="outlined" 
        sx={{ maxWidth: 500 }}>
        <CardContent>
            <h1><strong>Electric Dreams radio POC</strong></h1>
        </CardContent>
      </Card>
      <Card variant="outlined" 
        sx={{ maxWidth: 500 }}>
        <CardContent>
            <h1>Ephemeral audio element</h1>
            <p style={{ margin: '1rem 0 1rem'}}>This demo creates a new audio element whenever &apos;LISTEN&apos; is clicked. The audio should match the current progress of the stream </p>
            <ButtonGroup variant="contained" sx={{ m: '1rem 0 1rem' }}>
              <Button variant="contained" onClick={() => handlePlay(true)} >{playing ? 'PAUSE' : 'LISTEN'}</Button>
            </ButtonGroup>
        </CardContent>
      </Card>
      <Card variant="outlined" 
        sx={{ maxWidth: 500 }}>
        <CardContent>
            <h1>Rendered audio element</h1>
            <p style={{ margin: '1rem 0 1rem'}}>This demo uses a rendered audio element. When &apos;LISTEN&apos; is clicked - the audio will start from where the stream was when the audio element was first rendered (i.e when this page was loaded)</p>
            <div style={{ margin: '1rem 0 1rem'}} >
              <audio
                  ref={audioElem2}
                  src={data}
                  controls
                />
            </div>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default AudioPlayer;