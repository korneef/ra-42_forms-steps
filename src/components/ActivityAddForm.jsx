import React from "react";

export default function ActivityAddForm(props) {
  return (
    <form action="" className="activity-add-form">
      <div className="activity-add-form__date">
        <label htmlFor="date" className="activity-add-form__date-label">Выберите дату</label>
        <input id="date" type="date" className="activity-add-form__date-input" />
      </div>
      <div className="activity-add-form__distance">
        <label htmlFor="distance" className="activity-add-form__distance-label">Пройдено, км</label>
        <input id="distance" type="number" step={0.1} min={0.1} className="activity-add-form__distance-input" />
      </div>
      <div><button type="submit" className="activity-add-form__send-activity-button">OK</button></div>
    </form>
  )
}