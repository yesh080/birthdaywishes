class BirthdaySurprise {
    constructor() {
        this.isUnlocked = false;
        this.currentQuestion = 1;
        this.totalQuestions = 2;
        this.isMuted = false;
        this.sounds = {};
        
        this.init();
    }

    init() {
        this.setupLoadingScreen();
        this.checkBirthdayStatus();
        this.setupEventListeners();
        this.initializeSounds();
        this.initializeScratchCard();
    }

    // Loading Screen
    setupLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.classList.add('hidden');
            this.showAppropriateScreen();
        }, 2000);
    }

    // Check if it's February 1st
    checkBirthdayStatus() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const birthday = new Date(currentYear, 1, 1); // February 1st (month 1 = February)
        
        // For testing - uncomment to test before birthday
        // const testBirthday = new Date(now.getTime() + 5000); // 5 seconds from now
        // this.showCountdown(testBirthday);
        
        if (now >= birthday) {
            this.unlockWebsite();
        } else {
            this.showCountdown(birthday);
        }
    }

    // Show countdown screen
    showCountdown(targetDate) {
        const countdownScreen = document.getElementById('countdown-screen');
        countdownScreen.classList.remove('hidden');
        
        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate - now;
            
            if (difference <= 0) {
                this.unlockWebsite();
                return;
            }
            
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        };
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // Show appropriate screen based on birthday status
    showAppropriateScreen() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const birthday = new Date(currentYear, 1, 1); // February 1st
        
        if (now >= birthday) {
            this.unlockWebsite();
        } else {
            this.showCountdown(birthday);
        }
    }

    // Unlock the website on birthday
    unlockWebsite() {
        if (this.isUnlocked) return;
        
        this.isUnlocked = true;
        
        // Hide countdown screen
        const countdownScreen = document.getElementById('countdown-screen');
        if (countdownScreen) {
            countdownScreen.classList.add('hidden');
        }
        
        // Show birthday screen
        const birthdayScreen = document.getElementById('birthday-screen');
        birthdayScreen.classList.remove('hidden');
        
        // Start celebration
        this.startCelebration();
        
        // Play celebration music
        this.playSound('celebration');
    }

    // Start birthday celebration
    startCelebration() {
        // Show birthday title with animation
        setTimeout(() => {
            const title = document.querySelector('.birthday-title');
            const subtitle = document.querySelector('.birthday-subtitle');
            
            title.classList.remove('hidden');
            title.style.animation = 'fadeInUp 1s ease-out';
            
            setTimeout(() => {
                subtitle.classList.remove('hidden');
                subtitle.style.animation = 'fadeInUp 1s ease-out';
            }, 500);
        }, 500);
        
        // Create confetti
        this.createConfetti();
        
        // Animate wish lines one by one
        this.animateWishLines();
    }

    // Create confetti effect
    createConfetti() {
        const container = document.querySelector('.confetti-container');
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#fdcb6e', '#f9ca24', '#6c5ce7'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDelay = Math.random() * 3 + 's';
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                container.appendChild(confetti);
                
                // Remove confetti after animation
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, i * 100);
        }
        
        // Continue creating confetti periodically
        setInterval(() => {
            for (let i = 0; i < 10; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                container.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }, 10000);
    }

    // Animate wish lines
    animateWishLines() {
        const wishLines = document.querySelectorAll('.wish-line');
        wishLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('show');
            }, 3000 + (index * 1500));
        });
    }

    // Initialize sounds
    initializeSounds() {
        // Create audio elements for sound effects
        // Note: Add actual audio files to the sounds folder
        this.sounds.click = new Audio();
        this.sounds.celebration = new Audio();
        this.sounds.background = new Audio();
        
        // Set loop for background music
        this.sounds.background.loop = true;
        this.sounds.celebration.loop = false;
        
        // Set volume
        this.sounds.click.volume = 0.5;
        this.sounds.celebration.volume = 0.3;
        this.sounds.background.volume = 0.2;
    }

    // Play sound effect
    playSound(type) {
        if (this.isMuted) return;
        
        try {
            // For demo purposes, we'll just log the sound that would play
            // In production, add actual audio files to the sounds folder
            console.log(`Playing sound: ${type}`);
            
            // Example: this.sounds[type].play();
        } catch (error) {
            console.log('Sound not available:', type);
        }
    }

    // Setup event listeners
    setupEventListeners() {
        // Sound control
        document.getElementById('mute-btn').addEventListener('click', () => {
            this.toggleMute();
        });

        // Love letter envelope
        const envelope = document.getElementById('envelope');
        envelope.addEventListener('click', () => {
            this.openLetter();
        });

        // Photo cards
        document.querySelectorAll('.photo-card').forEach(card => {
            card.addEventListener('click', () => {
                this.playSound('click');
            });
        });

        // Quiz options
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.handleQuizAnswer(e.target);
            });
        });

        // Add floating hearts to wish section
        this.addFloatingHearts();
    }

    // Toggle mute/unmute
    toggleMute() {
        this.isMuted = !this.isMuted;
        const muteBtn = document.getElementById('mute-btn');
        muteBtn.textContent = this.isMuted ? '🔇' : '🔊';
        
        // Mute all sounds
        Object.values(this.sounds).forEach(sound => {
            sound.muted = this.isMuted;
        });
    }

    // Open love letter
    openLetter() {
        const envelope = document.getElementById('envelope');
        const letter = document.getElementById('letter');
        
        if (envelope.classList.contains('opened')) return;
        
        this.playSound('click');
        envelope.classList.add('opened');
        
        setTimeout(() => {
            letter.classList.remove('hidden');
            setTimeout(() => {
                letter.classList.add('show');
            }, 100);
        }, 500);
    }

    // Handle quiz answers
    handleQuizAnswer(option) {
        const question = option.closest('.question');
        const isCorrect = option.dataset.answer === 'correct';
        
        // Disable all options in this question
        question.querySelectorAll('.option').forEach(opt => {
            opt.disabled = true;
            opt.style.cursor = 'not-allowed';
        });
        
        // Show correct/wrong feedback
        option.classList.add(isCorrect ? 'correct' : 'wrong');
        this.playSound(isCorrect ? 'correct' : 'wrong');
        
        // Move to next question after delay
        setTimeout(() => {
            if (isCorrect) {
                this.nextQuestion();
            } else {
                // Allow retry
                question.querySelectorAll('.option').forEach(opt => {
                    opt.disabled = false;
                    opt.style.cursor = 'pointer';
                });
                option.classList.remove('wrong');
            }
        }, 1500);
    }

    // Move to next question
    nextQuestion() {
        const currentQuestionEl = document.querySelector(`[data-question="${this.currentQuestion}"]`);
        const nextQuestionEl = document.querySelector(`[data-question="${this.currentQuestion + 1}"]`);
        
        if (nextQuestionEl) {
            currentQuestionEl.classList.add('hidden');
            nextQuestionEl.classList.remove('hidden');
            this.currentQuestion++;
            
            document.getElementById('current-question').textContent = this.currentQuestion;
        } else {
            // Quiz completed - show celebration
            this.showQuizCompletion();
        }
    }

    // Show quiz completion
    showQuizCompletion() {
        const quizContainer = document.querySelector('.quiz-container');
        quizContainer.innerHTML = `
            <div class="quiz-complete">
                <h3 style="color: white; font-size: 2rem; margin-bottom: 1rem;">🎉 Perfect! 🎉</h3>
                <p style="color: white; font-size: 1.2rem;">You know me so well!</p>
                <div class="quiz-hearts">
                    ${Array(5).fill('❤️').join('')}
                </div>
            </div>
        `;
        
        this.createConfetti();
    }

    // Initialize scratch card
    initializeScratchCard() {
        const canvas = document.getElementById('scratch-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let isDrawing = false;
        let scratchedPixels = 0;
        const totalPixels = canvas.width * canvas.height;
        
        // Create scratch surface
        ctx.fillStyle = '#ddd';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add text on scratch surface
        ctx.fillStyle = '#666';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Scratch Here!', canvas.width / 2, canvas.height / 2);
        
        // Handle mouse/touch events
        const startDrawing = () => isDrawing = true;
        const stopDrawing = () => isDrawing = false;
        const draw = (e) => {
            if (!isDrawing) return;
            
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left || e.touches[0].clientX - rect.left;
            const y = e.clientY - rect.top || e.touches[0].clientY - rect.top;
            
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 2);
            ctx.fill();
            
            // Check how much has been scratched
            this.checkScratchProgress(ctx, canvas);
        };
        
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('touchstart', startDrawing);
        canvas.addEventListener('touchend', stopDrawing);
        canvas.addEventListener('touchmove', draw);
    }

    // Check scratch progress
    checkScratchProgress(ctx, canvas) {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let transparent = 0;
        
        for (let i = 3; i < imageData.data.length; i += 4) {
            if (imageData.data[i] < 128) {
                transparent++;
            }
        }
        
        const percentage = (transparent / (canvas.width * canvas.height)) * 100;
        
        if (percentage > 50) {
            this.revealScratchMessage();
        }
    }

    // Reveal scratch message
    revealScratchMessage() {
        const canvas = document.getElementById('scratch-canvas');
        const message = document.querySelector('.scratch-message');
        
        canvas.style.opacity = '0';
        message.classList.remove('hidden');
        message.classList.add('fade-in');
        
        this.playSound('celebration');
        this.createConfetti();
    }

    // Add floating hearts to wish section
    addFloatingHearts() {
        const container = document.querySelector('.floating-hearts-wish');
        const hearts = ['❤️', '💕', '💖', '💗', '💝'];
        
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = hearts[i];
            heart.style.animationDelay = `${i * 1.5}s`;
            container.appendChild(heart);
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BirthdaySurprise();
});