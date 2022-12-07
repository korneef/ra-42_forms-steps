import React from "react";
import ActivityListHeader from "./ActivityListHeader";

export default function ActivityList(props) {
  return (
    <div className="activity-list">
      <ActivityListHeader/>
      <ul className="activity-list__main">
        <li className="activity-list__main-item">
          <div className="activity-list__main-item-element activity-list__main-item-element_date-element">21.02.2022</div>
          <div className="activity-list__main-item-element activity-list__main-item-element_distance-element">15,7</div>
          <div className="activity-list__main-item-element activity-list__main-item-element_control-element"><button>x</button></div>
        </li>
        <li className="activity-list__main-item">
          <div className="activity-list__main-item-element activity-list__main-item-element_date-element">21.02.2022</div>
          <div className="activity-list__main-item-element activity-list__main-item-element_distance-element">15,7</div>
          <div className="activity-list__main-item-element activity-list__main-item-element_control-element"><button>x</button></div>
        </li>
        <li className="activity-list__main-item">
          <div className="activity-list__main-item-element activity-list__main-item-element_date-element">21.02.2022</div>
          <div className="activity-list__main-item-element activity-list__main-item-element_distance-element">15,7</div>
          <div className="activity-list__main-item-element activity-list__main-item-element_control-element"><button>x</button></div>
        </li>
      </ul>
    </div>
  )
}