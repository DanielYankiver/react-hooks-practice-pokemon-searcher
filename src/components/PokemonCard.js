import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, sprites, hp}) {
  const [frontSprite, setFrontSprite] = useState(true)

  function toggleImage() {
    setFrontSprite(!frontSprite)
  }
  
  return (
    <Card>
      <div>
        <div className="image">
          <img 
            onClick={toggleImage} 
            alt="oh no!" 
            src={frontSprite ? sprites.front : sprites.back} 
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
