import React from 'react';

const UserCard = ({ user }) => (
    <div className="p-4 bg-white shadow rounded">
        <h2 className="text-lg font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
    </div>
);

export default UserCard;