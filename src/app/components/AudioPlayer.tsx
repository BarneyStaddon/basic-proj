"use client";

import React, { useState } from "react";

interface AudioPlayer {
  data: any;
}

const AudioPlayer: React.FC<AudioPlayer> = ({ data }) => {
  return (
    <figure>
        <figcaption>Play here</figcaption>
        <audio controls src="http://167.172.56.234:8000/stream.mp3"></audio>
    </figure>
  );
};

export default AudioPlayer;