const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearChat");
const suggestionButtons = document.querySelectorAll(".suggestion");
const voiceBtn = document.getElementById("voiceBtn");

const themeBtn=document.getElementById("themeBtn");

let totalQuestions=0;

let confidenceTotal=0;

if ('webkitSpeechRecognition' in window) {

    const recognition = new webkitSpeechRecognition();

    recognition.continuous = false;

    recognition.lang = "en-US";

    recognition.onresult = function(event){

        input.value = event.results[0][0].transcript;

    };

    voiceBtn.onclick = () => {

        recognition.start();

    };

}

// ===============================
// Load Previous Chat
// ===============================

window.onload = () => {

    const saved = localStorage.getItem("chatHistory");

    if(saved){

        chatBox.innerHTML = saved;

        scrollBottom();

    }

}

// ===============================
// Save Chat
// ===============================

function saveChat(){

    localStorage.setItem("chatHistory",chatBox.innerHTML);

}

// ===============================
// Current Time
// ===============================

function currentTime(){

    const now = new Date();

    return now.toLocaleTimeString([],{

        hour:'2-digit',
        minute:'2-digit'

    });

}

// ===============================
// Scroll
// ===============================

function scrollBottom(){

    chatBox.scrollTop = chatBox.scrollHeight;

}

// ===============================
// Add User Message
// ===============================

function addUserMessage(message){

    chatBox.innerHTML += `

    <div class="user-message">

        <div class="message">

            <div class="text">

                ${message}

            </div>

            <span class="time">

                ${currentTime()}

            </span>

        </div>

        <div class="avatar">

            👤

        </div>

    </div>

    `;

    scrollBottom();

}

// ===============================
// Typing Animation
// ===============================

function showTyping(){

    chatBox.innerHTML += `

    <div class="bot-message" id="typing">

        <div class="avatar">

            🤖

        </div>

        <div class="typing">

            <span></span>

            <span></span>

            <span></span>

        </div>

    </div>

    `;

    scrollBottom();

}

function removeTyping(){

    const typing = document.getElementById("typing");

    if(typing){

        typing.remove();

    }

}

// ===============================
// Add Bot Message
// ===============================

function addBotMessage(answer,confidence){

    chatBox.innerHTML += `

    <div class="bot-message">

        <div class="avatar">

            🤖

        </div>

        <div class="message">

            <div class="text">

                ${answer}

                <br><br>

                <span class="confidence">

                    Confidence : ${confidence}%

                </span>

            </div>

            <span class="time">

                ${currentTime()}

            </span>

        </div>

    </div>

    `;

    speak(answer);

    totalQuestions++;
    
    confidenceTotal+=confidence;
    
    document.getElementById("questionCount").innerHTML=totalQuestions;
    
    document.getElementById("confidenceAvg").innerHTML=
    
    Math.round(confidenceTotal/totalQuestions)+"%";
    
    saveChat();

    scrollBottom();

}

function speak(text){

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);

}

// ===============================
// Send Message
// ===============================

async function sendMessage(){

    const message = input.value.trim();

    if(message===""){

        return;

    }

    addUserMessage(message);

    saveChat();

    input.value="";

    showTyping();

    const response = await fetch("/chat",{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify({

            message:message

        })

    });

    const data = await response.json();

    setTimeout(()=>{

        removeTyping();

        addBotMessage(data.answer,data.confidence);

    },1000);

}

// ===============================
// Send Button
// ===============================

sendBtn.addEventListener("click",sendMessage);

// ===============================
// Enter Key
// ===============================

input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

// ===============================
// Suggestions
// ===============================

suggestionButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        input.value=button.innerText;

        sendMessage();

    });

});

// ===============================
// Clear Chat
// ===============================

clearBtn.addEventListener("click",()=>{

    if(confirm("Clear all chat history?")){

        localStorage.removeItem("chatHistory");

        location.reload();

    }

});