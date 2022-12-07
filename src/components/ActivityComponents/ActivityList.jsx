import React from "react";
import ActivityListHeader from "./ActivityListHeader";
import ActivityListItem from "./ActivityListItem";

export default function ActivityList({ activityData, handleDelete }) {
  return (
    <div className="activity-list">
      <ActivityListHeader />
      <ul className="activity-list__main">
        {activityData.map(item => <ActivityListItem key={item.id} data={item.date} distance={item.distance} id={item.id} handleDelete={handleDelete} />)}
      </ul>
    </div>
  )
}