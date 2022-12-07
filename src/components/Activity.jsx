import React, { useState } from "react";
import FormActivityAdd from './ActivityComponents/FormActivityAdd';
import ActivityList from './ActivityComponents/ActivityList';
import { nanoid } from 'nanoid'


export default function Activity() {
  const [form, setForm] = useState({ date: '', distance: '' });

  const [activityData, setActivity] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const indexActivity = activityData.findIndex(item => item.date === form.date);

    if (indexActivity !== -1) {
      setActivity(prevActivity => {
        const newDistance = Number(prevActivity[indexActivity].distance) + Number(form.distance);
        const newArray = [...prevActivity];
        newArray[indexActivity] = {...prevActivity[indexActivity], distance: newDistance.toFixed(1)};
        return newArray
      })
    } else {
      setActivity(prevActivity => {
        const newActitivy = prevActivity.concat({date: form.date, distance: (Number(form.distance)).toFixed(1), id: nanoid()})
        return newActitivy.sort((a, b) => a.date > b.date ? 1 : -1)
      })
    }
    setForm({ date: '', distance: '' });
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  const handleDelete = (id) => {
    setActivity(prevActivity => prevActivity.filter(item => item.id !== id))
  }

  return (
    <>
      <FormActivityAdd values={form} handleSubmit={handleSubmit} handleChange={handleChange} />
      <ActivityList activityData={activityData} handleDelete={handleDelete} />
    </>
  )
}