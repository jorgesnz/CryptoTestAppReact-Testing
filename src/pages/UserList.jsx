import React from 'react';
import './UserList.scss';

const UserList = ({ users, onSelectUser }) => {
    return (
        <div className="user-list">
            {users.map(user => (
                <div key={user._id} className="user-item" onClick={() => onSelectUser(user._id)}>
                    <div className="user-info">
                        <span className="user-name">{user.firstName} {user.lastName}</span>
                        <span className="user-email">{user.email}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
