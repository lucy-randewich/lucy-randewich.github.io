# Supabase setup

1. Create a free Supabase project.
2. Open **SQL Editor**, paste the contents of
   `migrations/20260819_create_shrimp_high_score.sql`, and run it.
3. Copy `.env.example` to `.env.local`.
4. In **Project Settings → API**, copy the project URL and publishable key into
   `.env.local`.
5. Restart the Vite development server.

When new migrations are added, apply them with:

```sh
npx supabase db push --dry-run
npx supabase db push
```

The publishable key is intended for frontend use. Never put a Supabase secret
or service-role key in a `VITE_` environment variable.
