import React from 'react'
import { Card,Image} from 'react-bootstrap'
import { AppProps } from '../types';
import { captilize } from '../utiles/functions';

const UserBubbles = ({user,AddToGroup}:AppProps) => {
    const name = captilize(`${user?.firstName} ${user?.lastName}`);
  return (
    <Card
    className="mb-3 p-2 cardG"
    onClick={()=>AddToGroup && AddToGroup(user)}
  >
    <div className="d-flex gap-3">
      <Image
        roundedCircle
        style={{ width: "50px", height: "50px" }}
        src={user?.ImgUrl}
      />
      <div className="mt-2">
        <Card.Title className="text-dark">{name}</Card.Title>
      </div>
    </div>
  </Card>
  )
}

export default UserBubbles