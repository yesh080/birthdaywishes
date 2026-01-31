# 🎂 Birthday Surprise Website 🎂

A magical, interactive birthday surprise website that unlocks exactly on February 1st with romantic animations and heartfelt messages.

## 📁 Project Structure

```
birthday-surprise/
├── index.html          # Main HTML file
├── style.css           # Romantic CSS styling
├── script.js           # Interactive JavaScript
├── images/             # Add your photos here
│   ├── photo1.jpg      # First memory photo
│   ├── photo2.jpg      # Second memory photo
│   └── photo3.jpg      # Third memory photo
├── sounds/             # Add audio files here
│   ├── background.mp3  # Soft background music
│   ├── celebration.mp3 # Birthday celebration music
│   └── click.mp3       # Click sound effect
└── README.md           # This file
```

## 🎨 Features

### ⏰ Smart Countdown
- Real-time countdown to February 1st
- Automatic unlock at 00:00 local time
- Beautiful animated timer with floating hearts

### 🎉 Birthday Celebration
- Confetti and fireworks animation
- "Happy Birthday" message with smooth fade-in
- Celebration music trigger

### 💕 Interactive Elements
1. **Love Letter Envelope** - Click to open a romantic letter
2. **Photo Gallery** - Flip cards to reveal memories
3. **Scratch Card** - Reveal hidden messages
4. **Memory Quiz** - Test your bond (correct answers unlock progress)
5. **Final Wish** - Animated heartfelt messages

### 🔊 Sound System
- Background music before birthday
- Celebration music when unlocked
- Click sound effects
- Mute/unmute control

### 📱 Responsive Design
- Mobile-first approach
- Works perfectly on all devices
- Touch-friendly interactions

## 🚀 Quick Start

1. **Add Your Photos**
   - Place 3 photos in the `images/` folder
   - Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`

2. **Add Music** (Optional)
   - Add background music as `sounds/background.mp3`
   - Add celebration music as `sounds/celebration.mp3`
   - Add click sound as `sounds/click.mp3`

3. **Customize Messages**
   - Edit the love letter text in `index.html`
   - Update photo captions and memories
   - Modify quiz questions and answers

4. **Open the Website**
   - Double-click `index.html` to open in browser
   - Or serve with a local web server

## 🎯 Customization Guide

### Personalize the Love Letter
Edit this section in `index.html`:
```html
<div class="letter hidden" id="letter">
    <h3>My Dearest Sister,</h3>
    <p>On this special day, I want you to know how much you mean to me...</p>
    <p>Your birthday brings so much joy to our family...</p>
    <p>Happy Birthday to the most amazing sister!</p>
    <p>All my love, always ❤️</p>
</div>
```

### Update Photo Memories
Change the captions and back-messages:
```html
<div class="photo-card" data-photo="1">
    <div class="photo-front">
        <img src="images/photo1.jpg" alt="Memory 1" />
        <div class="photo-caption">Childhood Memories</div>
    </div>
    <div class="photo-back">
        <p>Remember when we used to play together...</p>
    </div>
</div>
```

### Customize Quiz Questions
Modify the quiz to match your sister's interests:
```html
<div class="question" data-question="1">
    <h3>What's our favorite childhood game?</h3>
    <div class="options">
        <button class="option" data-answer="wrong">Hide and Seek</button>
        <button class="option" data-answer="correct">Board Games</button>
        <button class="option" data-answer="wrong">Tag</button>
    </div>
</div>
```

### Test Before February 1st
To test the website before the actual birthday, uncomment this line in `script.js`:
```javascript
// For testing - uncomment to test before birthday
const testBirthday = new Date(now.getTime() + 5000); // 5 seconds from now
this.checkCountdown(testBirthday);
```

## 🎨 Design Tips

### Color Palette
- Background: Romantic pink and purple gradients
- Interactive Elements: Soft pastels with hover effects
- Text: Clean white with elegant handwritten fonts

### Typography
- Main Titles: Dancing Script (elegant, handwritten feel)
- Content: Poppins (clean, modern)
- Personal Messages: Caveat (casual, friendly)

### Animations
- Smooth fade-ins and slide-ups
- Floating hearts and confetti
- Card flip effects for photos
- Scratch-to-reveal interactions

## 📱 Mobile Optimization

The website is fully responsive:
- Touch-friendly buttons and interactions
- Optimized for smaller screens
- Works on all modern browsers

## ❤️ Tips for Making It Extra Special

1. **Choose Meaningful Photos**
   - Childhood memories
   - Recent happy moments
   - Family celebrations

2. **Personalize Messages**
   - Include inside jokes
   - Share specific memories
   - Express genuine emotions

3. **Add Favorite Music**
   - Her favorite birthday song
   - Songs from special moments
   - Instrumental versions if lyrics might distract

4. **Test Everything**
   - Open the website before her birthday
   - Test all interactive elements
   - Ensure photos load correctly

## 🎁 Bonus Ideas

- Add a video message section
- Include family photo collages
- Add a timeline of your relationship
- Create a virtual gift opening animation

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths in `index.html`
- Ensure images are in the `images/` folder
- Use common formats (jpg, png, gif)

### Sound Not Working
- Browsers may block autoplay - user interaction required
- Check audio file formats (mp3, wav, ogg)
- Test with different browsers

### Countdown Issues
- Check system date and time
- Ensure JavaScript is enabled
- Test with browser developer console

---

This website is designed to bring joy and love to your sister on her special day. The countdown creates anticipation, while the interactive elements make it a memorable experience she'll cherish forever! 🎂💕"# birthdaywishes" 
