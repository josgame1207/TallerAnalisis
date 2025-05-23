        // Add interactive animations
        document.addEventListener('DOMContentLoaded', function() {
            // Add parallax effect to floating elements
            document.addEventListener('mousemove', function(e) {
                const floatingElements = document.querySelectorAll('.floating-element');
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                floatingElements.forEach((element, index) => {
                    const speed = (index + 1) * 0.5;
                    element.style.transform = `translate(${x * speed * 10}px, ${y * speed * 10}px)`;
                });
            });

            // Add click animation to images
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('click', function() {
                    this.style.transform = 'scale(1.1) rotate(2deg)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 300);
                });
            });

            // Add typing effect to scroll text
            const scrollContent = document.querySelector('.scroll-content');
            scrollContent.addEventListener('animationiteration', function() {
                this.style.color = `hsl(${Math.random() * 60 + 10}, 70%, 60%)`;
            });
        });

        function showMenu() {
            alert('Navegación:\n• Inicio\n• Servicios\n• Portafolio\n• Contacto\n• Login\n• Registro');
        }


        // Add scroll reveal animation
        window.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('.title-line');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        });

        // Add dynamic background gradient
        let gradientAngle = 135;
        setInterval(() => {
            gradientAngle += 0.5;
            document.body.style.background = `linear-gradient(${gradientAngle}deg, #1a1a1a 0%, #2d2d2d 100%)`;
        }, 100);