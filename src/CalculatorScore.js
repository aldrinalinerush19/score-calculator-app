// import { getDefaultNormalizer } from '@testing-library/react';
import { useState } from 'react';

export default function CalculatorScore() {
  const [inputs, setInput] = useState({
    passOrFail: 'Failed',
    errorHandler: '',
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    // if (fieldName.includes('score'))
    setInput((values) => ({ ...values, [fieldName]: fieldValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput((values) => ({ ...values, version: inputs.version + 1 }));
    if (inputs.first_name !== '' && inputs.last_name !== '') {
      let total =
        parseInt(inputs.score1) +
        parseInt(inputs.score2) +
        parseInt(inputs.score3);
      let average = total / 3;
      if (average < 75) {
        setInput((values) => ({ ...values, passOrFail: 'Failed' }));
      } else {
        setInput((values) => ({ ...values, passOrFail: 'Passed' }));
      }
    } else {
      setError((values) => ({ ...values, errorHandler: 'Need Values' }));
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-sm-4'>
          <label>First Name:</label>
          <input
            type='text'
            name='first_name'
            className='form-control text-input-field error-field'
            value={inputs.first_name}
            onChange={handleChange}
          />
          {/* <div id='err_first_name' className='error'></div> */}
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <label>Last Name: </label>
          <input
            type='text'
            name='last_name'
            className='form-control text-input-field'
            value={inputs.last_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <label>Score 1: </label>
          <input
            type='number'
            name='score1'
            className='form-control number-input-field'
            value={inputs.score1}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <label>Score 2: </label>
          <input
            type='number'
            name='score2'
            className='form-control number-input-field'
            value={inputs.score2}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <label>Score 3: </label>
          <input
            type='number'
            name='score3'
            className='form-control number-input-field'
            value={inputs.score3}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type='submit'>Submit</button>
      <div id='passOrFail'>{inputs.passOrFail}</div>
      <div id='errorHandler'></div>
    </form>
  );
}
