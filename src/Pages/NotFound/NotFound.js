import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
          <img src={notFound} alt="" />  
          <Link to="/">
          <Button>Go Back</Button>
          </Link>
        </div>
    );
};

export default NotFound;