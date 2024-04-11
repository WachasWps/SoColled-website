import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './custom-package-form.css';

const CustomPackageForm = (props) => {
  const [selectedOptions, setSelectedOptions] = useState({
    laundry: '',
    hostel: '',
    mess: '',
    gym: ''
  });

  const handleSelectChange = (event, field) => {
    setSelectedOptions({ ...selectedOptions, [field]: event.target.value });
  };

  const optionValues = {
    laundry: {
      '': 0,
      'Wash it Laundry': 1500,
      'Uncle Peters Drycleaning': 2000
    },
    hostel: {
      '': 0,
      'Stanza Living': 2000,
      'Charge Hostels': 2500,
      'Ganesh Boys Hostel': 3000
    },
    mess: {
      '': 0,
      'Richas Kitchen': 2000,
      'Jai Bhole Mess': 1500,
      'Moms Magic Kitchen': 2500
    },
    gym: {
      '': 0,
      'Golds Gym': 2000,
      'RP Fitness': 2500,
      'Champions Gym': 3000
    }
  };

  const calculateTotal = () => {
    let total = 0;
    if (selectedOptions.laundry && selectedOptions.hostel && selectedOptions.mess && selectedOptions.gym) {
      total = optionValues.laundry[selectedOptions.laundry] + optionValues.hostel[selectedOptions.hostel] + optionValues.mess[selectedOptions.mess] + optionValues.gym[selectedOptions.gym];
    }
    return total;
  };

  return (
    <div className={'custom-package-form-testimonial-card ${props.rootClassName}'}>
      <div className="custom-package-form-container">
        <div className="custom-package-form-container1">
          {/* Laundry */}
          <div className="custom-package-form-heading" style={{ fontFamily: 'Caveat Brush', fontSize: '40px' }}>Laundry</div>
          <div className="custom-package-form-laundary">
            <span className="custom-package-form-laundry-txt">
              {props.text4}
            </span>
          </div>
          <select className="custom-package-form-select" onChange={(e) => handleSelectChange(e, 'laundry')} value={selectedOptions.laundry}>
            <option value="">Select Laundry</option>
            <option value="Wash it Laundry">Wash it Laundry</option>
            <option value="Uncle Peters Drycleaning">Uncle Peters Drycleaning</option>
          </select>
          {selectedOptions.laundry && (
            <span className="custom-package-form-value-right" style={{ fontFamily: 'Caveat Brush', fontSize: '30px' }}>₹{optionValues.laundry[selectedOptions.laundry]}</span>
          )}

          {/* Hostel */}
          <div className="custom-package-form-heading" style={{ fontFamily: 'Caveat Brush', fontSize: '40px' }}>Hostel</div>
          <div className="custom-package-form-laundary1">
            <span className="custom-package-form-hostel-txt">
              {props.text45}
            </span>
          </div>
          <select className="custom-package-form-select1" onChange={(e) => handleSelectChange(e, 'hostel')} value={selectedOptions.hostel}>
            <option value="">Select Hostel</option>
            <option value="Stanza Living">Stanza Living</option>
            <option value="Charge Hostels">Charge Hostels</option>
            <option value="Ganesh Boys Hostel">Ganesh Boys Hostel</option>
          </select>
          {selectedOptions.hostel && (
            <span className="custom-package-form-value-right" style={{ fontFamily: 'Caveat Brush', fontSize: '30px' }}>₹{optionValues.hostel[selectedOptions.hostel]}</span>
          )}

          {/* Mess */}
          <div className="custom-package-form-heading" style={{ fontFamily: 'Caveat Brush', fontSize: '40px' }}>Mess</div>
          <div className="custom-package-form-laundary2">
            <span className="custom-package-form-mess-txt">{props.text44}</span>
          </div>
          <select className="custom-package-form-select2" onChange={(e) => handleSelectChange(e, 'mess')} value={selectedOptions.mess}>
            <option value="">Select Mess</option>
            <option value="Richas Kitchen">Richas Kitchen</option>
            <option value="Jai Bhole Mess">Jai Bhole Mess</option>
            <option value="Moms Magic Kitchen">Moms Magic Kitchen</option>
          </select>
          {selectedOptions.mess && (
            <span className="custom-package-form-value-right" style={{ fontFamily: 'Caveat Brush', fontSize: '30px' }}>₹{optionValues.mess[selectedOptions.mess]}</span>
          )}

          {/* Gym */}
          <div className="custom-package-form-heading" style={{ fontFamily: 'Caveat Brush', fontSize: '40px' }}>Gym</div>
          <div className="custom-package-form-laundary3">
            <span className="custom-package-form-mess-txt1">
              {props.text441}
            </span>
          </div>
          <select className="custom-package-form-select3" onChange={(e) => handleSelectChange(e, 'gym')} value={selectedOptions.gym}>
            <option value="">Select Gym</option>
            <option value="Golds Gym">Golds Gym</option>
            <option value="RP Fitness">RP Fitness</option>
            <option value="Champions Gym">Champions Gym</option>
          </select>
          {selectedOptions.gym && (
            <span className="custom-package-form-value-right" style={{ fontFamily: 'Caveat Brush', fontSize: '30px' }}>₹{optionValues.gym[selectedOptions.gym]}</span>
          )}

          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="custom-package-form-image"
          />
        </div>
      </div>
      <div className="custom-package-form-container2">
        <span className="custom-package-form-laundry-txt1">
          {props.text431}
        </span>
      </div>

      {/* Pay Now Button */}
      <button className="pay-now-button button" style={{ fontFamily: 'Montserrat', fontSize: '20px', marginTop: '20px' }}>Pay Now</button>

      {/* Total */}
      <div className="custom-package-form-total">
        {selectedOptions.laundry && selectedOptions.hostel && selectedOptions.mess && selectedOptions.gym && (
          <span style={{ fontFamily: 'Caveat Brush', fontSize: '40px' }}>Total: ₹{calculateTotal()}</span>
        )}
      </div>
    </div>
  );
};

CustomPackageForm.defaultProps = {
  // Default props
};

CustomPackageForm.propTypes = {
  // PropTypes
};

export default CustomPackageForm;