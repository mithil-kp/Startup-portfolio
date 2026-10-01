# StudioLaunch portfolio website

A clean, responsive startup portfolio for a web + creative studio.

## Stack
- HTML5
- CSS3
- Vanilla JavaScript
- PHP
- Supabase (lead storage)

## Before publishing
1. Replace **StudioLaunch** with your real startup name in `index.html`.
2. Replace the demo project visuals/text with your real portfolio screenshots.
3. Create a Supabase project.
4. Create a `leads` table:

```sql
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  service text not null,
  message text not null,
  created_at timestamptz not null default now()
);
```

5. Configure your PHP hosting with:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

Never put the Supabase service-role key in browser JavaScript.

## Run locally
For the static design, open `index.html`.

For the PHP form, use a PHP server, for example:

```bash
php -S localhost:8000
```

Then open `http://localhost:8000`.

## Brand direction
The design uses a warm off-white background, dark typography, and a lime accent to feel modern, creative and approachable. The content is intentionally written for food businesses, gyms, real estate and other local businesses.
