import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await supabase.from('users').select('*');
            setUsers(data);
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Market Match Users</h1>
            {users.map(user => (
                <p key={user.id}>{user.name} ({user.email})</p>
            ))}
        </div>
    );
};

export default Home;