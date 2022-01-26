import React from 'react';
import { Card, Button,   } from 'react-bootstrap';

function Profile() {
  return <div>
      <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Information Channel</Card.Title>
    <Card.Text>
      Welcome to gaming site Channel nm 25
      address NewYork
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
  </div>;
}

export default Profile;
