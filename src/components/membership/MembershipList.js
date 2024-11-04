import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMemberships } from '../../redux/actions/membershipActions';
import MembershipCard from './MembershipCard';

const MembershipList = () => {
  const dispatch = useDispatch();
  const memberships = useSelector(state => state.memberships.list);

  useEffect(() => {
    dispatch(fetchMemberships());
  }, [dispatch]);

  return (
    <div className="membership-list">
      {memberships.map(membership => (
        <MembershipCard key={membership.id} membership={membership} />
      ))}
    </div>
  );
};

export default MembershipList;