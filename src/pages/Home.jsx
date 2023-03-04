import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { convertCsvToJson } from '../utilities/convertCsvToJson';

const Home = () => {
  const [data, setData] = useState('');
  const [json, setJson] = useState('');

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    const resp = convertCsvToJson(data);
    setJson(JSON.stringify(resp, null, 2));
  };

  return (
    <>
      <TextField onChange={handleChange} fullWidth placeholder="csv" multiline rows={5} />
      <TextField value={json} margin="normal" fullWidth placeholder="json" multiline rows={5} />
      <Button onClick={handleClick} fullWidth variant="contained">
        Convert
      </Button>
    </>
  );
};

export default Home;
