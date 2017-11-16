import React from 'react'
import { Card } from 'semantic-ui-react'

import GameCard from './GameCard'

export default function GamesList ({ games, deleteGame  }) {

    const emptyMessage = (
        <p> there is no games </p>
    )

    const gamesList = (
        <Card.Group itemsPerRow={3}>
        {games.map(game => <GameCard game={game} key={game._id} deleteGame={deleteGame}/>)}
        </Card.Group>
    )
    return (

        <div>
            {games.length === 0 ? emptyMessage : gamesList}
         </div>
    )
}

