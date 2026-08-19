/*
# Drop blog_posts table

1. Removed Tables
- `blog_posts` — no longer needed; blog feature is being rebuilt from scratch.
2. Security
- All RLS policies on blog_posts are removed along with the table.
*/

DROP TABLE IF EXISTS blog_posts CASCADE;
