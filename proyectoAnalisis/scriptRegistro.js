
        document.getElementById('password').addEventListener('input', function() {
            const password = this.value;
            const strengthBar = document.getElementById('strengthBar');
            const strength = checkPasswordStrength(password);
            
            strengthBar.className = 'password-strength-bar';
            
            if (strength.score === 0) {
                strengthBar.classList.add('strength-weak');
            } else if (strength.score === 1) {
                strengthBar.classList.add('strength-fair');
            } else if (strength.score === 2) {
                strengthBar.classList.add('strength-good');
            } else {
                strengthBar.classList.add('strength-strong');
            }
            
            validateForm();
        });
        
        function checkPasswordStrength(password) {
            let score = 0;
            
            if (password.length >= 8) score++;
            if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
            if (/\d/.test(password)) score++;
            if (/[^a-zA-Z\d]/.test(password)) score++;
            
            return { score: Math.min(score, 3) };
        }

        function validateForm() {
            const form = document.getElementById('registerForm');
            const submitBtn = document.getElementById('submitBtn');
            const formData = new FormData(form);
            const password = formData.get('password');
            const confirmPassword = formData.get('confirmPassword');
            const terms = formData.get('terms');
            
            let isValid = true;
            
            const requiredFields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'profession', 'experience'];
            requiredFields.forEach(field => {
                if (!formData.get(field)) {
                    isValid = false;
                }
            });
            
            // Check password match
            if (password !== confirmPassword) {
                isValid = false;
                document.getElementById('confirmPassword').style.borderColor = '#ff4444';
            } else {
                document.getElementById('confirmPassword').style.borderColor = 'rgba(255, 107, 53, 0.3)';
            }
            
            if (checkPasswordStrength(password).score < 2) {
                isValid = false;
            }
            
            if (!terms) {
                isValid = false;
            }
            
            submitBtn.disabled = !isValid;
        }

        document.querySelectorAll('input, select').forEach(element => {
            element.addEventListener('input', validateForm);
            element.addEventListener('change', validateForm);
        });

        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = document.querySelector('.register-btn');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span>Creando cuenta...</span>';
            btn.style.background = 'linear-gradient(135deg, #666, #888)';
            btn.disabled = true;
            
            setTimeout(() => {
                const formData = new FormData(this);
                const userData = Object.fromEntries(formData);
                
                console.log('Registro exitoso:', userData);
                alert('¡Cuenta creada exitosamente! Bienvenido a Forma Collective 🎉');
                this.reset();
                btn.innerHTML = originalText;
                btn.style.background = 'linear-gradient(135deg, #ff6b35, #ff8c5a)';
                btn.disabled = false;
                
                setTimeout(() => {
                    alert('Redirigiendo al dashboard...');
                }, 1000);
                
            }, 2500);
        });


        function socialRegister(platform) {
            alert(`Registrándose con ${platform}...`);
        }

        function showTerms() {
            alert('Términos y Condiciones:\n\n1. Uso responsable de la plataforma\n2. Respeto a la propiedad intelectual\n3. Comportamiento profesional\n4. Privacidad y seguridad de datos');
        }


        function showPrivacy() {
            alert('Política de Privacidad:\n\nEn Forma Collective respetamos tu privacidad y protegemos tus datos personales según las normativas vigentes.');
        }


        function goToLogin() {
            alert('Redirigiendo al login...');
        }


        function goBack() {
            alert('Volviendo a la página principal...');
        }


        document.querySelectorAll('input, select').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
                this.parentElement.style.zIndex = '10';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
                this.parentElement.style.zIndex = '1';
            });
        });

        document.addEventListener('mousemove', function(e) {
            const floatingElements = document.querySelectorAll('.floating-element');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.2;
                element.style.transform = `translate(${x * speed * 30}px, ${y * speed * 30}px)`;
            });
        });


        let gradientAngle = 135;
        setInterval(() => {
            gradientAngle += 0.2;
            document.body.style.background = `linear-gradient(${gradientAngle}deg, #1a1a1a 0%, #2d2d2d 100%)`;
        }, 100);


        document.getElementById('email').addEventListener('blur', function() {
            const email = this.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && !emailRegex.test(email)) {
                this.style.borderColor = '#ff4444';
                this.setCustomValidity('Por favor ingresa un email válido');
            } else {
                this.style.borderColor = 'rgba(255, 107, 53, 0.3)';
                this.setCustomValidity('');
            }
        });