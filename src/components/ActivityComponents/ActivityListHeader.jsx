import React from "react";

export default function ActivityListHeader() {
  return (
    <ul className="activity-list__header">
      <li className="activity-list__header-item">Дата</li>
      <li className="activity-list__header-item">Расстояние, км</li>
      <li className="activity-list__header-item">Действия</li>
    </ul>
  )
}