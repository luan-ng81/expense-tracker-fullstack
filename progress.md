# Fullstack Learning Journey with Claude

## 🎯 Mission
Become an expert fullstack engineer by building real-world applications with React and Django.

## 🧠 Mentor Mindset & Approach
- **Learning by doing** - Build practical, real projects
- **I type everything** - I write all the code myself, Claude is my mentor
- **Claude's role** - Provide guidance, feedback, hints, and ideas based on current best practices
- **Tech Stack Focus** - React (Frontend) + Django (Backend) + Docker
- **Progressive Complexity** - Start simple, add advanced features gradually
- **Production-Ready** - Learn industry best practices from day one
- **Hands-On** - Code first, theory as needed
- **Build Many Apps** - Each project teaches new concepts

---

## 📚 Current Project: Personal Expense Tracker

### Project Overview
- **Status**: 🚀 In Progress
- **Start Date**: 2025-11-25
- **Repository**: `expense-tracker-fullstack/`

### Tech Stack
- Backend: Django 5.x + Django REST Framework + PostgreSQL
- Frontend: React 18+ (Vite) + Tailwind CSS
- DevOps: Docker + docker-compose + devcontainer

### Learning Goals
- [x] Docker containers and devcontainers basics
- [ ] Django REST Framework basics
- [ ] React hooks (useState, useEffect)
- [ ] CRUD operations
- [ ] User authentication (JWT/Sessions)
- [ ] Database modeling (PostgreSQL)
- [ ] Docker multi-service setup with docker-compose
- [ ] API integration with axios/fetch
- [ ] Data visualization with charts
- [ ] Form handling & validation

### Features
- [ ] User registration & login
- [ ] Add/Edit/Delete expenses
- [ ] Categorize expenses
- [ ] Filter by date range/category
- [ ] Dashboard with spending charts
- [ ] Responsive design

### Implementation Roadmap (12 Chunks)

**Phase 1: Docker Foundation (Setup First!)**
- [ ] **Chunk 1**: Create Django backend project structure + Dockerfile
- [ ] **Chunk 2**: Create React frontend project structure + Dockerfile
- [ ] **Chunk 3**: Create docker-compose.yml with PostgreSQL database
- [ ] **Chunk 4**: Test full stack running together (frontend, backend, database)

**Phase 2: Django Backend Development**
- [ ] **Chunk 5**: Create Django Expense model with basic fields
- [ ] **Chunk 6**: Set up Django REST API endpoints (list, create)
- [ ] **Chunk 7**: Add update and delete API endpoints
- [ ] **Chunk 8**: Add filtering and validation

**Phase 3: React Frontend Development**
- [ ] **Chunk 9**: Create expense list component to display expenses
- [ ] **Chunk 10**: Build add expense form component
- [ ] **Chunk 11**: Add edit and delete functionality to frontend

**Phase 4: Polish & Enhancement**
- [ ] **Chunk 12**: Add styling with Tailwind CSS and improve UX

### Why Docker-First Approach?
✅ **Consistency** - Same environment on local machine and GitHub Codespaces
✅ **Complete setup** - Frontend, backend, and database configured together from the start
✅ **Better workflow** - No need to reconfigure when moving between environments
✅ **Avoids rework** - Don't set up locally, then dockerize later

### Next Steps
**Ready for Chunk 1: Django Backend + Dockerfile**

You'll create:
1. `backend/` directory
2. Django project with requirements.txt
3. `backend/Dockerfile` to containerize Django
4. Basic Django REST Framework setup

### Progress Notes

#### Session: 2025-11-27 - Roadmap Planning
**What we covered:**
- Reviewed two learning files (LEARNING_JOURNAL.md and LEARNING_PROGRESS.md)
- Decided to consolidate into single progress.md
- Reorganized roadmap to prioritize Docker setup first
- Aligned approach for both local and Codespaces development

**Key Decision:**
- Docker-first approach: Set up all containers (Django, React, PostgreSQL) before building features

#### Session: 2025-11-25 - Understanding Containers
**What we covered:**
- Discussed Personal Expense Tracker project idea
- Explored benefits of using Docker
- Understood how Docker includes database (PostgreSQL in containers)
- Created learning journal structure
- **Docker containers vs virtual environments**: When using Docker, no need for Python venv because containers provide isolation

**Key Learnings:**
- **How to check if inside a container**:
  - Check for `/.dockerenv` file
  - Username is typically `vscode`
  - Hostname looks like random ID
- **When container starts**: Automatically when opening project in VSCode (if devcontainer.json exists)
- **Your devcontainer includes**: Python 3.11, Node.js 20, Docker-in-Docker, Claude CLI

**Questions/Clarifications:**
- How does database persistence work in Docker? ✅ Answered (volumes)

### Challenges & Solutions
- (Document blockers and how you solved them)

### Key Takeaways
- (What you learned after completing this project)

---

## 🛠️ Skills Progression Tracker

### React Skills
- [ ] **Basics**: Components, Props, JSX
- [ ] **Hooks**: useState, useEffect, useContext
- [ ] **State Management**: Context API / Redux basics
- [ ] **Routing**: React Router v6
- [ ] **Forms**: Controlled components, validation
- [ ] **API Integration**: fetch/axios, async/await
- [ ] **Advanced**: Custom hooks, performance optimization
- [ ] **Testing**: Jest, React Testing Library

### Django Skills
- [ ] **Basics**: Models, Views, URLs
- [ ] **REST API**: Django REST Framework, Serializers
- [ ] **Authentication**: JWT, Sessions, Permissions
- [ ] **Database**: ORM, QuerySets, Migrations
- [ ] **Advanced**: Custom managers, signals, middleware
- [ ] **Security**: CORS, CSRF, input validation
- [ ] **Testing**: pytest, unit tests, integration tests
- [ ] **Optimization**: Database indexing, query optimization

### DevOps & Tools
- [x] **Docker Basics**: Containers, devcontainers
- [ ] **Docker Advanced**: Dockerfile, docker-compose, multi-service orchestration
- [ ] **Git**: Branching, merging, PR workflow
- [ ] **Deployment**: Render/Railway/AWS basics
- [ ] **CI/CD**: GitHub Actions basics
- [ ] **Databases**: PostgreSQL, Redis (caching)

### General Engineering
- [ ] **API Design**: REST principles, versioning
- [ ] **Security**: OWASP Top 10 awareness
- [ ] **Code Quality**: Clean code, code reviews
- [ ] **Documentation**: README, API docs
- [ ] **Debugging**: Browser DevTools, Django Debug Toolbar

---

## 📖 Learning Resources

### Documentation
- [React Docs](https://react.dev)
- [Django Docs](https://docs.djangoproject.com)
- [Django REST Framework](https://www.django-rest-framework.org)
- [Docker Docs](https://docs.docker.com)

### Useful Commands

```bash
# Check if in container
ls /.dockerenv
whoami
hostname

# Docker
docker-compose up          # Start all services
docker-compose up --build  # Rebuild and start
docker-compose down        # Stop all services
docker-compose down -v     # Stop and remove volumes
docker-compose logs        # View logs
docker-compose logs -f     # Follow logs
docker-compose exec backend python manage.py shell

# Django (inside container)
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver

# React (inside container)
npm install
npm run dev
npm run build
```

---

## 🎓 Future Project Ideas

Queue of projects to build after completing current ones:

1. **Blog Platform** - Rich text editor, comments, tags, search
2. **Task Management App** - Kanban board, drag-drop, real-time updates
3. **E-commerce Store** - Products, cart, checkout, payment integration
4. **Social Media Clone** - Posts, likes, follows, feed algorithm
5. **Job Board** - Listings, applications, search/filters
6. **Recipe Sharing Platform** - Upload images, ratings, collections
7. **Chat Application** - WebSockets, real-time messaging
8. **Portfolio/CMS** - Admin panel, content management

---

## 📝 Templates for Each Session

**At the start of each session, share this with Claude:**

> You're my fullstack engineering mentor. We're building [PROJECT NAME].
>
> **Last session:** [What we accomplished]
>
> **Current status:** [What's working, what's not]
>
> **Today's goal:** [What you want to achieve]
>
> See progress.md for full context.

---

## 🏆 Milestones & Celebrations

- [ ] First Dockerfile created
- [ ] First docker-compose.yml working
- [ ] First Django API endpoint created
- [ ] First React component rendered
- [ ] First database query working
- [ ] First full-stack feature (frontend ↔ backend)
- [ ] First project deployed to production
- [ ] First project completed end-to-end
- [ ] Built 5 full-stack applications
- [ ] Built 10 full-stack applications

---

**Last Updated**: 2025-11-27
**Current Project**: Personal Expense Tracker
**Next Chunk**: #1 - Create Django backend project structure + Dockerfile
**Projects Completed**: 0/10

When you're ready to continue, start your next session with me by saying:
"You're my fullstack engineering mentor. See progress.md for context. Today I want to work on Chunk 1: Setting up the Django backend with Docker."
