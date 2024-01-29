import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface MyComponentProps {
    title: string;
    value: number;
  }

const TrainingCard: React.FC<MyComponentProps> = (props) => {
    const {title,value} = props
    return (
        <Box sx={{ minWidth: 200,mb:2 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h5">
                            {title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium"><Typography variant="h6">{value} คำถาม</Typography></Button>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    );
}

export default TrainingCard;
