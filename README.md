# Colloki Femininity and Wellness 🌺

A modern, responsive wellness website designed specifically for women's health and wellbeing. Built with React and FastAPI, this platform provides comprehensive resources for physical, mental, and emotional wellness.created a dynamic women health and wellness e-commerce website.

## ✨ Features

### 🏠 Core Pages
- **Home**: Welcome page with rotating daily wellness tips
- **Nutrition**: Comprehensive nutrition guidance with interactive sections
- **Menstrual Care**: Cycle management information with tabbed navigation
- **Pregnancy Support**: Trimester-specific guidance and support
- **Mental Wellness**: Stress management and mindfulness techniques
- **Lifestyle Management**: Daily routines and productivity tips
- **Feedback**: User feedback form with validation

### 🎯 Interactive Features
- **Daily Tips**: Personalized wellness tips fetched from backend API
- **Collapsible Sections**: Organized content with smooth animations
- **Tab Navigation**: Easy-to-use tabbed interfaces
- **Form Validation**: Client-side validation for all forms
- **Responsive Design**: Mobile-first approach with Bootstrap
- **Smooth Animations**: Enhanced UX with Framer Motion

### 🔧 Technical Features
- **RESTful API**: FastAPI backend with CORS support
- **Real-time Updates**: Dynamic content loading
- **Error Handling**: Comprehensive error management
- **Accessibility**: WCAG compliant design
- **Performance**: Optimized loading and rendering

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd colloki-wellness
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   python main.py
   ```
   The API will be available at `http://localhost:8000`

2. **Start the Frontend Development Server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5173`

## 📡 API Endpoints

### GET `/api/tip`
Returns a random wellness tip, optionally filtered by category.

**Query Parameters:**
- `category` (optional): Filter tips by category (nutrition, mental, physical, etc.)

**Response:**
```json
{
  "id": 1,
  "category": "nutrition",
  "tip": "Start your day with a glass of warm lemon water...",
  "icon": "🍋"
}
```

### POST `/api/feedback`
Submit user feedback.

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Great website!",
  "category": "general"
}
```

**Response:**
```json
{
  "message": "Feedback submitted successfully",
  "id": 1
}
```

### GET `/api/feedbacks`
Get all submitted feedback (admin endpoint).

**Response:**
```json
{
  "feedbacks": [...],
  "total": 10
}
```

## 🏗️ Project Structure

```
colloki-wellness/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── tips.py              # Wellness tips data
│   ├── database.py          # Database utilities (optional)
│   └── requirements.txt     # Python dependencies
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── DailyTip.jsx
│   │   ├── CollapsibleSection.jsx
│   │   └── TabNavigation.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Nutrition.jsx
│   │   ├── MenstrualCare.jsx
│   │   ├── PregnancySupport.jsx
│   │   ├── MentalWellness.jsx
│   │   ├── LifestyleManagement.jsx
│   │   └── Feedback.jsx
│   ├── styles/
│   │   └── App.css          # Global styles
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── public/                  # Static assets
├── package.json             # Node.js dependencies
└── README.md               # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: `#e91e63` (Pink)
- **Secondary**: `#9c27b0` (Purple)
- **Accent**: `#ff9800` (Orange)
- **Success**: `#4caf50` (Green)
- **Warning**: `#ff5722` (Red-Orange)
- **Info**: `#2196f3` (Blue)

### Typography
- **Font Family**: Segoe UI, system fonts
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Regular weight, 1.6 line height
- **Small Text**: 0.875rem for secondary information

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Adding New Tips
Edit `backend/tips.py` to add new wellness tips:

```python
{
    "id": 11,
    "category": "new_category",
    "tip": "Your wellness tip here...",
    "icon": "🌟"
}
```

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update the navigation in `src/components/Navbar.jsx`

### Styling Guidelines
- Use Bootstrap classes for layout and common components
- Custom CSS in `src/styles/App.css` for specific styling
- Follow BEM methodology for custom class names
- Ensure mobile-first responsive design

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build
# Deploy the dist/ folder
```

### Backend (Heroku/Railway)
```bash
# Add Procfile with: web: uvicorn main:app --host 0.0.0.0 --port $PORT
# Deploy with your preferred platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- Framer Motion for smooth animations
- FastAPI for the robust backend framework
- React community for excellent documentation and tools

## 📞 Support

For support, email support@colloki.com or create an issue in the repository.

---

Made with 💜 for women's wellness and empowerment.
