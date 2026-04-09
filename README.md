# Learning Log

Learning Log is a Django project for keeping notes about what you’re learning. It supports user accounts, per-user topics, and entries inside each topic.

## Tech Stack

- Django (project generated with Django 6.0.2)
- SQLite (`db.sqlite3`)
- Server-rendered Django templates + a small amount of shared CSS/JS for UI polish

## Current Features (Implemented)

- Authentication
  - Register, log in, log out
  - Django admin available at `/admin/`
- Topics (per user)
  - List your topics
  - Create, edit, delete topics
  - Prevents duplicate topic names per user (case-insensitive)
- Entries (per topic, per user)
  - Create, edit, delete entries
  - Ownership checks (you can’t modify another user’s topics/entries)
- UI
  - Shared layout and consistent theme (`Learning_logs/templates/learning_logs/base.html`)
  - Hover effects + typewriter-style headline text on the home page

## Project Structure

- `myproject/` — Django project configuration (`settings.py`, `urls.py`, `wsgi.py`)
- `Learning_logs/` — main app (topics + entries)
- `users/` — registration + auth routes (includes Django’s built-in auth URLs)
- `db.sqlite3` — SQLite database (dev)

## Key Routes

- `/` — home
- `/topics/` — your topics (login required)
- `/topics/<topic_id>/` — topic detail + entries (login required)
- `/new_topic/` — create topic (login required)
- `/edit_topic/<topic_id>/` — edit topic (login required)
- `/delete_topic/<topic_id>/` — delete topic (login required)
- `/new_entry/<topic_id>/` — create entry (login required)
- `/edit_entry/<entry_id>/` — edit entry (login required)
- `/delete_entry/<entry_id>/` — delete entry (login required)
- `/users/` — Django auth routes (login/logout/password reset, etc.)
- `/users/register/` — register
- `/admin/` — Django admin

## Run Locally (Development)

This repo doesn’t currently include a `requirements.txt`, so install Django manually.

```powershell
cd .\Learning-log
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install "django>=6.0,<7.0"

# Apply migrations / create DB tables
python .\sam.py migrate

# (Optional) create an admin user
python .\sam.py createsuperuser

# Start the dev server
python .\sam.py runserver
```

Then open `http://127.0.0.1:8000/`.

## Roadmap (Planned Improvements — Not Yet Implemented)

The items below are **ideas/features to add or improve later**. This list is **not exhaustive** — more features and refinements will be added beyond what’s listed here.

1. **Search**
   - Search topics and/or entries (title + body)
2. **Profile**
   - User profile page (bio, avatar, preferences, stats)
3. **Comment**
   - Comments on entries (and moderation / ownership rules)
4. **URL support on the entry (including paste)**
   - Auto-detect URLs in entry text and render them as clickable links
5. **API call (AI)**
   - AI features (examples: summarize an entry, suggest tags, generate a quiz, rewrite notes)
6. **Table supporter in the entry**
   - Rich text / Markdown support so tables render nicely (and possibly code blocks, checklists, etc.)

## Notes

- Ownership checks currently restrict editing/deleting to the topic owner.
- For production, you’ll want to add environment-based settings, `ALLOWED_HOSTS`, secret management, and proper static file handling.

