const skills = {
    js: "JavaScript",
    ts: "TypeScript",
    python: "Python",
    java: "Java",
    html: "HTML",
    css: "CSS",
    sql: "SQL",
    apex: "Apex",
    bash: "Bash",
    lit: "Lit",
    react: "React",
    angular: "Angular",
    vue: "Vue.js",
    sfdc: "Salesforce",
    jquery: "JQuery",
    django: "Django",
    mongo: "MongoDB",
    ror: "Ruby on Rails",
    rest: "REST",
    mfe: "Micro-frontend (MFE)",
    s3: "AWS S3",
    ec2: "AWS EC2",
    cloudFront: "AWS CloudFront",
    route53: "AWS Route 53",
    cloudFormation: "AWS CloudFormation",
    heroku: "Heroku",
    git: "Git",
    linux: "Linux",
    jira: "Jira",
    githubActions: "GitHub Actions",
    bitbucket: "Bitbucket Pipelines",
    jenkins: "Jenkins"
}

const content = {
    header: {
        name: "Dante Poleselli",
        email: "dpoleselli@gmail.com",
        phone: "650-474-1340",
        address0: "8813 Willowbrook Dr.",
        address1: "Rowlett, TX",
        github: "https://github.com/dpoleselli",
        linkedIn: "https://www.linkedin.com/in/dante-poleselli-187839132/"
    },
    education: {
        school: "Westmont College, Santa Barbara, CA",
        dates: "Graduated: May 2020",
        bullets: [
            "Double major in Data Analytics and Business/Economics",
            "Double minor in Computer Science and Spanish"
        ]
    },
    experience: {
        jobs: [
            {
                title: "Software Consultant",
                company: "Slalom, Dallas TX",
                dates: "June 2021 - Present",
                bullets: [
                    "Developed Micro-frontend apps using Lit Element to improve reusability and better organize team structure",
                    "Sped up clients' time-to-delivery by several months",
                    "Monitored real-time user metrics to identify bugs and gain insights to improve user experience"
                ],
                skills: {
                    col0: [skills.js, skills.ts, skills.java, skills.html, skills.css, skills.lit, skills.react, skills.angular],
                    col1: [skills.mfe, skills.s3, skills.cloudFront, skills.route53, skills.git, skills.jira, skills.jenkins]
                }
            },
            {
                title: "Junior Software Engineer",
                company: "Outside Open, Santa Barbara CA",
                dates: "May 2019 - Sept. 2019, May 2020 - June 2021",
                bullets: [
                    "Engaged in the full-stack development of projects for multiple clients",
                    "Developed responsive Vue.js components",
                    "Engineered a RESTful API using Ruby on Rails",
                    "Managed competing requirements from various clients"
                ],
                skills: {
                    col0: [skills.js, skills.ts, skills.python, skills.html, skills.css, skills.sql, skills.apex, skills.bash, skills.sfdc],
                    col1: [skills.vue, skills.mongo, skills.ror, skills.rest, skills.git, skills.linux, skills.jira, skills.githubActions, skills.bitbucket]
                }
            },
            {
                title: "Founder/Developer",
                company: "In-Game Edge, Santa Barbara CA",
                dates: "May 2019 - Dec 2021",
                bullets: [
                    "Prototyped, developed, and tested a real-time baseball analytics web app",
                    "Held regular meetings with stakeholders to provide status updates and receive feedback",
                    "Beta launched the product and used continuous development practices to implement bug patches and feature additions"
                ],
                skills: {
                    col0: [skills.js, skills.python, skills.html, skills.css],
                    col1: [skills.django, skills.heroku, skills.git]
                }
            },
            {
                title: "Lead Salesforce Developer",
                company: "Westmont College, Santa Barbara CA",
                dates: "May 2019 - May 2020",
                bullets: [
                    "Supervised a team of 10 Salesforce developers in the buildout of an enterprise system to include multiple departments",
                    "Collaborated with stakeholders on finding creative solutions to existing pain points",
                    "Cultivated and maintained team efficiency and effectiveness"
                ],
                skills: {
                    col0: [skills.js, skills.html, skills.css, skills.sql, skills.apex],
                    col1: [skills.sfdc, skills.git, skills.jira, skills.bitbucket]
                }
            },
            {
                title: "Salesforce Developer",
                company: "Westmont College, Santa Barbara CA",
                dates: "May 2018 - May 2019",
                bullets: [
                    "Worked alongside a team of developers to build a Salesforce application to optimize donor management processes",
                    "Implemented customizations to the Salesforce platform using Apex, Lightning Components, Process Builders, and other Salesforce tools, while maintaining best practices",
                    "Designed, built, and tested a key importing feature to allow bulk loading of new information",
                    "Analyzed and repaired code base flaws and inefficiencies"
                ],
                skills: {
                    col0: [skills.js, skills.html, skills.css, skills.sql, skills.apex],
                    col1: [skills.sfdc, skills.git, skills.jira, skills.bitbucket]
                }
            },
            {
                title: "Sales Team Support",
                company: "Vivion Inc, San Francisco Bay Area",
                dates: "May 2017 - August 2017",
                bullets: [
                    "Identified and organized potential leads in new territories",
                    "Gathered contact information of potential customers to support sales reps with lead generation",
                    "Communicated with existing customers to collect important certificates"
                ],
                skills: {
                    col0: [skills.js]
                }
            }
        ]
    },
    certifications: [
        "AWS Developer Associate",
        "AWS Solutions Architect",
        "AWS Cloud Practitioner",
        "Salesforce Platform Developer I",
        "Salesforce Administrator"
    ],
    accomplishments: [
        "Graduated Summa Cum Laude",
        "Averaged 18+ units/semester ",
        "Played collegiate baseball",
        "Studied abroad in Mexico",
        "Hablo un poco de español",
    ],
    skills: [
        [
            skills.js,
            skills.ts,
            skills.python,
            skills.java,
            skills.html,
            skills.css,
            skills.sql,
            skills.apex,
            skills.bash
        ],
        [
            skills.lit,
            skills.react,
            skills.angular,
            skills.vue,
            skills.sfdc,
            skills.jquery,
            skills.django,
            skills.mongo,
            skills.ror,
            skills.rest,
            skills.mfe
        ],
        [
            skills.s3,
            skills.ec2,
            skills.cloudFront,
            skills.route53,
            skills.cloudFormation,
            skills.heroku,
            skills.git,
            skills.linux,
            skills.jira,
            skills.githubActions,
            skills.bitbucket,
            skills.jenkins
        ]
    ]
}


export default content