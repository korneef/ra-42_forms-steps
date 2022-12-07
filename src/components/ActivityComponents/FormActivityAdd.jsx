import React from "react";


export default function FormActivityAdd({ handleSubmit, handleChange, values }) {

  return (
    <form action="" onSubmit={handleSubmit} className="activity-add-form">
      <div className="activity-add-form__date">
        <label htmlFor="date" className="activity-add-form__date-label">Выберите дату</label>
        <input id="date" name="date" type="date" className="activity-add-form__date-input" onChange={handleChange} value={values.date} required />
      </div>
      <div className="activity-add-form__distance">
        <label htmlFor="distance" className="activity-add-form__distance-label">Пройдено, км</label>
        <input id="distance" name="distance" type="number" step={0.1} min={0.1} className="activity-add-form__distance-input" onChange={handleChange} value={values.distance} required/>
      </div>
      <div><button type="submit" className="activity-add-form__send-activity-button">OK</button></div>
    </form>
  )
}