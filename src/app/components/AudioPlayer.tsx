"use client";

import React, { useState } from "react";

interface AudioPlayer {
  data: any;
}

const AudioPlayer: React.FC<AudioPlayer> = ({ data }) => {
  return (
    <figure>
        <figcaption>Play here</figcaption>
        <audio controls src={data}></audio>
    </figure>
  );
};

export default AudioPlayer;