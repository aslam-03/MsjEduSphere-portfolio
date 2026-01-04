// Mock data for MSJ Educational Academy

export const mockData = {
    academy: {
        name: "MSJ Educational Academy",
        tagline: "Learn! Try! Succeed!",
        since: "2018",
        yearsOfExcellence: "7+",
        location: "Coimbatore",
        contact: {
            phone: "+91 98765 43210",
            whatsapp: "+91 98765 43210",
            email: "info@msjeducation.com",
            address: "123, Main Road, Gandhipuram, Coimbatore - 641012, Tamil Nadu"
        }
    },

    playSchool: {
        title: "Play School Program",
        ageGroup: "2.5 – 5 Years",
        description: "Early learning and social development in a caring environment",
        features: [
            "Early learning concepts",
            "Activity-based education",
            "Social & cognitive development",
            "Safe & caring environment"
        ]
    },

    schoolCourses: [
        {
            id: 1,
            title: "Primary (Classes 1-5)",
            description: "Foundation learning with all subjects coverage",
            features: [
                "All subjects covered",
                "Foundation building",
                "Homework guidance",
                "Activity-based learning"
            ]
        },
        {
            id: 2,
            title: "Middle School (Classes 6-8)",
            description: "Concept-based teaching for core subjects",
            features: [
                "Maths, Science, English, Social",
                "Concept clarity focus",
                "Regular assessments",
                "Practical demonstrations"
            ]
        },
        {
            id: 3,
            title: "High School (Classes 9-10)",
            description: "Board exam preparation with regular tests",
            features: [
                "Board exam focused",
                "Regular tests & revision",
                "Previous year papers",
                "Time management skills"
            ]
        },
        {
            id: 4,
            title: "Higher Secondary (Classes 11-12)",
            description: "Exam-oriented coaching for Science & Commerce",
            features: [
                "Science & Commerce streams",
                "Exam-oriented coaching",
                "Doubt clearing sessions",
                "Competitive exam guidance"
            ]
        }
    ],

    competitiveExams: [
        {
            id: 1,
            title: "NEET Coaching",
            subjects: "Physics, Chemistry, Biology",
            description: "Comprehensive preparation for medical aspirants",
            features: [
                "Concept clarity + exam strategy",
                "Regular mock tests",
                "Designed for Class 11, 12 & repeaters",
                "Performance analysis"
            ]
        },
        {
            id: 2,
            title: "JEE Coaching",
            subjects: "Physics, Chemistry, Mathematics",
            description: "Rigorous training for engineering entrance",
            features: [
                "Strong problem-solving focus",
                "Board + entrance aligned preparation",
                "JEE Main & Advanced foundation",
                "Topic-wise testing"
            ]
        }
    ],

    // Keeping the original courses array for backward compatibility if needed, 
    // but the component should be updated to use the new structure.
    courses: [
        {
            id: 1,
            title: "Primary (Classes 1-5)",
            description: "Foundation learning with all subjects coverage",
            features: [
                "All subjects covered",
                "Foundation building",
                "Homework guidance",
                "Activity-based learning"
            ]
        },
        {
            id: 2,
            title: "Middle School (Classes 6-8)",
            description: "Concept-based teaching for core subjects",
            features: [
                "Maths, Science, English, Social",
                "Concept clarity focus",
                "Regular assessments",
                "Practical demonstrations"
            ]
        },
        {
            id: 3,
            title: "High School (Classes 9-10)",
            description: "Board exam preparation with regular tests",
            features: [
                "Board exam focused",
                "Regular tests & revision",
                "Previous year papers",
                "Time management skills"
            ]
        },
        {
            id: 4,
            title: "Higher Secondary (Classes 11-12)",
            description: "Exam-oriented coaching for Science & Commerce",
            features: [
                "Science & Commerce streams",
                "Exam-oriented coaching",
                "Doubt clearing sessions",
                "Competitive exam guidance"
            ]
        }
    ],

    syllabusBoards: [
        {
            id: 1,
            name: "Tamil Nadu State Board",
            description: "Comprehensive coverage of State Board curriculum with focus on board exam patterns"
        },
        {
            id: 2,
            name: "CBSE Board",
            description: "NCERT-based teaching methodology aligned with CBSE examination requirements"
        },
        {
            id: 3,
            name: "Competitive Exam Curriculum",
            description: "NEET (NTA aligned) & JEE Main/Advanced integration with NCERT concepts"
        }
    ],

    methodology: {
        school: [
            { id: 1, title: "Concept Explanation", description: "In-depth understanding of core concepts" },
            { id: 2, title: "Practice Sessions", description: "Guided practice to reinforce learning" },
            { id: 3, title: "Regular Testing", description: "Weekly tests to assess performance" }
        ],
        competitive: [
            { id: 1, title: "Strategic Learning", description: "Focus on speed and accuracy" },
            { id: 2, title: "Mock Tests", description: "Simulated exam environments" },
            { id: 3, title: "Performance Analysis", description: "Detailed feedback on strengths and weaknesses" }
        ],
        playSchool: [
            { id: 1, title: "Activity Based", description: "Learning through play and activities" },
            { id: 2, title: "Social Interaction", description: "Group activities to build social skills" },
            { id: 3, title: "Observation", description: " Continuous monitoring of child's development" }
        ]
    },

    // Legacy methodology array for backward compatibility until component is updated
    legacyMethodology: [
        {
            id: 1,
            title: "Small Batch Teaching",
            description: "Limited students per batch for better interaction"
        },
        {
            id: 2,
            title: "Personal Attention",
            description: "Individual focus on each student's learning needs"
        },
        {
            id: 3,
            title: "Weekly Tests",
            description: "Regular assessments to track progress"
        },
        {
            id: 4,
            title: "Progress Tracking",
            description: "Detailed performance monitoring and analysis"
        },
        {
            id: 5,
            title: "Parent Feedback",
            description: "Regular communication with parents about student progress"
        }
    ],

    faculty: [
        {
            id: 1,
            name: "Mrs. Priya Sharma",
            qualification: "M.Sc, B.Ed",
            subject: "Mathematics",
            experience: "12 years"
        },
        {
            id: 2,
            name: "Mr. Rajesh Kumar",
            qualification: "M.Sc Physics, B.Ed",
            subject: "Physics & Chemistry",
            experience: "10 years"
        },
        {
            id: 3,
            name: "Ms. Kavitha Ramesh",
            qualification: "M.A English, B.Ed",
            subject: "English",
            experience: "8 years"
        },
        {
            id: 4,
            name: "Mr. Senthil Nathan",
            qualification: "M.Sc Botany, B.Ed",
            subject: "Biology",
            experience: "9 years"
        }
    ],

    achievements: [
        {
            id: 1,
            number: "500+",
            label: "Students Taught"
        },
        {
            id: 2,
            number: "95%",
            label: "Pass Percentage"
        },
        {
            id: 3,
            number: "7+",
            label: "Years of Excellence"
        },
        {
            id: 4,
            number: "50+",
            label: "Distinctions Achieved"
        }
    ],

    upcomingAchievements: [
        { id: 1, title: "NEET Ranks", placeholder: "Result Awaited" },
        { id: 2, title: "JEE Qualifications", placeholder: "Result Awaited" }
    ],

    testimonials: [
        {
            id: 1,
            name: "Mrs. Lakshmi Krishnan",
            role: "Parent of Class 10 Student",
            category: "school",
            content: "My daughter's confidence in Mathematics has improved tremendously. The teachers here provide excellent personal attention and regular feedback. Highly recommend MSJ Academy!",
            rating: 5
        },
        {
            id: 2,
            name: "Mr. Venkatesh Iyer",
            role: "Parent of Class 12 Student",
            category: "school",
            content: "Best decision we made for our son's board exam preparation. The systematic approach and regular tests helped him score 92% in Class 12 boards. Thank you MSJ team!",
            rating: 5
        },
        {
            id: 3,
            name: "Aishwarya R.",
            role: "Class 11 Student",
            category: "school",
            content: "The doubt clearing sessions are really helpful. Teachers explain concepts clearly and make learning enjoyable. I feel much more prepared for my exams now.",
            rating: 5
        },
        {
            id: 4,
            name: "Mrs. Anitha",
            role: "Parent of Play School Child",
            category: "playschool",
            content: "My son loves going to MSJ! The activities are so engaging and he has made so many friends. The environment is very safe and caring.",
            rating: 5
        },
        {
            id: 5,
            name: "Rahul K.",
            role: "NEET Aspirant",
            category: "competitive",
            content: "The concepts are taught from basics to advanced level. Mock tests are very close to the actual exam pattern. It boosted my confidence.",
            rating: 5
        }
    ],

    admissionSteps: [
        {
            id: 1,
            title: "Enquiry",
            description: "Contact us via phone, email, or visit our center"
        },
        {
            id: 2,
            title: "Counseling",
            description: "Discuss student's needs and our teaching methodology"
        },
        {
            id: 3,
            title: "Batch Allocation",
            description: "Get assigned to appropriate batch based on class and syllabus"
        },
        {
            id: 4,
            title: "Start Learning",
            description: "Begin your journey towards academic excellence"
        }
    ],

    gallery: [
        {
            id: 1,
            title: "Modern Classroom",
            category: "classroom"
        },
        {
            id: 2,
            title: "Study Environment",
            category: "classroom"
        },
        {
            id: 3,
            title: "Interactive Learning",
            category: "activities"
        },
        {
            id: 4,
            title: "Science Lab",
            category: "facilities"
        },
        {
            id: 5,
            title: "Library Section",
            category: "facilities"
        },
        {
            id: 6,
            title: "Achievement Ceremony",
            category: "events"
        }
    ]
};
