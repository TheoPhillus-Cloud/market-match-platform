import express from 'express';
import { createClient } from '@supabase/supabase-js';

const app = express();
const supabase = createClient('https://your-project-ref.supabase.co', 'your-public-anon-key');

app.get('/users', async (req, res) => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) return res.status(500).json(error);
    res.json(data);
});

app.listen(3000, () => console.log('API running on port 3000'));