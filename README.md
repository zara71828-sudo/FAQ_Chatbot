# 🤖 AI FAQ Chatbot

An intelligent FAQ Chatbot built using **Python**, **Flask**, **Natural Language Processing (NLP)**, and **Machine Learning**. The chatbot understands user queries using **TF-IDF Vectorization** and **Cosine Similarity**, allowing it to provide accurate answers from a predefined FAQ dataset. It also includes voice interaction, typo-tolerant matching, confidence scoring, and a modern responsive interface.

---

## 📌 Project Overview

The chatbot is designed to answer frequently asked questions using Natural Language Processing techniques instead of simple keyword matching. It preprocesses user input, compares it with stored questions, and returns the most relevant response based on semantic similarity.

---

## ✨ Features

- 🤖 AI-powered FAQ Chatbot
- 🧠 Natural Language Processing (NLP)
- 📊 TF-IDF Vectorization
- 📈 Cosine Similarity Matching
- 🔍 Fuzzy Matching for typo correction
- 👋 Greeting Detection
- 🙏 Thank You & Goodbye Detection
- 🎤 Voice Input using Speech Recognition
- 🔊 Text-to-Speech Responses
- 💬 Typing Animation
- 📚 100+ Frequently Asked Questions
- 📊 Confidence Score for each response
- 💾 Chat History using Local Storage
- 🗑️ Clear Chat functionality
- 📱 Fully Responsive Design
- 🎨 Modern Glassmorphism User Interface
- ⚡ Fast Response Time

---

# 🛠️ Technologies Used

### Backend
- Python
- Flask

### Machine Learning & NLP
- NLTK
- Scikit-learn
- TF-IDF Vectorizer
- Cosine Similarity

### Frontend
- HTML5
- CSS3
- JavaScript

### Dataset
- CSV (FAQ Dataset)

---

# 📂 Project Structure

```
FAQ_Chatbot/
│
├── app.py
├── chatbot.py
├── faq.csv
├── requirements.txt
├── README.md
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/zara71828-sudo/FAQ_Chatbot.git
```

---

## 2. Navigate into the Project

```bash
cd FAQ_Chatbot
```

---

## 3. (Optional) Create a Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## 4. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 5. Run the Application

```bash
python app.py
```

---

## 6. Open in Your Browser

```
http://127.0.0.1:5000
```

---

# 💡 How It Works

1. The user enters a question.
2. The chatbot preprocesses the text using NLTK.
3. Stopwords are removed and words are lemmatized.
4. The processed query is converted into TF-IDF vectors.
5. Cosine Similarity compares the query with stored FAQs.
6. The most relevant answer is selected.
7. The chatbot returns the answer along with a confidence score.
8. If enabled, the chatbot reads the response aloud using Text-to-Speech.

---

# 🧠 NLP Pipeline

```
User Question
      │
      ▼
Text Preprocessing
      │
      ▼
Tokenization
      │
      ▼
Stopword Removal
      │
      ▼
Lemmatization
      │
      ▼
TF-IDF Vectorization
      │
      ▼
Cosine Similarity
      │
      ▼
Best Matching FAQ
      │
      ▼
Response + Confidence Score
```

---

# 🎤 Voice Features

- Speech Recognition for voice input
- Text-to-Speech for chatbot responses
- Hands-free interaction
- Browser-based speech synthesis

---

# 📊 Machine Learning Concepts Used

- Natural Language Processing (NLP)
- TF-IDF Vectorization
- Cosine Similarity
- Text Preprocessing
- Tokenization
- Lemmatization
- Stopword Removal
- Fuzzy String Matching

---

# 🚀 Future Improvements

- GPT API Integration
- Google Gemini Integration
- Multi-language Support
- User Authentication
- Database Integration
- Retrieval-Augmented Generation (RAG)
- Context-aware Conversations
- PDF Question Answering
- Chat Analytics Dashboard
- Conversation Export
- Dark/Light Mode

---

# 📚 Learning Outcomes

This project helped me gain practical experience in:

- Flask Web Development
- Natural Language Processing
- Machine Learning Fundamentals
- Text Similarity Algorithms
- REST API Development
- JavaScript Frontend Integration
- Browser Speech APIs
- Responsive User Interface Design

---

# 📦 Requirements

```
Flask
pandas
nltk
scikit-learn
```

Install all dependencies using:

```bash
pip install -r requirements.txt
```

---

# 👩‍💻 Author

**Zara Khan**

Computer Science Student | AI & Machine Learning Enthusiast

**GitHub:** https://github.com/zara71828-sudo/FAQ_Chatbot

**LinkedIn:** www.linkedin.com/in/zara-khan-393848399

---

# 📄 License

This project was developed for educational purposes and you are welcome to fork, modify, and improve this project for learning and personal use.

---

# ⭐ Support

If you found this project useful, please consider giving it a **⭐ Star** on GitHub.

Contributions, suggestions, and feedback are always appreciated.

---

## ❤️ Thank You

Thank you for visiting this repository.

I hope this project helps you learn more about **Artificial Intelligence, Natural Language Processing, Flask, and Machine Learning**.
