import { supabase } from '../frontend/services/supabaseClient';

const seedUsers = async () => {
    await supabase.from('users').insert([
        { email: 'johndoe@example.com', name: 'John Doe' },
        { email: 'janedoe@example.com', name: 'Jane Doe' }
    ]);
};

seedUsers();
console.log('Users seeded!');