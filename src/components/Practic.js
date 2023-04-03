import * as React from 'react';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function Practic() {
    return (

        <div className='practicCardDiv'>    
            <Link to='/firstbox' className='VocabHomeLink'>
                <Card className='cardCss'>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Firstbox
                        </Typography>
                        
                    </CardContent>
                </Card>
            </Link>
            <Link to='/secondbox' className='VocabHomeLink'>
                <Card className='cardCss' >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Secondbox
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
            <Link to='/thirdbox' className='VocabHomeLink'>
                <Card className='cardCss' >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Thirdbox
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}

export default Practic