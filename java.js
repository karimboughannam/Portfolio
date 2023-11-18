
        const menuIcon = document.querySelector('.menu-icon');
        const nav = document.querySelector('nav');
    
        menuIcon.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    
        function closeMenu() {
            nav.classList.remove('active');
        }
    
        // JavaScript for changing text dynamically
        const roles = ["Customer Support Specialist","Software Support Engineer","Mobile / Web Developer","Fitness Consultant and Personal Trainer","Business Computer Administrator","Entrepreneur","Technical Support Specialist"];
             let index = 0;
    
        function changeText() {
            const heroText = document.querySelector('.roles');
            heroText.textContent = roles[index];
            index = (index + 1) % roles.length;
            setTimeout(changeText, 2000);
        }
    
        // Start the text changing after the page loads
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(changeText, 2000);
        });
    
        // Close the mobile menu when a link is clicked
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        document.addEventListener("DOMContentLoaded", function () {
            const dateElement = document.querySelector('.date');
            const backwardButton = document.querySelector('.backward-icon');
            const forwardButton = document.querySelector('.forward-icon');
            const TheStart=String("In the twilight of my high school years, at the age of 17, I found myself at a crossroads, a juncture where my reflection in the mirror told a tale of lethargy and weariness. I stood at 175 cm, carrying the weight of 110 kg, a walking testament to a life dominated by laziness and exhaustion.One day, the gravity of my situation hit me hard as even the simplest of tasks became monumental struggles. It was a wake-up call that I couldn't ignore. Determined to break free from the chains of my sedentary lifestyle, I made a pivotal decision—it was time for a profound change.Fueled by an innate desire for something more, I embarked on a transformative journey of self-improvement. The initial hurdles were formidable, each step a test of my resolve. Yet, armed with unwavering discipline, I began shedding not only the physical weight but also the mental burden that had held me captive.As the pounds melted away, so too did the clouds of self-doubt and fatigue. It wasn't just a physical metamorphosis; I was sculpting a new mindset, chiseling away the negativity that had encased my potential. The journey was not without its challenges, but with each passing day, I regained control not only over my body but over the direction of my life.The story of my transformation became one of resilience, discipline, and the triumph of willpower over inertia. Little did I know that the decision to confront my own limitations would be the spark that ignited a journey toward a healthier, more empowered version of myself.");
            const TSU=String("As the clock struck late 2019, I made a solemn commitment to not only reshape my physical self but also to navigate the uncharted waters of the college search. Amidst the whirlwind of possibilities, I delved into a relentless exploration of my passions, testing the waters of various interests until I stumbled upon my true calling in the Business Technology sector.Armed with a ne;wfound sense of purpose, I immersed myself in the challenging realm of entrance exams. The battleground of academia became my proving ground, and I emerged victorious, securing a coveted spot at the pinnacle of the scorecards. With this triumph came an intoxicating cocktail of confidence, a zest for life, and boundless energy. I stood on the precipice of a new chapter, ready to embark on a learning journey that would not only shape my academic prowess but also define the trajectory of my future. The winds of change whispered promises of growth and discovery as I stepped into the vibrant world of business and technology, ready to unravel the mysteries that lay ahead.")
            const TU=String("Throughout my university odyssey, I carved a path marked by a relentless pursuit of excellence, consistently outshining my peers in the realms of academic studies and research. For the entirety of my three-year bachelor's degree, I donned the hat of the class delegate, a role that cast me as the bridge between students and professors. In this pivotal position, I not only took meticulous notes and gathered invaluable feedback from classmates but also orchestrated meetings that delved into the nuances of improvement and the evolving needs of our academic community. Armed with a diplomatic finesse, I relayed these insights to administrators, ensuring a symbiotic relationship between the aspirations of the students and the rigors of academia.            As the curtain descended on my university journey, my horizon expanded beyond the confines of the lecture halls. During my final semester, I seamlessly integrated into the corporate realm, assuming the role of a Quality Control Agent at Maids.cc, a tale documented in the chapters of my professional timeline under 'First Job.'Simultaneously, I undertook a monumental project – the creation of a Health Tracker, an Android application born from the marriage of Java and Kotlin. This all-encompassing app wasn't just a tech marvel; it was a digital companion designed to aid users in monitoring their daily habits, both physical and mental. A multifaceted marvel, the app boasted features ranging from a pedometer and water tracker to a task list, timer, and mental health reminders. Beyond the lines of code, I meticulously crafted a strategic plan to propel the Health Tracker into the limelight, ensuring its digital presence reverberated across platforms. Alas, constrained by the limitations of resources at the time, the project stood as a testament to my ambition—a stepping stone for future endeavors. Graduation day arrived as a triumphant crescendo, accompanied by the conferral of a Bachelor's Degree in Business Administration and Computer Science from a prestigious Lebanese university. The crown jewel of this academic odyssey was the gleaming 80/100 GPA, a testament to the trials and triumphs of navigating the challenging landscape of the Lebanese educational system. Each grade, each project, each endeavor, a brushstroke contributing to the masterpiece of my academic legacy.");
            const PT=String("Rewinding to August 2021, propelled by the transformative impact of my own weight loss journey, I felt an undeniable calling to pay forward the positive change I had experienced. This calling set me on a new trajectory—to become a personal trainer. Armed with determination, I acquired certifications in Personal Training and Post-Rehabilitation, laying the foundation for my newfound mission. In the realm of personal training, I discovered a profound joy in motivating and guiding numerous individuals toward a healthier lifestyle, both in body and mind. The satisfaction derived from not only transforming my own life but also positively influencing others became a perpetual wellspring of excitement, happiness, and unwavering motivation throughout this gratifying experience. Even as the demands on my schedule intensified, the role of a personal trainer remained an integral part of my identity. While formal client engagements might have taken a back seat, I never ceased to extend a helping hand to anyone in need. In a world that can sometimes forget the power of kindness, I staunchly believed that it was this very virtue that propelled us forward, enabling each individual to evolve into the best version of themselves.");
            const MC=String("In the corporate landscape of April 2022, on the brink of my final year at university, I delved into the realm of professional growth by securing my first corporate position. Aptly titled 'Quality Controller' at Maids CC, I found myself at the helm of a newly established department dedicated to monitoring customer service teams and enhancing their skills to elevate the overall customer satisfaction experience. Amidst the buzzing energy of Maids CC, I had the privilege of interacting with and learning from exceptional individuals in the business world. Each day brought new insights into the intricacies of training tactics, the foundational elements of customer service, and the profound impact that the first line of communication has on shaping a company's roots. It became clear to me that a stellar customer service team could work wonders for a company, setting the tone for success. During my tenure, I wasn't just a passive observer; I actively contributed to the growth of individuals within the customer service team. Serving as a catalyst for their ascent to new heights, I played a pivotal role in the creation and analysis of reports that meticulously highlighted agents' weaknesses and strengths. This data-driven approach allowed me to propose effective strategies for improvement and growth, leaving an indelible mark on the trajectory of both individuals and the department as a whole.");
            const KFT= String("Stepping into the vibrant world of retailing, I played a pivotal role in the establishment of the first-ever fully concentrated Tobacco Store in our region, ushering in a new era of commerce. In this entrepreneurial journey, I seamlessly assumed the diverse roles of consultant, finance wizard, marketing maestro, tech guru, and employee whisperer. With a trajectory marked by swift growth, we evolved from a singular entity into a triumvirate of stores, leaving an indelible mark on the landscape of the Mount Lebanon Region. Our mission surpassed the mere act of selling smokes; we became the cornerstone for other stores, providing them with essential tobacco supplies. Venturing beyond the conventional, we explored fundraising initiatives and introduced a groundbreaking concept to the area.Today, we stand proudly as the proprietors of 'Al Karim For Tobacco,' a testament to our entrepreneurial spirit and unwavering commitment. With three thriving stores and more poised for the future, our journey is an ode to collaboration and innovation. Guided by the wisdom of my dad, a seasoned marketplace sage, I learned the art of reading people like a well-worn book—or, in our case, perhaps more like a box of cigars. So, here I stand, a proud co-owner of 'Al Karim For Tobacco,' a name I might not have chosen individually, but one we embrace with enthusiasm nonetheless!");
            
            // Sample dates and events (replace with your actual data)
            const events = [
                { date: '2019-01-01', title: 'Transformation Unleashed: From Lethargy to Triumph', description: TheStart},
                { date: '2019-10-01', title: 'Academic Odyssey: Excelling in Studies and Crafting a Professional Prelude', description: TSU },
                {date: '2019-10-01 - 2022-10-01', title: "Pinnacle of Academia: A Journey Culminating in a Business Administration and Computer Science Degree ",description:TU},
                {date:'2021-08-01', title: "Seeds of Compassion: Charting a Path as a Personal Trainer and Influencer of Lives", description:PT},
                {date: '2022-04-01',title:"Forging Excellence: Navigating the Corporate Landscape as a Quality Controller at Maids CC",description:MC},
                {date: '2022-11-01', title:"Retailing Revelry: The Inauguration and Expansion of 'Al Karim For Tobacco",description:KFT},
                                // Add more events as needed
            ];
    
            let currentIndex = 0;
    
            // Function to update the displayed event
            function updateEvent() {
                const currentEvent = events[currentIndex];
                dateElement.textContent = currentEvent.date;
                document.querySelector('.event h2').textContent = currentEvent.title;
                document.querySelector('.event p').textContent = currentEvent.description;
            }
    
            // Event listener for the backward button
            backwardButton.addEventListener('click', function () {
                currentIndex = (currentIndex - 1 + events.length) % events.length;
                updateEvent();
            });
    
            // Event listener for the forward button
            forwardButton.addEventListener('click', function () {
                currentIndex = (currentIndex + 1) % events.length;
                updateEvent();
            });
    
            // Initial update
            updateEvent();
        });