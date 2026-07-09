import pandas as pd
import nltk
import difflib

from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


# ==============================
# Download NLTK Resources
# ==============================

resources = [
    ("tokenizers/punkt", "punkt"),
    ("tokenizers/punkt_tab", "punkt_tab"),
    ("corpora/stopwords", "stopwords"),
    ("corpora/wordnet", "wordnet"),
]

for path, package in resources:
    try:
        nltk.data.find(path)
    except LookupError:
        nltk.download(package)


lemmatizer = WordNetLemmatizer()
stop_words = set(stopwords.words("english"))


# ==============================
# Load FAQ Dataset
# ==============================

faq = pd.read_csv("faq.csv")

questions = faq["Question"].tolist()
answers = faq["Answer"].tolist()


# ==============================
# Greetings
# ==============================

greetings = {
    "hi": "Hello! 👋 How can I help you today?",
    "hello": "Hello! 😊",
    "hey": "Hey there! 👋",
    "good morning": "Good Morning! ☀️",
    "good afternoon": "Good Afternoon! 😊",
    "good evening": "Good Evening! 🌙",
    "thanks": "You're welcome! 😊",
    "thank you": "Happy to help! 😄",
    "bye": "Goodbye! Have a wonderful day! 👋",
    "goodbye": "See you soon! 👋"
}


# ==============================
# Text Preprocessing
# ==============================

def preprocess(text):

    text = str(text).lower()

    tokens = nltk.word_tokenize(text)

    cleaned = []

    for word in tokens:

        if word.isalnum():

            if word not in stop_words:

                cleaned.append(
                    lemmatizer.lemmatize(word)
                )

    return " ".join(cleaned)


processed_questions = [preprocess(q) for q in questions]


vectorizer = TfidfVectorizer()

question_vectors = vectorizer.fit_transform(processed_questions)


# ==============================
# Greeting Detection
# ==============================

def greeting_response(user_input):

    text = user_input.lower().strip()

    if text in greetings:
        return greetings[text]

    return None


# ==============================
# Fuzzy Matching
# ==============================

def fuzzy_match(user_input):

    match = difflib.get_close_matches(
        user_input,
        questions,
        n=1,
        cutoff=0.80
    )

    if match:

        index = questions.index(match[0])

        return answers[index]

    return None


# ==============================
# Main Function
# ==============================

def get_answer(user_question):

    greeting = greeting_response(user_question)

    if greeting:

        return {

            "answer": greeting,

            "confidence": 100

        }

    fuzzy = fuzzy_match(user_question)

    if fuzzy:

        return {

            "answer": fuzzy,

            "confidence": 99

        }

    processed = preprocess(user_question)

    input_vector = vectorizer.transform([processed])

    similarity = cosine_similarity(
        input_vector,
        question_vectors
    )

    highest_score = similarity.max()

    index = similarity.argmax()

    confidence = round(highest_score * 100, 2)

    if highest_score < 0.35:

        return {

            "answer":
            """🤔 Sorry, I couldn't find an answer.

Try asking about:

• Password

• Login

• Office Hours

• Internship

• Payments

• Contact

• Refund

• Support""",

            "confidence": confidence

        }

    return {

        "answer": answers[index],

        "confidence": confidence

    }