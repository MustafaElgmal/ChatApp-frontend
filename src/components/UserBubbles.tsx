import React from 'react'
import { Card,Image} from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { AppProps } from '../types';
import { captilize } from '../utiles/functions';

const UserBubbles = ({user,AddToGroup}:AppProps) => {
    const name = captilize(`${user?.firstName} ${user?.lastName}`);
    const navigate=useNavigate()
  return (
    <Card
    className="mb-3 p-2 cardG"
    onClick={()=>{
      AddToGroup && AddToGroup(user)
      // navigate('/')
    }}
  >
    <div className="d-flex gap-3">
      <Image
        roundedCircle
        style={{ width: "50px", height: "50px" }}
        src={`${user?.ImgUrl?user.ImgUrl:'https://qidebzlwdtrdeqcmpbgl.supabase.co/storage/v1/object/sign/images/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvMzYwX0ZfMzQ2ODM5NjgzXzZuQVB6YmhwU2tJcGI4cG1Bd3Vma0M3YzVlRDd3WXdzLmpwZyIsImlhdCI6MTY2NjYzOTMxOSwiZXhwIjoxOTgxOTk5MzE5fQ.G8ugKaEVwz41Gcri6TpC_tUHgYom63QY1KWmuNk5vd4'}`}
      />
      <div className="mt-2">
        <Card.Title className="text-dark">{name}</Card.Title>
      </div>
    </div>
  </Card>
  )
}

export default UserBubbles