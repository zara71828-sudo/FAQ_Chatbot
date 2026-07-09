from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify

from chatbot import get_answer

app = Flask(__name__)


@app.route("/")
def home():

    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    question = data["message"]

    result = get_answer(question)

    return jsonify(result)


if __name__ == "__main__":

    app.run(debug=True)