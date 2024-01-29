import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TextFieldElement } from "react-hook-form-mui";
import { useNavigate, useParams } from "react-router-dom";
import DataList from "../../../components/intent/DataList";
import DataListModal from "../../../components/intent/DataListModal";
import { useIntentDetail } from "../hooks";
import { url } from "../../../service/serviceUrl";
import axios from "axios";
import { IIntentDetail } from "../interface";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';






const IntentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openTraining, setOpenTraining] = useState(false);
  const [openPerponse, setOpenPerponse] = useState(false);
  const { intent, form, onSubmit } = useIntentDetail(id);
  const [data, setData] = useState<IIntentDetail>();


  useEffect(() => {
    const apiUrl = `${url}/getintent`;
    const params = {
      intentName: id,
    };
    axios.post(apiUrl, { params })
      .then(response => {
        console.log('API Response:', response.data);
        setData(response.data);
        console.log(data?.trainingPhraseText);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        {/* button */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          marginBottom={5}
        >
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/intent")}
          >
            Back
          </Button>
          <Button variant="contained" size="large" type="submit">
            Save
          </Button>
        </Stack>

        {/* intent name */}
        <Stack direction={"column"} spacing={4}>
          <Stack spacing={4} direction={"row"} alignItems={"center"}>
            <label>
              <Typography variant="h6">Intent Name :</Typography>
            </label>
            <TextField id="Name" variant="outlined" defaultValue={id} sx={{ m: 1, width: '75ch' }} />
          </Stack>

          {/* training Phrases */}
          <Box>
            <Stack direction={"row"} alignItems={"center"} spacing={4}>
              <label>
                <Typography variant="h6">training Phrases :</Typography>
              </label>
            </Stack>

            <DataList
              data={data?.trainingPhraseText}
              setOpenModal={setOpenTraining}
            />
          </Box>

          {/* perponse */}
          <Box>
            <Stack direction={"row"} alignItems={"center"} spacing={4}>
              <label>
                <Typography variant="h6">Response :</Typography>
              </label>
            </Stack>
            {data?.textResponse ? <DataList data={data?.textResponse} setOpenModal={setOpenPerponse} /> : null}
            
          </Box>
          {/* {Array.isArray(data) && data.length > 0 && data[0].imageResponse ? (
            data.map((item) => (
              <Card key={item.id}>
                <CardMedia
                  component="img"
                  alt="Card Image"
                  height="140"
                  image={item.imageResponse}
                />
              </Card>
            ))
          ) : null} */}
        </Stack>
      </form>

      {/* data list modal */}
      <DataListModal
        form={form}
        fieldName="trainingPhrases"
        onSubmit={onSubmit}
        header="Training Phrase"
        open={openTraining}
        setOpen={setOpenTraining}
      />
      <DataListModal
        form={form}
        fieldName="perponse"
        onSubmit={onSubmit}
        header="Perponse"
        open={openPerponse}
        setOpen={setOpenPerponse}
      />
    </Container>
  );
};

export default IntentDetail;
