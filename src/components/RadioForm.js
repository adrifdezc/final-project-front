import React from 'react'

function RadioForm({handleChangeAlcoholic}) {
    return (
      <form>
        <div className="row ml-2 mt-4">
          <div onChange={handleChangeAlcoholic} className="col-6 form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Alcoholic"
              defaultChecked
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            Alcoholic
          </div>
          <div onChange={handleChangeAlcoholic} className="col-6 form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Non_Alcoholic"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            Non Alcoholic
          </div>
        </div>
      </form>
    );
}

export default RadioForm
