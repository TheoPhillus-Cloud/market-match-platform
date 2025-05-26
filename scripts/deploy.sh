#!/bin/bash
echo "Deploying Supabase migrations..."
npx supabase db push
echo "Deployment complete."