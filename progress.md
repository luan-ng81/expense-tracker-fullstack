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
- [x] Docker multi-service setup with docker-compose
- [x] React hooks (useState, useEffect)
- [x] API integration with fetch
- [ ] Django REST Framework basics
- [ ] CRUD operations
- [ ] User authentication (JWT/Sessions)
- [ ] Database modeling (PostgreSQL)
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

**Phase 1: Docker Foundation (Setup First!)** ✅ COMPLETED
- [x] **Chunk 1**: Create Django backend project structure + Dockerfile
- [x] **Chunk 2**: Create React frontend project structure + Dockerfile
- [x] **Chunk 3**: Create docker-compose.yml with PostgreSQL database
- [x] **Chunk 4**: Test full stack running together (frontend, backend, database)

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
**Ready for Chunk 5: Create Django Expense Model**

You'll create:
1. Django app called `expenses`
2. Expense model with fields (amount, description, category, date)
3. Run migrations to create database tables
4. Test model in Django admin

### Progress Notes

#### Session: 2025-11-27 - Phase 1 Complete: Docker Foundation
**What we accomplished:**
- ✅ **Chunk 1**: Created Django backend with Dockerfile using docker-compose run
- ✅ **Chunk 2**: Created React frontend with Vite using docker-compose run
- ✅ **Chunk 3**: Set up docker-compose.yml with PostgreSQL, backend, and frontend services
- ✅ **Chunk 4**: Verified full-stack communication with health check API endpoint
- ✅ Configured CORS for frontend-backend communication
- ✅ Connected Django to PostgreSQL database
- ✅ Committed and pushed Phase 1 to GitHub

**Key Learnings:**
- Docker-first approach: Created entire project without local Python/Node installations
- Used `docker-compose run` to execute commands inside containers
- Understood CORS and why it's needed for frontend-backend communication
- Learned about ALLOWED_HOSTS security in Django
- Practiced React hooks: useState, useEffect for API calls
- Set up .gitignore to keep repository clean

**Challenges Solved:**
- Docker build failing due to empty package.json → Created simpler Dockerfile first, then replaced
- CORS errors blocking API calls → Configured django-cors-headers middleware
- Hot Module Replacement not working → Restarted frontend container

**Next Session Preview:**
- Phase 2: Django Backend Development
- Create Expense model with database fields

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
- [x] **Basics**: Components, Props, JSX
- [x] **Hooks**: useState, useEffect basics
- [x] **API Integration**: fetch, async/await basics
- [ ] **Hooks Advanced**: useContext, custom hooks
- [ ] **State Management**: Context API / Redux basics
- [ ] **Routing**: React Router v6
- [ ] **Forms**: Controlled components, validation
- [ ] **Advanced**: Performance optimization, useMemo, useCallback
- [ ] **Testing**: Jest, React Testing Library

### Django Skills
- [x] **Basics**: Views, URLs, Settings
- [x] **Database**: PostgreSQL connection, Migrations basics
- [x] **Security**: CORS, ALLOWED_HOSTS
- [ ] **Models**: Creating models, fields, relationships
- [ ] **REST API**: Django REST Framework, Serializers
- [ ] **Authentication**: JWT, Sessions, Permissions
- [ ] **Database Advanced**: ORM, QuerySets, complex queries
- [ ] **Advanced**: Custom managers, signals, middleware
- [ ] **Security Advanced**: CSRF, input validation, SQL injection prevention
- [ ] **Testing**: pytest, unit tests, integration tests
- [ ] **Optimization**: Database indexing, query optimization

### DevOps & Tools
- [x] **Docker Basics**: Containers, devcontainers
- [x] **Docker Advanced**: Dockerfile, docker-compose, multi-service orchestration
- [x] **Git**: Basic workflow, commits, push to GitHub
- [x] **Databases**: PostgreSQL basics with Docker
- [ ] **Git Advanced**: Branching, merging, PR workflow
- [ ] **Deployment**: Render/Railway/AWS basics
- [ ] **CI/CD**: GitHub Actions basics
- [ ] **Databases Advanced**: Redis (caching), query optimization

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

- [x] First Dockerfile created (Django + React)
- [x] First docker-compose.yml working (3 services!)
- [x] First Django API endpoint created (health check)
- [x] First React component rendered (App.jsx)
- [x] First full-stack feature (frontend ↔ backend communication)
- [x] First git commit and push with Docker setup
- [ ] First database model created
- [ ] First CRUD API endpoint working
- [ ] First React form submitting data
- [ ] First complete feature (add expense)
- [ ] First project deployed to production
- [ ] First project completed end-to-end
- [ ] Built 5 full-stack applications
- [ ] Built 10 full-stack applications

---

**Last Updated**: 2025-11-27
**Current Project**: Personal Expense Tracker
**Phase Completed**: Phase 1 - Docker Foundation ✅
**Next Chunk**: #5 - Create Django Expense model with basic fields
**Projects Completed**: 0/10

When you're ready to continue, start your next session with me by saying:
"You're my fullstack engineering mentor. See progress.md for context. Today I want to work on Phase 2: Django Backend Development, starting with Chunk 5: Creating the Expense model."
