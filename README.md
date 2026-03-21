# Learning Log

## Current Project Overview

Learning Log is an early-stage Django project for recording what a user is learning about. At the current stage, the project supports creating topics, adding entries under a topic, viewing saved topics and entries, and editing existing entries through server-rendered Django pages.

This README reflects only the functionality that exists in the current project files.

## Development Progress So Far

### What currently works

- A `Topic` model is defined to store learning subjects.
- An `Entry` model is defined to store notes linked to a specific topic.
- The home page renders successfully.
- A topics page lists all saved topics.
- A topic detail page shows all entries connected to one topic.
- A form page allows creating new topics.
- A form page allows adding a new entry to a chosen topic.
- A form page allows editing an existing entry.
- URL routing is connected from the project level to the app level.
- Templates are organized with a shared base layout and page-specific templates.
- Both models are registered in the Django admin.
- Initial migrations for `Topic` and `Entry` exist.

### What is not implemented yet

- User authentication or user-specific data ownership.
- Validation or permission checks around which user can edit data.
- Delete functionality for topics or entries.
- Automated tests beyond the default empty test file.
- Production-ready configuration such as deployment settings or hardened security.
- A custom admin configuration beyond basic model registration.
- Any API endpoints; the app is currently server-rendered HTML only.
- Search, filtering, pagination, tagging, or dashboards.

## Current Features in the Codebase

### Topic management

- Users can create a topic using a Django `ModelForm`.
- Topics are listed in ascending order by creation time.
- Each topic links to its own detail page.

### Entry management

- Users can add a new entry to a specific topic.
- Entries are displayed on the topic detail page.
- Entries are ordered with newest first on the topic page.
- Users can edit an existing entry.

### Page structure

- The app uses a shared `base.html` template for navigation and layout.
- Child templates extend the base template for individual pages.
- Forms are submitted with CSRF protection enabled in templates.

## File Responsibilities

### Project files

- `myproject/settings.py`
  - Configures the Django project.
  - Includes the `Learning_logs` app in `INSTALLED_APPS`.
  - Uses SQLite as the current database.
  - Enables template loading through app directories.

- `myproject/urls.py`
  - Registers the Django admin route.
  - Includes the app URL configuration at the root path.

### App files

- `Learning_logs/models.py`
  - Defines `Topic` and `Entry`.
  - Connects `Entry` to `Topic` with a `ForeignKey`.
  - Adds readable string representations for both models.

- `Learning_logs/forms.py`
  - Defines `TopicForm` and `EntryForm` using `ModelForm`.
  - Limits exposed fields to the text content needed for the current forms.
  - Uses a `Textarea` widget for entry text.

- `Learning_logs/views.py`
  - Contains function-based views for:
    - home page
    - topic list
    - topic detail
    - new topic form
    - new entry form
    - edit entry form
  - Handles GET/POST logic for creating and updating records.
  - Redirects after successful form submission.

- `Learning_logs/urls.py`
  - Maps app routes to the current views.
  - Names routes for use in templates and redirects.

- `Learning_logs/admin.py`
  - Registers `Topic` and `Entry` with the Django admin site.

- `Learning_logs/tests.py`
  - Exists, but currently contains no implemented tests.

### Templates

- `Learning_logs/templates/learning_logs/base.html`
  - Shared layout and navigation for the app.

- `Learning_logs/templates/learning_logs/index.html`
  - Simple landing page introducing the project.

- `Learning_logs/templates/learning_logs/topics.html`
  - Shows all topics and links to add a new one.

- `Learning_logs/templates/learning_logs/topic.html`
  - Displays one topic and its related entries.
  - Includes links to add a new entry and edit existing entries.

- `Learning_logs/templates/learning_logs/new_topic.html`
  - Renders the form for creating a topic.

- `Learning_logs/templates/learning_logs/new_entry.html`
  - Renders the form for adding an entry to a selected topic.

- `Learning_logs/templates/learning_logs/edit_entry.html`
  - Renders the form for editing an existing entry.

### Database history

- `Learning_logs/migrations/0001_initial.py`
  - Initial migration for the first model setup.

- `Learning_logs/migrations/0002_entry.py`
  - Adds the `Entry` model and its relationship to topics.

## Django Concepts Used So Far

- Django project/app structure
- URL routing with `path()` and `include()`
- Function-based views
- Template inheritance with `{% extends %}` and `{% block %}`
- Model definitions with `CharField`, `TextField`, `DateTimeField`, and `ForeignKey`
- Reverse relationship access through `topic.entry_set`
- `ModelForm` for creating and editing database records
- Form handling with GET and POST requests
- Redirects after successful form submission
- Admin registration
- Migrations for database schema changes
- Template tags such as `{% url %}` and `{% csrf_token %}`

## Current Functionality Status

| Area | Status | Notes |
| --- | --- | --- |
| Project routing | Implemented | App routes are included from the project URL config |
| Topic model | Implemented | Stores topic text and creation date |
| Entry model | Implemented | Stores entry text, creation date, and topic link |
| Topic listing page | Implemented | Displays saved topics |
| Topic detail page | Implemented | Displays entries for a selected topic |
| Create topic | Implemented | Uses `TopicForm` |
| Create entry | Implemented | Uses `EntryForm` and attaches entry to a topic |
| Edit entry | Implemented | Existing entries can be updated |
| Admin integration | Implemented | Basic model registration only |
| Tests | Not started | `tests.py` is still empty |
| Authentication | Not implemented | No login, registration, or ownership checks |
| Delete actions | Not implemented | No delete views or buttons |
| API layer | Not implemented | HTML views only |

## Next Steps

- Add automated tests for models, views, and forms.
- Introduce authentication so data can belong to specific users.
- Add ownership and access checks before editing data.
- Add delete actions for topics and entries.
- Improve project setup completeness and developer documentation if more files are added later.

## Summary

At this point, Learning Log is a working Django CRUD-style practice project with the core create, read, and edit flow in place for topics and entries. The foundation is established, but the project is still in an early development phase and does not yet include authentication, testing, or more advanced data management features.
