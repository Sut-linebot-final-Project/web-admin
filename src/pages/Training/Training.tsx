


import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import TrianningMenu from '../../components/training/menu';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import TrainingCard from '../../components/training/card';
// import { Filter } from '@mui/icons-material';
import { url } from '../../service/serviceUrl';
export interface Iword {
  word: string;
  status: string;
}
const style = {
  p: 0,
  width: '100%',
  // maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

export default function Training() {
  const [data, setData] = React.useState<Iword[]>([]);

  React.useEffect(() => {
    const apiUrl = `${url}/pg/questionlist`;
    axios.get(apiUrl)
      .then(response => {
        console.log('API Response:', response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  const notAssign = data.filter(item => item.status == 'not assign');
  const assign = data.filter(item => item.status == 'assign');
  const del = data.filter(item => item.status == 'delete');


  return (
    <Box sx={{ flexGrow: 1, mx: 20 }}>

      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Question list
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <List sx={style}>
            {notAssign?.map((data, index) => (
              <><ListItem
                key={index}
                secondaryAction={<TrianningMenu word={data.word} />}
              >
                <ListItemText primary={data.word} />
              </ListItem><Divider component="li" light /></>
            ))}
          </List>
        </Grid>
        <Grid item xs={4}>
          <TrainingCard title='คำถามที่ตอบไม่ได้ทั้งหมด' value={data.length} />
          <TrainingCard title='คำถามที่ยังไม่ได้เพิ่ม' value={notAssign.length} />
          <TrainingCard title='คำถามที่เพิ่มแล้ว' value={assign.length} />
          <TrainingCard title='คำถามที่ลบ' value={del.length} />
          {/* <OutlinedCard />
        <OutlinedCard /> */}
        </Grid>
      </Grid>



    </Box>
  );
}