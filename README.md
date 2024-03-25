# PcAssemblies

--- 
## Project Description:
The system allows the user to select and configure a PC assembly. It starts by selecting office, gaming, work, high-end. Accordingly, it will display the basic build for that selection. Users the option to change the processor, operating memory, graphics card and possibly add peripherals or something from the additional menu to the PC. Each operation checks for part compatibility between the selected items (processors and motherboards, RAM speed, ...). Give options to change corresponding to the category. Based on the selection, the user is always shown the calculated price of the build and can request a summary with the configuration.

---
## Functionalities:
### Must have:
- the database should track at least 6 entities
- components are stored persistently
- listings can be sorted, filtered
- each configuration must be validated
- each pc component must have an image
- user can choose a predefined configuration that can be customized
- administrator can add predefined configurations
- administrator can create and delete components
- when the configuration is complete, a summary is displayed to the user

---
## Tools Used:
### Backend:
- Express.js
- Node.js

### Database:
- Prisma
- PostgreSql

### Frontend:
- React
- Vite
- StoryBook

### Helper Tools:
- Prettier
- ESLint
- nx
- CommitLInt
- CodCov

### Testing:
- Playwright
- Jest

### Infrastracture:
- Docker Compose 
- Redis

---
## Milestones:
### **Milestone 1: Project Setup**

#### **Issues:**

1. Set up the project repository with **`nx`** for monorepo management.
2. Configure **`Prettier`** and **`ESLint`** for code formatting and linting.
3. Set up **`CommitLint`** to ensure commit message consistency.
4. Initialize the backend project using **`Express.js`** and **`Node.js`**.
5. Initialize the frontend project with **`React`** using **`Vite`**.
6. Configure **`Docker Compose`** for local development environment.
7. Set up basic **`Playwright`** and **`Jest`** testing environment.

### **Milestone 2: Database Design and API Development**

#### **Issues:**

1. Design the database schema for tracking at least 6 entities (e.g., Users, Components, Configurations, Orders, Reviews, Administrators).
2. Set up **`PostgreSQL`** database and integrate with **`Prisma`**.
3. Develop CRUD APIs for PC components management.
4. Implement authentication and authorization for users and administrators.
5. Develop APIs for listing, sorting, and filtering components.
6. Ensure API supports component compatibility validation.

### **Milestone 3: Frontend Development - Core Features**

#### **Issues:**

1. Implement the basic UI layout and navigation using **`React`**.
2. Create component libraries in **`StoryBook`** for UI consistency.
3. Develop pages for component listings with sort and filter capabilities.
4. Implement the configuration builder interface.
5. Add functionality for users to select a predefined configuration and customize it.
6. Integrate frontend with backend APIs for dynamic content.

### **Milestone 4: Advanced Features and User Interactions**

#### **Issues:**

1. Develop the compatibility checking logic on the frontend.
2. Implement the dynamic price calculation feature for custom configurations.
3. Create a user-friendly summary page for completed configurations.
4. Add functionality for administrators to add or delete predefined configurations.
5. Implement image upload and display functionality for PC components.
6. Ensure all components and configurations are validated before submission.

### **Milestone 5: Testing, Optimization, and Deployment**

#### **Issues:**

1. Write unit and integration tests for backend APIs using **`Jest`**.
2. Write end-to-end tests for user flows using **`Playwright`**.
3. Optimize application performance (e.g., query optimization, frontend loading speeds).
4. Set up **`CodCov`** for code coverage analysis.
5. Configure **`Redis`** for caching frequently accessed data.
6. Prepare Docker containers for deployment.
7. Deploy the application to a production environment.

### **Milestone 6: Post-Deployment and Maintenance**

#### **Issues:**

1. Monitor application performance and user feedback.
2. Fix any critical bugs reported by users.
3. Implement feature requests and improvements based on user feedback.
4. Ensure regular updates to dependencies and frameworks.
5. Conduct periodic code reviews to maintain code quality.


## Diagrams:
