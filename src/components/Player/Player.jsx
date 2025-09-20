import React from "react";
import { PlayerWrapper, AvatarWrapper } from "./Player.styled";
import Avatar from "react-nice-avatar";
import { Subtitle } from "../../styles/General.styled";

function Player({ player, isPlayerActive }) {

  // const config = genConfig();  
  return (
    <PlayerWrapper isPlayerActive={isPlayerActive ?? false}>
      <AvatarWrapper>
        <Avatar style={{ width: '8rem', height: '8rem' }} {...player.avatarConfig} />

      </AvatarWrapper>
      
      <Subtitle>
        {player.name} ({player.choice.toUpperCase()})
      </Subtitle>
      <Subtitle size="4rem">{player.score}</Subtitle> 
    </PlayerWrapper>
  );
}

export default Player;
