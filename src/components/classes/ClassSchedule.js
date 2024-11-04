import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClasses } from '../../redux/actions/classActions';

const ClassSchedule = () => {
  const dispatch = useDispatch();
  const classes = useSelector(state => state.classes.list);

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  return (
    <div className="class-schedule">
      <h2>Class Schedule</h2>
      {classes.map(classItem => (
        <div key={classItem.id} className="class-item">
          <h3>{classItem.name}</h3>
          <p>Time: {classItem.time}</p>
          <p>Trainer: {classItem.trainer}</p>
        </div>
      ))}
    </div>
  );
};

export default ClassSchedule;