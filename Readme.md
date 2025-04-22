# CV Template Editor

A modern React application that allows users to create professional CVs using customizable templates.

![CV Template Editor Screenshot](/public/images/readme/app-screenshot.png)

## 🚀 Features

- Multiple specialized CV templates for different professions:
  - Simple CV
  - Professional CV
  - Modern CV
  - Web Developer CV
  - Cloud Engineer CV
  - Business Analyst CV
  - Data Engineer CV
  - DevOps Engineer CV
  - Marketing Specialist CV
- Live preview while editing
- Drag-and-drop sections
- Image upload with cropping functionality
- Multi-language support (English and Vietnamese)
- Export to PDF and Word formats
- Responsive design

## 🔧 Tech Stack

- NextJS (React framework)
- TailwindCSS (Styling)
- Context API (State management)
- jsPDF (PDF generation)
- HTML2Canvas (HTML to image conversion)
- React-Cropper (Image cropping)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/uit-ntn/cv-template-editor.git
cd cv-template-editor
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Usage

1. Select a CV template from the homepage
2. Fill in your personal details, experience, education, and skills
3. Add template-specific sections as needed
4. Preview your CV in real-time
5. Export to PDF or Word format when you're done

## 🌐 Multilingual Support

The application supports both English and Vietnamese languages. You can switch between languages using the language selector in the navigation bar.

## 📄 Templates

### Simple Template
A clean, straightforward CV layout for general use

### Professional Template
A sophisticated design for corporate and executive roles

### Modern Template
A contemporary design with stylish elements

### Web Developer Template
Specialized for frontend and backend developers with code snippet sections

### Cloud Engineer Template
Focused on cloud infrastructure and DevOps skills

### Business Analyst Template
Highlights analytical skills and methodologies

### Data Engineer Template
Emphasizes data processing and pipeline experience

### DevOps Engineer Template
Showcases automation and infrastructure as code skills

### Marketing Template
Features campaign results and social media expertise

## 🧩 Project Structure

cv-template-editor/
├── public/              # Static files
│   ├── images/          # Image assets
│   └── locales/         # Translation files
├── src/
│   ├── components/      # React components
│   │   ├── templates/   # CV template components
│   │   └── ...          # Other UI components
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Next.js pages
│   ├── styles/          # Global styles
│   └── utils/           # Helper functions
└── ...

