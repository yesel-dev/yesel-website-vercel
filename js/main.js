/* ========================================
   Yesel - Main JavaScript
   Includes Chatbot Functionality
   ======================================== */

// ----------------------------------------
// Chatbot Configuration & FAQ Database
// ----------------------------------------
const chatbotFAQ = {
  // Programs
  programs: {
    keywords: [
      "program",
      "course",
      "class",
      "offer",
      "teach",
      "learn",
      "what do you",
      "subjects",
    ],
    response: `We offer programs in three main areas:

📱 <strong>Electronics</strong> - From basic circuits to Arduino & microcontrollers
💻 <strong>Coding</strong> - Scratch, Python, Web Development, Mobile Apps, AI/ML
🤖 <strong>Robotics</strong> - Robot design, programming, and competitions

Our programs are tailored for:
• Junior Secondary (Form 1-2)
• Senior Secondary (Form 3-4)  
• College/University students

We also offer Holiday Camps and School Partnership programs. Would you like details on a specific program?`,
  },

  // Enrollment
  enrollment: {
    keywords: [
      "enroll",
      "enrol",
      "register",
      "sign up",
      "join",
      "how to start",
      "admission",
      "apply",
    ],
    response: `Enrolling at Yesel is easy! Here's how:

1️⃣ <strong>Contact Us</strong> - Fill out our contact form, call, or WhatsApp us
2️⃣ <strong>Consultation</strong> - We'll discuss the student's interests and recommend programs
3️⃣ <strong>Registration</strong> - Complete the registration form and make payment
4️⃣ <strong>Start Learning!</strong> - Join your scheduled class

📞 Phone: +254 700 000 000
📧 Email: info@yesel.co.ke
💬 WhatsApp: +254 700 000 000

Would you like to start the enrollment process?`,
  },

  // Schedule
  schedule: {
    keywords: [
      "schedule",
      "time",
      "when",
      "hours",
      "days",
      "weekend",
      "duration",
      "how long",
    ],
    response: `Our class schedules vary by program:

📅 <strong>Regular Classes:</strong>
• Weekdays: After school (4 PM - 6 PM)
• Saturdays: Morning (9 AM - 12 PM) or Afternoon (2 PM - 5 PM)

⏱️ <strong>Program Durations:</strong>
• Junior programs: 10-12 weeks
• Senior programs: 12-16 weeks
• College programs: 14-20 weeks
• Holiday camps: 1-2 weeks

Classes are typically held once or twice a week. Contact us for the current term schedule!`,
  },

  // Pricing
  pricing: {
    keywords: [
      "price",
      "cost",
      "fee",
      "payment",
      "how much",
      "afford",
      "charge",
      "pay",
    ],
    response: `Our pricing varies by program and duration. For current rates, please contact us directly:

📞 Phone: +254 700 000 000
📧 Email: info@yesel.co.ke
💬 WhatsApp: +254 700 000 000

We offer:
✅ Flexible payment plans
✅ Sibling discounts
✅ Group discounts for schools
✅ Holiday camp packages

We'll find an option that works for you!`,
  },

  // Requirements / Materials
  requirements: {
    keywords: [
      "require",
      "need",
      "material",
      "equipment",
      "bring",
      "prerequisite",
      "computer",
      "laptop",
    ],
    response: `<strong>What you'll need:</strong>

For <strong>Electronics & Robotics</strong>:
✅ All materials and components provided
✅ Just bring enthusiasm and a notebook!

For <strong>Coding Classes</strong>:
✅ We provide computers during class
✅ Having a laptop/computer at home helps for practice (not mandatory)
✅ For online classes, a computer with internet is required

<strong>Prerequisites:</strong>
• Beginner courses: No prior experience needed!
• Advanced courses: We'll assess your level first

Any specific questions about requirements?`,
  },

  // Location
  location: {
    keywords: [
      "where",
      "location",
      "place",
      "venue",
      "address",
      "directions",
      "come",
      "visit",
    ],
    response: `We conduct classes at various locations. 

For specific venue information, please contact us:
📞 Phone: +254 700 000 000
📧 Email: info@yesel.co.ke
💬 WhatsApp: +254 700 000 000

<strong>For Schools:</strong> We can bring programs directly to your school through our School Partnership program!

<strong>Online Option:</strong> Some coding classes are available online.`,
  },

  // Age groups
  age: {
    keywords: [
      "age",
      "old",
      "year",
      "form 1",
      "form 2",
      "form 3",
      "form 4",
      "secondary",
      "college",
      "university",
      "young",
      "child",
    ],
    response: `We welcome students across different age groups:

👦 <strong>Junior Secondary (Form 1-2, Ages 12-14)</strong>
• Electronics Fundamentals
• Scratch & Block Coding
• Robotics Explorers

👩 <strong>Senior Secondary (Form 3-4, Ages 15-18)</strong>
• Arduino & Microcontrollers
• Python Programming
• Web Development
• Advanced Robotics

🎓 <strong>College/University (18+)</strong>
• Embedded Systems
• Full-Stack Development
• Mobile App Development
• AI & Machine Learning
• IoT & Smart Systems

Which age group are you interested in?`,
  },

  // Holiday camps
  holiday: {
    keywords: [
      "holiday",
      "camp",
      "vacation",
      "april",
      "august",
      "december",
      "break",
    ],
    response: `Our Holiday STEM Camps are perfect for school breaks! 🏕️

<strong>Available during:</strong>
• April holidays
• August holidays  
• December holidays

<strong>Camp Options:</strong>
🎯 <strong>1-Week Intensive</strong> - 5 days, choose one track
⭐ <strong>2-Week Explorer</strong> - Most popular! Cross-disciplinary learning
🏆 <strong>Innovation Camp</strong> - For returning students, project-based

All camps include:
✅ All materials provided
✅ Take-home projects
✅ Showcase day for parents

Contact us to reserve a spot for the next holiday!`,
  },

  // Schools / Partnership
  school: {
    keywords: [
      "school",
      "partner",
      "club",
      "workshop",
      "teacher",
      "institution",
    ],
    response: `We offer School Partnership Programs! 🏫

<strong>In-School Clubs:</strong>
• Weekly STEM sessions at your school
• During school hours or after school
• All equipment provided
• Progress reports for parents

<strong>Workshop Days:</strong>
• Perfect for career days & science weeks
• One-day or multi-day workshops
• Customizable content
• Can accommodate large groups

Interested in bringing Yesel to your school? Contact us:
📧 info@yesel.co.ke
📞 +254 700 000 000`,
  },

  // Greeting
  greeting: {
    keywords: [
      "hello",
      "hi",
      "hey",
      "jambo",
      "habari",
      "good morning",
      "good afternoon",
      "good evening",
    ],
    response: `Jambo! 👋 Welcome to Yesel! 

I'm here to help you learn about our STEM education programs in electronics, coding, and robotics.

What would you like to know about? You can ask me about:
• Our programs
• How to enroll
• Class schedules
• Requirements
• Pricing
• Holiday camps

Just type your question!`,
  },

  // Thank you
  thanks: {
    keywords: ["thank", "thanks", "asante", "appreciate"],
    response: `You're welcome! Karibu sana! 😊

Is there anything else I can help you with? Feel free to ask more questions or contact us directly:

📞 +254 700 000 000
📧 info@yesel.co.ke
💬 WhatsApp: +254 700 000 000

We'd love to have you join the Yesel family!`,
  },

  // Contact
  contact: {
    keywords: [
      "contact",
      "reach",
      "call",
      "email",
      "whatsapp",
      "phone",
      "talk to someone",
      "human",
      "person",
    ],
    response: `You can reach us through:

📞 <strong>Phone:</strong> +254 700 000 000
📧 <strong>Email:</strong> info@yesel.co.ke
💬 <strong>WhatsApp:</strong> +254 700 000 000

<strong>Office Hours:</strong>
• Monday - Friday: 8 AM - 6 PM
• Saturday: 9 AM - 4 PM
• Sunday: Closed

Or fill out the contact form on our Contact page and we'll get back to you within 24 hours!`,
  },

  // Online classes
  online: {
    keywords: ["online", "virtual", "remote", "zoom", "internet", "from home"],
    response: `Yes, we offer online options! 💻

<strong>Available Online:</strong>
✅ Coding classes (Scratch, Python, Web Development)
✅ Some theory components

<strong>In-Person Recommended:</strong>
🔧 Electronics - for hands-on circuit work
🤖 Robotics - for building and testing robots

Online classes include:
• Live instructor-led sessions
• Screen sharing & demonstrations
• Q&A sessions
• Take-home assignments

Contact us to discuss which format works best for you!`,
  },
};

// Default response when no match is found
const defaultResponse = `I'm not sure I understood that question. 🤔

Here are some things I can help with:
• Our <strong>programs</strong> in electronics, coding & robotics
• How to <strong>enroll</strong>
• Class <strong>schedules</strong> and timing
• <strong>Requirements</strong> and materials
• <strong>Pricing</strong> information
• <strong>Holiday camps</strong>

You can also contact us directly:
📞 +254 700 000 000
📧 info@yesel.co.ke

Try asking your question differently, or type "contact" to reach a human!`;

// ----------------------------------------
// Chatbot Functions
// ----------------------------------------

// Find the best response based on user input
function findResponse(userMessage) {
  const message = userMessage.toLowerCase().trim();

  // Check each FAQ category for keyword matches
  for (const [category, data] of Object.entries(chatbotFAQ)) {
    for (const keyword of data.keywords) {
      if (message.includes(keyword.toLowerCase())) {
        return data.response;
      }
    }
  }

  // Return default if no match found
  return defaultResponse;
}

// Add a message to the chat window
function addMessage(message, isUser = false) {
  const messagesContainer = document.getElementById("chatbot-messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `${isUser ? "user" : "bot"}-message mb-3`;

  messageDiv.innerHTML = `
        <div class="message-bubble ${
          isUser ? "bg-primary text-white" : "bg-light"
        } p-3 rounded">
            ${message}
        </div>
    `;

  messagesContainer.appendChild(messageDiv);

  // Scroll to bottom
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Handle user input
function handleUserInput() {
  const input = document.getElementById("chatbot-input");
  const message = input.value.trim();

  if (message === "") return;

  // Add user message
  addMessage(message, true);

  // Clear input
  input.value = "";

  // Simulate typing delay
  setTimeout(() => {
    const response = findResponse(message);
    addMessage(response);
  }, 500);
}

// ----------------------------------------
// Initialize Chatbot
// ----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Chatbot toggle
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotWindow = document.getElementById("chatbot-window");
  const chatbotClose = document.getElementById("chatbot-close");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotSend = document.getElementById("chatbot-send");

  if (chatbotToggle && chatbotWindow) {
    // Toggle chatbot window
    chatbotToggle.addEventListener("click", function () {
      chatbotWindow.classList.toggle("d-none");
      if (!chatbotWindow.classList.contains("d-none")) {
        chatbotInput.focus();
      }
    });

    // Close chatbot
    chatbotClose.addEventListener("click", function () {
      chatbotWindow.classList.add("d-none");
    });

    // Send message on button click
    chatbotSend.addEventListener("click", handleUserInput);

    // Send message on Enter key
    chatbotInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        handleUserInput();
      }
    });

    // Quick question buttons
    document.querySelectorAll(".quick-q").forEach((btn) => {
      btn.addEventListener("click", function () {
        chatbotInput.value = this.textContent;
        handleUserInput();
      });
    });
  }
});

// ----------------------------------------
// Contact Form Handler
// ----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // In a real implementation, you would send the form data to a server
      // For now, we'll just show the success message

      // Simulate form submission delay
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML =
        '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        contactForm.classList.add("d-none");
        formSuccess.classList.remove("d-none");
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
});

// Reset contact form
function resetForm() {
  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");

  if (contactForm && formSuccess) {
    contactForm.reset();
    contactForm.classList.remove("d-none");
    formSuccess.classList.add("d-none");
  }
}

// ----------------------------------------
// Smooth Scroll for Anchor Links
// ----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 120;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

// ----------------------------------------
// Navbar Scroll Effect
// ----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("shadow");
      } else {
        navbar.classList.remove("shadow");
      }
    });
  }
});

// ----------------------------------------
// Animation on Scroll (Simple Implementation)
// DISABLED - was causing content to disappear
// ----------------------------------------
// Scroll animations removed to prevent content visibility issues

// ----------------------------------------
// Active Navigation Link
// ----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
