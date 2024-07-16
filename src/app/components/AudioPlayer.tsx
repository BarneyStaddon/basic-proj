"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

interface AudioPlayer {
  data: any;
}

const AudioPlayer: React.FC<AudioPlayer> = ({ data }) => {

  const audioElem = useRef<HTMLAudioElement | null>(null);
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
    <Card variant="outlined" 
          sx={{ maxWidth: 345 }}>
      <CardContent>
          <h1>Electric Dreams radio POC</h1>
          <ButtonGroup variant="contained">
            <Button variant="contained" onClick={() => handlePlay(true)} >{playing ? 'PAUSE' : 'LISTEN'}</Button>
          </ButtonGroup>
      </CardContent>
    </Card>
  );
};

export default AudioPlayer;