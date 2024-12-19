import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HeaderTwo from './headerTwo'

const ViewFilter = () => {
  const [scenarioId, setScenarioId] = useState('');
  const [scenarioName, setScenarioName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [errors, setErrors] = useState({
    scenarioId: false,
    scenarioName: false,
    countryCode: false,
  });
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'scenarioId') {
      setScenarioId(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        scenarioId: value.trim() === '' ,
      }));
    } else if (name === 'scenarioName') {
      setScenarioName(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        scenarioName: !isNaN(value) || value.trim() === '',
      }));
    } else if (name === 'countryCode') {
      setCountryCode(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        countryCode: value.length !== 2,
      }));
    }
  };

  const handleViewExceptions = () => {
    if (
      scenarioId === '' || errors.scenarioId ||
      scenarioName === '' || errors.scenarioName ||
      countryCode === '' || errors.countryCode
    ) {
      setSubmit(true);
      return;
    }
    setSubmit(false);
    navigate('/viewDetails', {
      state: { scenarioId, scenarioName, countryCode },
    });
  };

 

  return (
    <div className="Transaction">
      <HeaderTwo></HeaderTwo>
      <div className="SearchDiv">
        <TextField
          label="Scenario Id"
          variant="outlined"
          className="InputFields"
          sx={{ width: '400px', marginTop: '2rem' }}
          value={scenarioId}
          name="scenarioId"
          onChange={handleInputChange}
          error={errors.scenarioId}
          helperText={errors.scenarioId ? 'Invalid Scenario Id' : ''}
        />
        <TextField
          label="Scenario Name"
          variant="outlined"
          className="InputFields"
          sx={{ width: '400px', marginTop: '2rem' }}
          value={scenarioName}
          name="scenarioName"
          onChange={handleInputChange}
          error={errors.scenarioName}
          helperText={errors.scenarioName ? 'Invalid Scenario Name' : ''}
        />
        <TextField
          label="Country Code"
          variant="outlined"
          className="InputFields"
          sx={{ width: '400px', marginTop: '2rem' }}
          value={countryCode}
          name="countryCode"
          onChange={handleInputChange}
          error={errors.countryCode}
          helperText={errors.countryCode ? 'Invalid Country Code (2 characters required)' : ''}
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
          View 
        </Button>

        </div>
        {submit && (
          <p style={{ color: 'red', marginTop: '1rem' }}>
            Valid fields are required to view Exceptions.
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewFilter;
