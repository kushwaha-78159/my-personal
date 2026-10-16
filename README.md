Abhishek Kushwaha --- Personal Portfolio
A personal portfolio website built with Next.js, TypeScript, and
Tailwind CSS. It presents profile information, services, projects, and
contact options, with an admin area for managing portfolio projects and
reviewing contact enquiries.
Repository:
kushwaha-78159/my-personal

Table of Contents
- Overview
- Features
- Technology Stack
- Project Structure
- Getting Started
- Environment Variables
- Database Setup
- Run the Website
- Available Pages and API Routes
- Admin Panel
- Contact Enquiries
- Build and Quality Checks
- Deployment Notes
- Security Notes
- Author
- License
Overview
This project is a responsive personal portfolio intended to showcase the
author's background, services, and projects. It includes a
database-backed project manager and contact-enquiry workflow so that
portfolio content and visitor messages can be managed from an admin
area.
Features
Public website
- Home page introducing the portfolio.
- About page for profile and background information.
- Services page describing offered services.
- Projects page for displaying published projects.
- Contact page with a visitor enquiry form.
- Shared site navigation and layout components.
- Profile image stored in public/images/.
Project management
- Create portfolio projects through the admin interface.
- Edit existing project details.
- Delete projects.
- Publish or unpublish projects.
- Public projects endpoint for retrieving published projects.
- Published projects can be displayed on the public Projects page.
Project records include fields such as title, description, technology,
category, URL, and publication status.
Contact enquiries
- Visitors can submit a contact enquiry from the website.
- Enquiries are designed to be stored in the database.
- Admin users can review submitted enquiries.
- Enquiry records support status updates and deletion.
The enquiry model includes fields for name, email, phone, project type,
budget, message, and status.
Admin area
- Admin login and logout routes.
- Dashboard with project and enquiry summaries.
- Dedicated project-management screen.
- Dedicated contact-enquiry screen.
The admin area and database features require valid environment
configuration and a working database. Test the complete login, project
publishing, and contact submission flow in your own environment before
production deployment.

Technology Stack
  Technology        Purpose
  Next.js 16        React framework and application routing
  React             User interface
  TypeScript        Type-safe application code
  Tailwind CSS      Styling
  Prisma ORM        Database access and schema management
  PostgreSQL        Relational database
  Lucide React      Icons, where used
  Node.js and npm   Runtime and package management
Project Structure
my-personal/
├── prisma/
│   └── schema.prisma           # Database models
├── generated/
│   └── prisma/                 # Generated Prisma client files
├── public/
│   └── images/
│       └── profile.jpg         # Public profile image
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── admin/
│   │   │   ├── contacts/
│   │   │   ├── login/
│   │   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   ├── admin/
│   │   │   │   ├── contacts/
│   │   │   │   ├── content/
│   │   │   │   ├── login/
│   │   │   │   ├── logout/
│   │   │   │   └── projects/
│   │   │   ├── contact/
│   │   │   └── projects/
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── AdminManager.tsx
│   │   ├── ContactForm.tsx
│   │   ├── LiveProjects.tsx
│   │   └── SiteHeader.tsx
│   ├── data/
│   │   └── projects.ts
│   └── lib/
│       ├── admin-auth.ts
│       └── prisma.ts
├── .env                       # Local environment variables; do not commit secrets
├── package.json
├── prisma.config.ts
├── next.config.ts
└── README.md
Some generated or configuration files may vary as the project evolves.
Getting Started
Prerequisites
Install the following before running the project:
- Node.js version compatible with the Next.js version in
  package.json.
- npm.
- A PostgreSQL database.
- Git.
1. Clone the repository
git clone https://github.com/kushwaha-78159/my-personal.git
cd my-personal
2. Install dependencies
npm install
3. Configure environment variables
Create a local .env file in the project root. Add the values required
by your local setup; see the next section for the expected variable
names.
4. Generate the Prisma client
npx prisma generate
5. Prepare the database
After setting DATABASE_URL, apply the schema to your development
database:
npx prisma db push
For a production database, prefer a reviewed migration workflow rather
than using db push as an automatic deployment step.
6. Start the development server
npm run dev
Open http://localhost:3000 in your browser.
Environment Variables
Keep secrets in .env locally and in your hosting provider's
environment-variable settings in production. Never commit real
credentials.
The project configuration has used the following variables:
  Variable                            Purpose
  DATABASE_URL                      PostgreSQL connection string used
                                      by Prisma
  ADMIN_EMAIL                       Admin login email
  ADMIN_PASSWORD                    Admin login password
  AUTH_SECRET                       Secret used by the admin
                                  authentication implementation
Example template (replace all placeholder values):
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="replace-with-a-strong-unique-password"
AUTH_SECRET="replace-with-a-long-random-secret"
Use a strong, unique admin password and a long random authentication
secret. The example values above are placeholders only. Your actual
database provider may require additional connection parameters.
Database Setup
The Prisma schema is located at prisma/schema.prisma.
The main models used by the portfolio include:
Project
Stores portfolio projects and their publication state. Common fields
include:
- title
- description
- technology
- category
- url
- published
- creation and update timestamps
ContactInquiry
Stores messages submitted by website visitors. The model includes:
- name
- email
- phone
- projectType
- budget
- message
- status
- creation and update timestamps
Review prisma/schema.prisma for the exact current model definitions
before changing or deploying the database.
Run the Website
Common commands:
# Start local development
npm run dev

# Run TypeScript checks
npx tsc --noEmit

# Create a production build
npm run build

# Start the production server after building
npm run start

# Regenerate Prisma client after schema changes
npx prisma generate
Available Pages and API Routes
Public pages
  Path          Purpose
  /           Home page
  /about      About/profile page
  /services   Services page
  /projects   Public projects
  /contact    Contact form
Admin pages
  Path                Purpose
  /admin/login      Admin sign-in
  /admin            Admin dashboard
  /admin/projects   Manage projects
  /admin/contacts   Review contact enquiries
API routes
  Route                               Purpose
  /api/projects                     Public project data endpoint
  /api/contact                      Contact enquiry submission
  /api/admin/login                  Admin login
  /api/admin/logout                 Admin logout
  /api/admin/projects               Admin project collection operations
  /api/admin/projects/[id]          Operations on an individual project
  /api/admin/contacts               Retrieve contact enquiries
  /api/admin/contacts/[id]          Update or delete an individual
                                      enquiry
  /api/admin/content                Admin content endpoint retained in
                                  the codebase
API behavior is governed by the current route-handler implementation and
authentication checks. Confirm permissions and validation before
exposing endpoints publicly.
Admin Panel
1. Start the application and configure the required environment
   variables.
2. Open /admin/login.
3. Sign in using the administrator credentials configured in your
   environment.
4. Use the dashboard to open project management or contact enquiries.
5. Create or edit a project and set its publication state as
   appropriate.
6. Review visitor enquiries and update their status when handled.
If login fails, check the environment variables, database connection,
server logs, and the current implementation in src/lib/admin-auth.ts.
Contact Enquiries
To verify the enquiry workflow:
1. Open /contact.
2. Submit a test message using non-sensitive test details.
3. Confirm that the API returns a successful response.
4. Open /admin/contacts.
5. Verify that the test enquiry appears and that status updates work.
Remove test records when finished. Do not submit real personal
information while debugging a development deployment.
Build and Quality Checks
Before committing or deploying changes, run:
npx tsc --noEmit
npm run build
Then manually test:
- All public pages load.
- Navigation links work.
- Admin login and logout work.
- Projects can be created, edited, deleted, published, and
  unpublished.
- Only intended published projects appear publicly.
- Contact submissions are validated and stored.
- Enquiries appear in the admin screen.
- Unauthorized visitors cannot use admin-only API operations.
Deployment Notes
For a production deployment:
1. Push the repository to GitHub.
2. Choose a hosting platform that supports your Next.js application.
3. Provision a production PostgreSQL database.
4. Configure DATABASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD, and
   AUTH_SECRET in the hosting environment.
5. Configure the production database schema using a controlled
   migration process.
6. Build and deploy the application.
7. Test public pages, admin authentication, project publishing, and
   contact enquiries on the deployed URL.
Do not rely on a local development database for a deployed site. Ensure
that your deployed application and admin panel use the intended
production database.
Security Notes
- Never commit .env, database passwords, admin passwords, or
  authentication secrets.
- Rotate credentials immediately if they are exposed.
- Use HTTPS in production.
- Use a strong, unique administrator password.
- Validate and sanitize all user-submitted form fields on the server.
- Apply authentication and authorization checks to every admin-only
  API route.
- Add rate limiting and spam protection to public contact endpoints
  before production use.
- Back up the production database and test your recovery process.
- Review database connection settings with your provider before using
  connection pooling.
Author
Abhishek Kushwaha
- GitHub: @kushwaha-78159
- Repository:
  my-personal
License
No license has been specified in this README. Unless a license file is
added to the repository, do not assume that the project is open source
or that others have permission to redistribute or reuse it
