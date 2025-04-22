const fs = require('fs');
const path = require('path');

// Define directories
const imagesDir = path.join(__dirname, '../public/images');
const templatesDir = path.join(imagesDir, 'templates');

// Ensure directories exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log(`Created directory: ${imagesDir}`);
}

if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
  console.log(`Created directory: ${templatesDir}`);
}

// Create grid pattern SVG
const gridPatternSvg = `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" stroke-opacity="0.2" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100" height="100" fill="url(#grid)" />
</svg>`;

fs.writeFileSync(path.join(imagesDir, 'grid-pattern.svg'), gridPatternSvg);
console.log('Created grid-pattern.svg');

// Function to create placeholder images
function createPlaceholderImage(filename, width = 800, height = 1100, color = '#f0f0f0', text = '') {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${color}"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#333" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;
  
  fs.writeFileSync(filename, svg);
  console.log(`Created: ${filename}`);
}

// Create template placeholders
const templates = [
  { id: 'simple', color: '#f5f5f5', text: 'Simple Template' },
  { id: 'professional', color: '#e6f0ff', text: 'Professional Template' },
  { id: 'modern', color: '#f0e6ff', text: 'Modern Template' },
  { id: 'webdev', color: '#e6ffec', text: 'Web Developer Template' },
  { id: 'cloud', color: '#e6f7ff', text: 'Cloud Engineer Template' },
  { id: 'analyst', color: '#f5e6ff', text: 'Business Analyst Template' },
  { id: 'dataeng', color: '#ffe6f7', text: 'Data Engineer Template' },
  { id: 'devops', color: '#e6fff7', text: 'DevOps Template' }
];

templates.forEach(template => {
  createPlaceholderImage(
    path.join(templatesDir, `${template.id}.png`), 
    800, 
    1100, 
    template.color, 
    template.text
  );
});

// Create example CV images
createPlaceholderImage(path.join(imagesDir, 'cv-example-1.jpg'), 800, 1100, '#e6f0ff', 'CV Example 1');
createPlaceholderImage(path.join(imagesDir, 'cv-example-2.jpg'), 800, 1100, '#f0e6ff', 'CV Example 2');

// Create portrait placeholder
createPlaceholderImage(path.join(imagesDir, 'portrait.jpg'), 400, 400, '#333', 'N');

console.log('All placeholder images created successfully!');
