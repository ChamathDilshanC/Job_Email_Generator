export interface EmailData {
  companyName: string;
  position: string;
  recipientEmail: string;
}

export const EMAIL_SUBJECT =
  'Application for {POSITION} Position - Chamath Dilshan';

// Unicode bold character mapping for text that appears bold in Gmail
const boldCharMap: { [key: string]: string } = {
  A: '𝗔',
  B: '𝗕',
  C: '𝗖',
  D: '𝗗',
  E: '𝗘',
  F: '𝗙',
  G: '𝗚',
  H: '𝗛',
  I: '𝗜',
  J: '𝗝',
  K: '𝗞',
  L: '𝗟',
  M: '𝗠',
  N: '𝗡',
  O: '𝗢',
  P: '𝗣',
  Q: '𝗤',
  R: '𝗥',
  S: '𝗦',
  T: '𝗧',
  U: '𝗨',
  V: '𝗩',
  W: '𝗪',
  X: '𝗫',
  Y: '𝗬',
  Z: '𝗭',
  a: '𝗮',
  b: '𝗯',
  c: '𝗰',
  d: '𝗱',
  e: '𝗲',
  f: '𝗳',
  g: '𝗴',
  h: '𝗵',
  i: '𝗶',
  j: '𝗷',
  k: '𝗸',
  l: '𝗹',
  m: '𝗺',
  n: '𝗻',
  o: '𝗼',
  p: '𝗽',
  q: '𝗾',
  r: '𝗿',
  s: '𝘀',
  t: '𝘁',
  u: '𝘂',
  v: '𝘃',
  w: '𝘄',
  x: '𝘅',
  y: '𝘆',
  z: '𝘇',
  '0': '𝟬',
  '1': '𝟭',
  '2': '𝟮',
  '3': '𝟯',
  '4': '𝟰',
  '5': '𝟱',
  '6': '𝟲',
  '7': '𝟳',
  '8': '𝟴',
  '9': '𝟵',
};

/**
 * Converts text to Unicode bold characters for Gmail
 */
function toBold(text: string): string {
  return text
    .split('')
    .map(char => boldCharMap[char] || char)
    .join('');
}

export const EMAIL_TEMPLATE = `Chamath Dilshan
+94 775 616 104 | dilshancolonne123@gmail.com

Dear Hiring Manager,

I am writing to express my interest in the {POSITION} position at {COMPANY_NAME}. As a Trainee Software Engineer pursuing a BSc (Hons) in Computer Science at the Institute of Software Engineering (IJSE), I bring hands-on experience in full-stack development, agile methodologies, and modern web technologies that align with your team's needs.

Technical Proficiency

Frontend Technologies: React.js, Angular, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design, Progressive Web Apps (PWA), UI/UX implementation, PHP

Backend Technologies: Node.js, Express.js, Java Spring Boot, RESTful APIs, Microservices architecture, JWT authentication, API integration

Database Systems: MySQL, MongoDB, Database design, Query optimization, NoSQL, Relational databases

Development Tools & Practices: Git, GitHub, Version control, CI/CD, Agile/Scrum, Test-driven development (TDD), Code review, MVC architecture, Client-Server architecture, Object-oriented programming (OOP)

Professional Experience & Key Projects

Trainee Software Engineer | IJSE | [Current]
• Developing scalable web applications using modern JavaScript frameworks and backend technologies
• Collaborating with cross-functional teams in agile environments to deliver high-quality software solutions
• Implementing responsive design patterns and ensuring cross-browser compatibility

Freelance Software Developer & Graphic Designer
• Delivering custom web solutions for diverse clients with focus on performance optimization and user experience
• Managing full project lifecycle from requirements gathering to deployment and maintenance

Featured Projects:

Spend Sight Mobile Application
Comprehensive expense tracking application with features including income management, budget planning, and financial goal tracking. Demonstrates expertise in mobile-first development and data visualization.

PowerAlert - Utility Monitoring Platform
Full-stack application featuring secure JWT authentication, RESTful API backend, real-time monitoring capabilities, and responsive frontend. Showcases ability to build production-ready applications with industry-standard security practices.

React-Based Tools Suite
Developed Password Generator and QR Code Generator using React, TypeScript, and Firebase deployment, highlighting proficiency in component-based architecture and cloud platforms.

Portfolio: chamathdilshan.com

What I Bring to Your Team

Problem-Solving: Strong analytical skills with ability to debug complex issues and optimize application performance

Collaboration: Experience working in team environments, participating in code reviews, and contributing to technical discussions

Learning Agility: Quick learner passionate about emerging technologies, best practices, and continuous skill development

Clean Code Advocate: Commitment to writing maintainable, well-documented code following industry standards and design patterns

Initiative: Self-starter with proven ability to manage multiple projects and deliver results in fast-paced environments

I am excited about the opportunity to contribute to {COMPANY_NAME}'s innovative projects while learning from your experienced engineering team. My combination of academic foundation, practical experience, and enthusiasm for software development positions me to make meaningful contributions from day one.

I would welcome the opportunity to discuss how my technical skills, project experience, and passion for software engineering align with your team's objectives. Thank you for considering my application.

Best regards,
Chamath Dilshan`;

// Gmail-optimized version with Unicode bold text (reduced bold usage to stay under URL limits)
function createGmailTemplate(companyName: string, position: string): string {
  const boldCompany = toBold(companyName);

  return `Chamath Dilshan
+94 775 616 104 | dilshancolonne123@gmail.com

Dear Hiring Manager,

I am writing to express my interest in the ${position} position at ${boldCompany}. As a Trainee Software Engineer pursuing a BSc (Hons) in Computer Science at the Institute of Software Engineering (IJSE), I bring hands-on experience in full-stack development, agile methodologies, and modern web technologies that align with your team's needs.

${toBold('Technical Proficiency')}

Frontend Technologies: React.js, Angular, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design, Progressive Web Apps (PWA), UI/UX implementation, PHP

Backend Technologies: Node.js, Express.js, Java Spring Boot, RESTful APIs, Microservices architecture, JWT authentication, API integration

Database Systems: MySQL, MongoDB, Database design, Query optimization, NoSQL, Relational databases

Development Tools & Practices: Git, GitHub, Version control, CI/CD, Agile/Scrum, Test-driven development (TDD), Code review, MVC architecture, Client-Server architecture, Object-oriented programming (OOP)

${toBold('Professional Experience & Key Projects')}

Trainee Software Engineer | IJSE | [Current]
• Developing scalable web applications using modern JavaScript frameworks and backend technologies
• Collaborating with cross-functional teams in agile environments to deliver high-quality software solutions
• Implementing responsive design patterns and ensuring cross-browser compatibility

Freelance Software Developer & Graphic Designer
• Delivering custom web solutions for diverse clients with focus on performance optimization and user experience
• Managing full project lifecycle from requirements gathering to deployment and maintenance

Featured Projects:

Spend Sight Mobile Application
Comprehensive expense tracking application with features including income management, budget planning, and financial goal tracking. Demonstrates expertise in mobile-first development and data visualization.

PowerAlert - Utility Monitoring Platform
Full-stack application featuring secure JWT authentication, RESTful API backend, real-time monitoring capabilities, and responsive frontend. Showcases ability to build production-ready applications with industry-standard security practices.

React-Based Tools Suite
Developed Password Generator and QR Code Generator using React, TypeScript, and Firebase deployment, highlighting proficiency in component-based architecture and cloud platforms.

Portfolio: chamathdilshan.com

${toBold('Education & Professional Development')}

BSc (Hons) in Computer Science | Institute of Software Engineering (IJSE)
Comprehensive training in software engineering principles, algorithms, data structures, and modern development practices

I am excited about the opportunity to contribute to ${boldCompany}'s innovative projects while learning from your experienced engineering team. My combination of academic foundation, practical experience, and enthusiasm for software development positions me to make meaningful contributions from day one.

I would welcome the opportunity to discuss how my technical skills, project experience, and passion for software engineering align with your team's objectives. Thank you for considering my application.

Best regards,
Chamath Dilshan`;
}

// HTML version with bold formatting for Gmail
export const EMAIL_TEMPLATE_HTML = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
<p><strong>Chamath Dilshan</strong><br>
+94 775 616 104 | dilshancolonne123@gmail.com</p>

<p>Dear Hiring Manager,</p>

<p>I am writing to express my interest in the {POSITION} position at <strong>{COMPANY_NAME}</strong>. As a Trainee Software Engineer pursuing a BSc (Hons) in Computer Science at the Institute of Software Engineering (IJSE), I bring hands-on experience in full-stack development, agile methodologies, and modern web technologies that align with your team's needs.</p>

<p><strong>Technical Proficiency</strong></p>

<p><strong>Frontend Technologies:</strong> React.js, Angular, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design, Progressive Web Apps (PWA), UI/UX implementation, PHP</p>

<p><strong>Backend Technologies:</strong> Node.js, Express.js, Java Spring Boot, RESTful APIs, Microservices architecture, JWT authentication, API integration</p>

<p><strong>Database Systems:</strong> MySQL, MongoDB, Database design, Query optimization, NoSQL, Relational databases</p>

<p><strong>Development Tools & Practices:</strong> Git, GitHub, Version control, CI/CD, Agile/Scrum, Test-driven development (TDD), Code review, MVC architecture, Client-Server architecture, Object-oriented programming (OOP)</p>

<p><strong>Professional Experience & Key Projects</strong></p>

<p><strong>Trainee Software Engineer | IJSE | [Current]</strong><br>
• Developing scalable web applications using modern JavaScript frameworks and backend technologies<br>
• Collaborating with cross-functional teams in agile environments to deliver high-quality software solutions<br>
• Implementing responsive design patterns and ensuring cross-browser compatibility</p>

<p><strong>Freelance Software Developer & Graphic Designer</strong><br>
• Delivering custom web solutions for diverse clients with focus on performance optimization and user experience<br>
• Managing full project lifecycle from requirements gathering to deployment and maintenance</p>

<p><strong>Featured Projects:</strong></p>

<p><strong>Spend Sight Mobile Application</strong><br>
Comprehensive expense tracking application with features including income management, budget planning, and financial goal tracking. Demonstrates expertise in mobile-first development and data visualization.</p>

<p><strong>PowerAlert - Utility Monitoring Platform</strong><br>
Full-stack application featuring secure JWT authentication, RESTful API backend, real-time monitoring capabilities, and responsive frontend. Showcases ability to build production-ready applications with industry-standard security practices.</p>

<p><strong>React-Based Tools Suite</strong><br>
Developed Password Generator and QR Code Generator using React, TypeScript, and Firebase deployment, highlighting proficiency in component-based architecture and cloud platforms.</p>

<p><strong>Portfolio:</strong> chamathdilshan.com</p>

<p><strong>What I Bring to Your Team</strong></p>

<p><strong>Problem-Solving:</strong> Strong analytical skills with ability to debug complex issues and optimize application performance</p>

<p><strong>Collaboration:</strong> Experience working in team environments, participating in code reviews, and contributing to technical discussions</p>

<p><strong>Learning Agility:</strong> Quick learner passionate about emerging technologies, best practices, and continuous skill development</p>

<p><strong>Clean Code Advocate:</strong> Commitment to writing maintainable, well-documented code following industry standards and design patterns</p>

<p><strong>Initiative:</strong> Self-starter with proven ability to manage multiple projects and deliver results in fast-paced environments</p>

<p>I am excited about the opportunity to contribute to <strong>{COMPANY_NAME}</strong>'s innovative projects while learning from your experienced engineering team. My combination of academic foundation, practical experience, and enthusiasm for software development positions me to make meaningful contributions from day one.</p>

<p>I would welcome the opportunity to discuss how my technical skills, project experience, and passion for software engineering align with your team's objectives. Thank you for considering my application.</p>

<p>Best regards,<br>
Chamath Dilshan</p>
</div>`;

export function generateEmail(data: EmailData): {
  subject: string;
  body: string;
  bodyHtml: string;
  bodyGmail: string;
} {
  const subject = EMAIL_SUBJECT.replace('{POSITION}', data.position);

  const body = EMAIL_TEMPLATE.replace(
    /{COMPANY_NAME}/g,
    data.companyName
  ).replace(/{POSITION}/g, data.position);

  const bodyHtml = EMAIL_TEMPLATE_HTML.replace(
    /{COMPANY_NAME}/g,
    data.companyName
  ).replace(/{POSITION}/g, data.position);

  // Gmail-specific version with Unicode bold characters
  const bodyGmail = createGmailTemplate(data.companyName, data.position);

  return { subject, body, bodyHtml, bodyGmail };
}
