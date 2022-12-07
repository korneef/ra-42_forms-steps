import React from "react";

export default function ActivityListItem({ data, distance, handleDelete, id }) {
  const formatData = (data) => {
    const formatted = /([0-9]{4})-([0-9]{2})-([0-9]{2})/.exec(data);
    return `${formatted[3]}.${formatted[2]}.${formatted[1]}`
  }
  return (
    <li className="activity-list__main-item">
      <div className="activity-list__main-item-element activity-list__main-item-element_date-element">{formatData(data)}</div>
      <div className="activity-list__main-item-element activity-list__main-item-element_distance-element">{distance}</div>
      <div className="activity-list__main-item-element activity-list__main-item-element_control-element"><button onClick={() => {handleDelete(id)}}>✘</button></div>
    </li>
  )
}