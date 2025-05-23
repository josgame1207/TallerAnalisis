        // Form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Add loading effect
            const btn = document.querySelector('.login-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span>Iniciando sesión...</span>';
            btn.style.background = 'linear-gradient(135deg, #666, #888)';
            
            // Simulate login process
            setTimeout(() => {
                if (email && password) {
                    alert('¡Login exitoso! Bienvenido a Forma Collective 🎨');
                    // Redirect or perform login logic here
                } else {
                    alert('Por favor completa todos los campos');
                }
                
                btn.innerHTML = originalText;
                btn.style.background = 'linear-gradient(135deg, #ff6b35, #ff8c5a)';
            }, 2000);
        });

        // Toggle password visibility
        function togglePassword() {
            const passwordInput = document.getElementById('password');
            const toggleBtn = document.querySelector('.password-toggle');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleBtn.textContent = '🙈';
            } else {
                passwordInput.type = 'password';
                toggleBtn.textContent = '👁';
            }
        }

        // Social login
        function socialLogin(platform) {
            alert(`Iniciando sesión con ${platform}...`);
            // Implement social login logic here
        }

        // Forgot password
        function forgotPassword() {
            const email = prompt('Ingresa tu email para recuperar la contraseña:');
            if (email) {
                alert(`Se ha enviado un enlace de recuperación a ${email}`);
            }
        }

        // Navigate to register
        function goToRegister() {
            alert('Redirigiendo al formulario de registro...');
            // Implement navigation logic here
        }

        // Go back
        function goBack() {
            alert('Volviendo a la página principal...');
            // Implement navigation logic here
        }

        // Add input animations
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });

        // Add parallax effect to floating elements
        document.addEventListener('mousemove', function(e) {
            const floatingElements = document.querySelectorAll('.floating-element');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.3;
                element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
            });
        });

        // Dynamic background gradient
        let gradientAngle = 135;
        setInterval(() => {
            gradientAngle += 0.3;
            document.body.style.background = `linear-gradient(${gradientAngle}deg, #1a1a1a 0%, #2d2d2d 100%)`;
        }, 100);