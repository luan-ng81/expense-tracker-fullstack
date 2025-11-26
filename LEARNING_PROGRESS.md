# Expense Tracker Learning Progress

## 🎯 Project Goal
Build a full-stack expense tracker with React, Django, and Docker

## 📚 Learning Path (12 Chunks)

### ✅ Completed
- [x] **Chunk 1**: Learned about Docker containers and devcontainers

### 🔄 Current Status
**Next up**: Chunk #1 - Set up Django backend project structure

**Commands to run next time:**
```bash
mkdir backend
cd backend
pip install django djangorestframework django-cors-headers
django-admin startproject expense_tracker .
pip freeze > requirements.txt
```

### 📋 Remaining Chunks

**Phase 1: Django Backend**
- [ ] Chunk 1: Set up Django backend project structure
- [ ] Chunk 2: Create Django Expense model with basic fields
- [ ] Chunk 3: Set up Django REST API endpoints (list, create)
- [ ] Chunk 4: Add update and delete API endpoints

**Phase 2: React Frontend**
- [ ] Chunk 5: Set up React frontend project with Vite
- [ ] Chunk 6: Create expense list component to display expenses
- [ ] Chunk 7: Build add expense form component
- [ ] Chunk 8: Add edit and delete functionality to frontend

**Phase 3: Docker Integration**
- [ ] Chunk 9: Create Docker setup (Dockerfile for Django)
- [ ] Chunk 10: Create Docker setup (Dockerfile for React)
- [ ] Chunk 11: Create docker-compose.yml to orchestrate services

**Phase 4: Polish**
- [ ] Chunk 12: Add basic styling to make the app look nice

## 💡 Key Learnings

### Session 1: Understanding Containers
- **Docker containers vs virtual environments**: When using Docker, no need for Python venv because containers provide isolation
- **How to check if inside a container**:
  - Check for `/.dockerenv` file
  - Username is typically `vscode`
  - Hostname looks like random ID
- **When container starts**: Automatically when opening project in VSCode (if devcontainer.json exists)
- **Your devcontainer includes**: Python 3.11, Node.js 20, Docker-in-Docker, Claude CLI

## 🔖 Useful Commands
```bash
# Check if in container
ls /.dockerenv

# Check username
whoami

# Check hostname
hostname
```

## 📝 Notes for Next Session
- Ready to create the Django backend structure
- No virtual environment needed (using devcontainer)
- Will save dependencies in requirements.txt for Docker image later
