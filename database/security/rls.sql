-- Enable RLS on market_listings
ALTER TABLE public.market_listings ENABLE ROW LEVEL SECURITY;

-- Create security policies
CREATE POLICY select_own_listings ON public.market_listings
FOR SELECT USING (user_id = auth.uid());

CREATE POLICY insert_own_listings ON public.market_listings
FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY update_own_listings ON public.market_listings
FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY delete_own_listings ON public.market_listings
FOR DELETE USING (user_id = auth.uid());