import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default function GameCard({ game, deleteGame }) {
    return (
        <Card>
            <Image>
                <img src={game.cover} />
            </Image>
            <Card.Content>
                <Card.Header>
                    {game.title}
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/game/${game._id}`}  >
                  <Button basic color='green'>
                    Edit
                  </Button>
                </Link>
                  <Button basic color='red' onClick={() => deleteGame(game._id)}>
                    Delete
                  </Button>
            </Card.Content>
        </Card>
    )
}