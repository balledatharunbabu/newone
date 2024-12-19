import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HeaderTwo from './headerTwo'

const ExceptionFilter = () => {
  const [flowId, setScenarioId] = useState('');
  const [flowName, setScenarioName] = useState('');
  const [region, setCountryCode] = useState('');
  const [errors, setErrors] = useState({
    flowId: false,
    flowName: false,
    region: false,
  });
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'flowId') {
      setScenarioId(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        flowId: value.trim() === '' ,
      }));
    } else if (name === 'flowName') {
      setScenarioName(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        flowName: !isNaN(value) || value.trim() === '',
      }));
    } else if (name === 'region') {
      setCountryCode(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        region: value.length !== 2,
      }));
    }
  };

  const handleViewExceptions = () => {
    if (
      flowId === '' || errors.flowId ||
      flowName === '' || errors.flowName ||
      region === '' || errors.region
    ) {
      setSubmit(true);
      return;
    }
    setSubmit(false);
    navigate('/exceptionDetails', {
      state: { flowId, flowName, region },
    });
  };

  return (
    <div className="Transaction">
      <HeaderTwo></HeaderTwo>
      <div className="SearchDiv">
        <TextField
          label="Flow Id"
          variant="outlined"
          className="InputFields"
          sx={{ width: '400px', marginTop: '2rem' }}
          value={flowId}
          name="flowId"
          onChange={handleInputChange}
          error={errors.flowId}
          helperText={errors.flowId ? 'Invalid Flow Id' : ''}
        />
        <TextField
          label="Flow Name"
          variant="outlined"
          className="InputFields"
          sx={{ width: '400px', marginTop: '2rem' }}
          value={flowName}
          name="flowName"
          onChange={handleInputChange}
          error={errors.flowName}
          helperText={errors.flowName ? 'Invalid Flow Name' : ''}
        />
        <TextField
          label="Region"
          variant="outlined"
          className="InputFields"
          sx={{ width: '400px', marginTop: '2rem' }}
          value={region}
          name="region"
          onChange={handleInputChange}
          error={errors.region}
          helperText={errors.region ? 'Invalid region (2 characters required)' : ''}
        />
        <div style={{display:'flex'}}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#012169',
            height: '2rem',
            width: '10rem',
            marginTop: '2rem',
          }}
          onClick={handleViewExceptions}
        >
          Faults
        </Button>
        </div>
        {submit && (
          <p style={{ color: 'red', marginTop: '1rem' }}>
            Valid fields are required to view Faults.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExceptionFilter;
