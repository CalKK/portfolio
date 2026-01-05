// PORTFOLIO NAVIGATION SYSTEM - COMPLETELY DEBUGGED
console.log('🚀 Portfolio System Loading...');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM Loaded - Starting initialization');
    
    // Initialize portfolio navigation with extensive debugging
    initializePortfolioNavigation();
    
    // Initialize scroll navigation
    initializeScrollNavigation();
    
    // Initialize other features
    initializeOtherFeatures();
});

// MAIN PORTFOLIO NAVIGATION FUNCTION - COMPLETELY FIXED
function initializePortfolioNavigation() {
    console.log('🔧 Initializing Portfolio Navigation System...');
    
    // Get all navigation elements
    const navButtons = document.querySelectorAll('.section-btn');
    const contentPanels = document.querySelectorAll('.content-panel');
    const sectionContent = document.querySelector('.section-content');
    
    console.log(`📊 Found ${navButtons.length} navigation buttons`);
    console.log(`📊 Found ${contentPanels.length} content panels`);
    console.log(`📊 Section content container:`, sectionContent ? 'Found' : 'NOT FOUND');
    
    // Debug: Log all buttons and their data-section attributes
    navButtons.forEach((btn, index) => {
        const section = btn.getAttribute('data-section');
        console.log(`🔘 Button ${index + 1}: "${btn.textContent.trim()}" -> section: "${section}"`);
    });
    
    // Debug: Log all panels and their IDs
    contentPanels.forEach((panel, index) => {
        console.log(`📄 Panel ${index + 1}: ID = "${panel.id}"`);
    });

    // CRITICAL: Dynamic height adjustment function
    function adjustSectionHeight() {
        if (!sectionContent) return;
        
        const activePanel = document.querySelector('.content-panel.active');
        if (activePanel) {
            // Reset height first
            sectionContent.style.height = 'auto';
            sectionContent.style.minHeight = '400px';
            
            // Force reflow to get accurate height
            activePanel.offsetHeight;
            
            // Get the actual content height
            const panelHeight = activePanel.scrollHeight;
            const paddingBuffer = 40; // Add some padding
            const finalHeight = Math.max(400, panelHeight + paddingBuffer);
            
            console.log(`📏 Panel height: ${panelHeight}px, Final height: ${finalHeight}px`);
            
            // Set the height to prevent overflow
            // If height is suspiciously low (e.g. hidden), stick to auto
            if (panelHeight < 50) {
                 console.warn('⚠️ Panel height seems too small, defaulting to auto');
                 sectionContent.style.height = 'auto';
            } else {
                 sectionContent.style.height = finalHeight + 'px';
            }
        }
    }
    
    // Add click event listeners to all navigation buttons
    navButtons.forEach((button, buttonIndex) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Trim to avoid whitespace issues
            const targetSection = (this.getAttribute('data-section') || '').trim();
            
            console.log(`\n🖱️ BUTTON CLICKED: "${this.textContent.trim()}" -> Target: "${targetSection}"`);
            
            if (!targetSection) {
                console.error('❌ ERROR: Button has no data-section attribute');
                return;
            }

            // STEP 1: Remove active class from ALL buttons
            console.log('🔄 Step 1: Removing active from all buttons...');
            navButtons.forEach((btn, btnIndex) => {
                const wasActive = btn.classList.contains('active');
                btn.classList.remove('active');
                if (wasActive) {
                    console.log(`❌ Removed active from: "${btn.textContent.trim()}"`);
                }
            });
            
            // STEP 2: Hide ALL content panels
            console.log('🔄 Step 2: Hiding all content panels...');
            contentPanels.forEach((panel, panelIndex) => {
                const wasActive = panel.classList.contains('active');
                panel.classList.remove('active');
                panel.style.display = 'none';
                panel.style.opacity = '0';
                panel.style.visibility = 'hidden';
                
                if (wasActive) {
                    console.log(`❌ Hidden panel: "${panel.id}"`);
                }
            });
            
            // STEP 3: Activate clicked button
            console.log('🔄 Step 3: Activating clicked button...');
            this.classList.add('active');
            console.log(`✅ Activated button: "${this.textContent.trim()}"`);
            
            // STEP 4: Find and show target panel
            console.log('🔄 Step 4: Finding and showing target panel...');
            const targetPanel = document.getElementById(targetSection);
            
            if (targetPanel) {
                // Show the target panel
                targetPanel.style.display = 'block';
                targetPanel.style.visibility = 'visible';
                
                // Force reflow before adding active class
                targetPanel.offsetHeight;
                
                // Add active class for animations
                targetPanel.classList.add('active');
                targetPanel.style.opacity = '1';
                
                console.log(`✅ Activated panel: "${targetSection}"`);
                
                // STEP 5: Adjust container height after a short delay
                setTimeout(() => {
                    adjustSectionHeight();
                }, 100);
                
                // STEP 6: Special handling for skills section
                if (targetSection === 'skills') {
                    console.log('🎯 Skills section detected - triggering skill bar animation');
                    setTimeout(() => {
                        animateSkillBars();
                    }, 300);
                }
                
            } else {
                console.error(`❌ ERROR: Could not find panel with ID: "${targetSection}"`);
                console.log('Available panel IDs:', Array.from(contentPanels).map(p => p.id));
            }
            
            console.log('✅ Navigation complete!\n');
        });
    });
    
    // INITIAL STATE SETUP
    console.log('🎯 Setting up initial state...');
    
    // First, ensure all panels are hidden
    contentPanels.forEach(panel => {
        panel.classList.remove('active');
        panel.style.display = 'none';
        panel.style.opacity = '0';
        panel.style.visibility = 'hidden';
    });
    
    // Remove active from all buttons
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    // Set honors as initial active section
    const initialButton = document.querySelector('.section-btn[data-section="honors"]');
    const initialPanel = document.getElementById('honors');
    
    if (initialButton && initialPanel) {
        // Activate initial button
        initialButton.classList.add('active');
        
        // Show initial panel
        initialPanel.style.display = 'block';
        initialPanel.style.visibility = 'visible';
        initialPanel.style.opacity = '1';
        initialPanel.classList.add('active');
        
        // Set initial height
        setTimeout(() => {
            adjustSectionHeight();
        }, 100);
        
        console.log('✅ Initial state set: Honors & Awards section active');
    } else {
        console.error('❌ ERROR: Could not set initial state');
        console.log('Initial button found:', !!initialButton);
        console.log('Initial panel found:', !!initialPanel);
    }
    
    console.log('🎉 Portfolio Navigation System Ready!');
}

// SCROLL NAVIGATION SYSTEM
function initializeScrollNavigation() {
    console.log('🔧 Initializing Scroll Navigation...');
    
    const scrollThumb = document.getElementById('scrollThumb');
    const scrollUpBtn = document.getElementById('scrollUp');
    const scrollDownBtn = document.getElementById('scrollDown');
    const sectionContent = document.querySelector('.section-content');
    
    if (!scrollThumb || !scrollUpBtn || !scrollDownBtn || !sectionContent) {
        console.log('⚠️ Scroll navigation elements not found');
        return;
    }
    
    // Update scroll thumb position
    function updateScrollThumb() {
        const activePanel = document.querySelector('.content-panel.active');
        if (!activePanel) return;
        
        const scrollTop = activePanel.scrollTop;
        const scrollHeight = activePanel.scrollHeight;
        const clientHeight = activePanel.clientHeight;
        
        if (scrollHeight <= clientHeight) {
            scrollThumb.style.opacity = '0.3';
            return;
        }
        
        scrollThumb.style.opacity = '1';
        const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
        const thumbPosition = scrollPercentage * 80; // 80% of track height
        scrollThumb.style.transform = `translateY(${thumbPosition}px)`;
    }
    
    // Scroll up function
    scrollUpBtn.addEventListener('click', () => {
        const activePanel = document.querySelector('.content-panel.active');
        if (activePanel) {
            activePanel.scrollBy({
                top: -200,
                behavior: 'smooth'
            });
        }
    });
    
    // Scroll down function
    scrollDownBtn.addEventListener('click', () => {
        const activePanel = document.querySelector('.content-panel.active');
        if (activePanel) {
            activePanel.scrollBy({
                top: 200,
                behavior: 'smooth'
            });
        }
    });
    
    // Listen for scroll events on active panels
    function attachScrollListeners() {
        const contentPanels = document.querySelectorAll('.content-panel');
        contentPanels.forEach(panel => {
            panel.addEventListener('scroll', updateScrollThumb);
        });
    }
    
    // Initialize scroll listeners
    attachScrollListeners();
    
    // Update thumb when panel changes
    const observer = new MutationObserver(() => {
        updateScrollThumb();
    });
    
    observer.observe(sectionContent, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class']
    });
    
    console.log('✅ Scroll Navigation Ready!');
}

// SKILL BARS ANIMATION - ENHANCED
function animateSkillBars() {
    console.log('📊 Starting skill bars animation...');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillBars.length === 0) {
        console.log('⚠️ No skill bars found');
        return;
    }
    
    skillBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-width');
        console.log(`📈 Animating skill bar ${index + 1} to ${targetWidth}%`);
        
        // Reset the bar first
        bar.style.width = '0%';
        bar.style.transition = 'none';
        
        // Force reflow
        bar.offsetHeight;
        
        // Animate with staggered timing
        setTimeout(() => {
            bar.style.transition = 'width 1.2s ease-out';
            bar.style.width = targetWidth + '%';
        }, 150 + (index * 100)); // Stagger animations
    });
    
    console.log('✅ Skill bars animation started');
}

// INITIALIZE OTHER WEBSITE FEATURES
function initializeOtherFeatures() {
    console.log('🔧 Initializing other website features...');
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            console.log('📱 Mobile menu toggled');
        });
    }

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (nav) {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                nav.style.background = 'rgba(10, 10, 10, 0.8)';
                nav.style.boxShadow = 'none';
            }
        }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Initialize scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add scroll animation to elements
    const elementsToAnimate = document.querySelectorAll('.content-card, .timeline-item, .education-item, .cert-card, .project-card');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add hover effects to interactive elements
    document.querySelectorAll('.content-card, .project-card, .cert-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    console.log('✅ All features initialized successfully!');
}

// TYPING EFFECT FOR HERO TITLE
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleLines = heroTitle.querySelectorAll('.title-line');
        titleLines.forEach((line, index) => {
            const originalText = line.textContent;
            setTimeout(() => {
                typeWriter(line, originalText, 50);
            }, 1000 + (index * 300));
        });
    }
});

// Add CSS for active nav links
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary);
    }
    
    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--primary);
    }
`;
document.head.appendChild(style);

console.log('🎉 Portfolio Navigation System Loaded Successfully!');