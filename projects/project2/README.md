# Project 2: All about your course (Full-stack)

### [Web: Beta](https://nyu-course-reviews-c0v14h3lz-bk00119.vercel.app/)

### [GitHub Repo](https://github.com/bk00119/NYU_Course_Reviews)

### [Figma Wireframe](https://www.figma.com/file/fFhlKNgfpxM6pp3CmJSFZb/NYU-Course-Reviews?type=design&node-id=0-1&mode=design&t=Tt5kchVVFl4yakqH-0)

# Overview of the Project
## View course prereqs and basic info
- Instruction mode
- Past course days, times
- Credit units

## Course ratings/comments
- By each section/semester
- Form: course, section, ratings, comments, grade (optional)

## Pages
- Home
- School (Tandon, CAS, etc): show a list of subjects
- Subject: show a list of courses
- Course

## Tools/Language
- MongoDB Atlas for cloud DB
- Frameworks: Next.js (SSR & some Client Components)
- Tailwind CSS
- Node.js for backend
- Hosted on Vercel

# Development
## Pages
- `/`: List of schools at NYU
- `/[school]/`: List of subjects at the school
- `/[school]/[subject]/`: List of coures of the subject
- `/[school]/[subject]/[course]/`: Info of the course and a list of sections of it
- `/[school]/[subject]/[course]/[section]/`: Info of the section and a list of reviews
- `/review/course_section`: Form for writing a review of the course section
- `/api/*`: API routes


## Directories
- **`page.js` are for page and `route.js` are for API routes**
- `src/app/*`: Pages that clients can see (ex. src/app/api/school/schools is http://localhost:3000/api/school/schools)
- `src/app/[page]`: Page like this takes a value for its parameter
- `src/app/components/*`: Reusable components are located here
- `src/lib/*`: Mostly server side functions are located here such as a function for fetching data from MongoDB (CLIENTS DON'T HAVE ACCESS)
- `src/lib/store/*`: Redux store
- `src/lib/db/*`: DB Functions