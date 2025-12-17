// --- Game Data ---
const stories = [
    // Original Stories
    {
        theme: '⚡️',
        story: 'Pikachu menemukan 3 buah apel. Lalu, ia menemukan 2 apel lagi di bawah pohon.',
        visuals: ['🍎','🍎','🍎', '&nbsp;+&nbsp;', '🍎','🍎'],
        question: 'Berapa jumlah apel Pikachu sekarang?',
        options: [4, 5, 6],
        correctAnswer: 5
    },
    {
        theme: '👑',
        story: 'Putri Cinderella melihat 7 ekor burung. Tiba-tiba, 3 ekor burung terbang pergi.',
        visuals: ['🐦','🐦','🐦','🐦','🐦','🐦','🐦', '&nbsp;-&nbsp;', '🐦','🐦','🐦'],
        question: 'Berapa burung yang tersisa?',
        options: [4, 5, 7],
        correctAnswer: 4
    },
    {
        theme: '💎',
        story: 'Steve dari Minecraft menambang 5 blok berlian. Lalu ia menemukan 4 blok lagi di dalam gua!',
        visuals: ['💎','💎','💎','💎','💎', '&nbsp;+&nbsp;', '💎','💎','💎','💎'],
        question: 'Berapa total berlian Steve?',
        options: [9, 8, 10],
        correctAnswer: 9
    },
    {
        theme: '😈',
        story: 'Kuromi punya 6 permen. Dia memberikan 2 permen kepada My Melody.',
        visuals: ['🍬','🍬','🍬','🍬','🍬','🍬', '&nbsp;-&nbsp;', '🍬','🍬'],
        question: 'Berapa sisa permen Kuromi?',
        options: [3, 5, 4],
        correctAnswer: 4
    },
    // 20 New Stories
    {
        theme: '🚗',
        story: 'Di garasi ada 4 mobil merah. Ayah membeli 2 mobil biru lagi.',
        visuals: ['🚗','🚗','🚗','🚗', '&nbsp;+&nbsp;', '🚗','🚗'],
        question: 'Berapa jumlah mobil semuanya?',
        options: [5, 6, 7],
        correctAnswer: 6
    },
    {
        theme: '🍪',
        story: 'Ada 10 kue di toples. Adik memakan 3 kue.',
        visuals: ['🍪','🍪','🍪','🍪','🍪','🍪','🍪','🍪','🍪','🍪', '&nbsp;-&nbsp;', '🍪','🍪','🍪'],
        question: 'Berapa sisa kue di dalam toples?',
        options: [6, 7, 8],
        correctAnswer: 7
    },
    {
        theme: '🦖',
        story: 'T-Rex menemukan 5 telur. Lalu ia menemukan 5 telur lagi di sarang lain.',
        visuals: ['🥚','🥚','🥚','🥚','🥚', '&nbsp;+&nbsp;', '🥚','🥚','🥚','🥚','🥚'],
        question: 'Berapa total telur yang ditemukan T-Rex?',
        options: [9, 10, 11],
        correctAnswer: 10
    },
    {
        theme: '🎈',
        story: 'Seorang anak memiliki 8 balon. Tiba-tiba, 2 balon terbang ke langit.',
        visuals: ['🎈','🎈','🎈','🎈','🎈','🎈','🎈','🎈', '&nbsp;-&nbsp;', '🎈','🎈'],
        question: 'Berapa balon yang tersisa?',
        options: [5, 6, 7],
        correctAnswer: 6
    },
    {
        theme: '🚀',
        story: 'Sebuah roket membawa 6 astronot. Kemudian, 3 astronot lagi bergabung.',
        visuals: ['🧑‍🚀','🧑‍🚀','🧑‍🚀','🧑‍🚀','🧑‍🚀','🧑‍🚀', '&nbsp;+&nbsp;', '🧑‍🚀','🧑‍🚀','🧑‍🚀'],
        question: 'Berapa banyak astronot di roket sekarang?',
        options: [8, 9, 10],
        correctAnswer: 9
    },
    {
        theme: '🐸',
        story: 'Ada 9 katak di atas daun teratai. Sebanyak 4 katak melompat ke air.',
        visuals: ['🐸','🐸','🐸','🐸','🐸','🐸','🐸','🐸','🐸', '&nbsp;-&nbsp;', '🐸','🐸','🐸','🐸'],
        question: 'Berapa katak yang masih di atas daun?',
        options: [4, 5, 6],
        correctAnswer: 5
    },
    {
        theme: '🍕',
        story: 'Ibu membuat pizza dengan 8 potong. Ayah menambahkan 2 potong lagi.',
        visuals: ['🍕','🍕','🍕','🍕','🍕','🍕','🍕','🍕', '&nbsp;+&nbsp;', '🍕','🍕'],
        question: 'Ada berapa potong pizza sekarang?',
        options: [9, 10, 12],
        correctAnswer: 10
    },
    {
        theme: '⭐️',
        story: 'Kamu melihat 12 bintang di langit. Awan menutupi 5 bintang.',
        visuals: ['⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️', '&nbsp;-&nbsp;', '⭐️','⭐️','⭐️','⭐️','⭐️'],
        question: 'Berapa bintang yang masih terlihat?',
        options: [6, 7, 8],
        correctAnswer: 7
    },
    {
        theme: '📚',
        story: 'Di rak ada 7 buku cerita. Kakak meletakkan 4 buku lagi di sana.',
        visuals: ['📚','📚','📚','📚','📚','📚','📚', '&nbsp;+&nbsp;', '📚','📚','📚','📚'],
        question: 'Berapa jumlah buku di rak?',
        options: [10, 11, 12],
        correctAnswer: 11
    },
    {
        theme: '🎩',
        story: 'Pesulap punya 7 topi. Dia menghilangkan 2 topinya dalam trik sulap.',
        visuals: ['🎩','🎩','🎩','🎩','🎩','🎩','🎩', '&nbsp;-&nbsp;', '🎩','🎩'],
        question: 'Berapa sisa topi pesulap?',
        options: [4, 5, 6],
        correctAnswer: 5
    },
    {
        theme: '🤖',
        story: 'Sebuah pabrik membuat 5 robot. Keesokan harinya, pabrik itu membuat 3 robot lagi.',
        visuals: ['🤖','🤖','🤖','🤖','🤖', '&nbsp;+&nbsp;', '🤖','🤖','🤖'],
        question: 'Berapa total robot yang dibuat?',
        options: [7, 8, 9],
        correctAnswer: 8
    },
    {
        theme: '🐛',
        story: 'Ada 11 ulat di sehelai daun. Sebanyak 3 ulat berubah menjadi kepompong.',
        visuals: ['🐛','🐛','🐛','🐛','🐛','🐛','🐛','🐛','🐛','🐛','🐛', '&nbsp;-&nbsp;', '🐛','🐛','🐛'],
        question: 'Berapa banyak ulat yang tersisa di daun?',
        options: [7, 8, 9],
        correctAnswer: 8
    },
    {
        theme: '🦊',
        story: 'Seekor rubah melihat 2 ekor ayam. Lalu ia melihat 3 ekor ayam lagi.',
        visuals: ['🐔','🐔', '&nbsp;+&nbsp;', '🐔','🐔','🐔'],
        question: 'Berapa banyak ayam yang dilihat rubah?',
        options: [4, 5, 6],
        correctAnswer: 5
    },
    {
        theme: '🕯️',
        story: 'Ada 10 lilin menyala di atas kue. Angin meniup padam 6 lilin.',
        visuals: ['🕯️','🕯️','🕯️','🕯️','🕯️','🕯️','🕯️','🕯️','🕯️','🕯️', '&nbsp;-&nbsp;', '🕯️','🕯️','🕯️','🕯️','🕯️','🕯️'],
        question: 'Berapa lilin yang masih menyala?',
        options: [3, 4, 5],
        correctAnswer: 4
    },
    {
        theme: '🌻',
        story: 'Di taman tumbuh 8 bunga matahari. Adik menanam 4 bunga lagi.',
        visuals: ['🌻','🌻','🌻','🌻','🌻','🌻','🌻','🌻', '&nbsp;+&nbsp;', '🌻','🌻','🌻','🌻'],
        question: 'Berapa bunga matahari yang ada di taman sekarang?',
        options: [11, 12, 13],
        correctAnswer: 12
    },
    {
        theme: '🐟',
        story: 'Di akuarium ada 9 ikan. Seekor kucing menangkap 2 ikan.',
        visuals: ['🐟','🐟','🐟','🐟','🐟','🐟','🐟','🐟','🐟', '&nbsp;-&nbsp;', '🐟','🐟'],
        question: 'Berapa sisa ikan di akuarium?',
        options: [6, 7, 8],
        correctAnswer: 7
    },
    {
        theme: '🎸',
        story: 'Sebuah band punya 2 gitar. Mereka membeli 2 gitar baru.',
        visuals: ['🎸','🎸', '&nbsp;+&nbsp;', '🎸','🎸'],
        question: 'Berapa total gitar yang dimiliki band itu?',
        options: [3, 4, 5],
        correctAnswer: 4
    },
    {
        theme: '🧸',
        story: 'Seorang anak punya 6 boneka beruang. Dia memberikan 2 boneka kepada temannya.',
        visuals: ['🧸','🧸','🧸','🧸','🧸','🧸', '&nbsp;-&nbsp;', '🧸','🧸'],
        question: 'Berapa boneka beruang yang tersisa?',
        options: [3, 4, 5],
        correctAnswer: 4
    },
    {
        theme: '⚽️',
        story: 'Tim sepak bola mencetak 3 gol. Di babak kedua, mereka mencetak 2 gol lagi.',
        visuals: ['⚽️','⚽️','⚽️', '&nbsp;+&nbsp;', '⚽️','⚽️'],
        question: 'Berapa total gol yang mereka cetak?',
        options: [4, 5, 6],
        correctAnswer: 5
    },
    {
        theme: '🔑',
        story: 'Penjaga pintu punya 8 kunci. Dia kehilangan 1 kuncinya.',
        visuals: ['🔑','🔑','🔑','🔑','🔑','🔑','🔑','🔑', '&nbsp;-&nbsp;', '🔑'],
        question: 'Berapa kunci yang dia miliki sekarang?',
        options: [6, 7, 8],
        correctAnswer: 7
    }
];

// --- Game State ---
let currentStoryIndex = 0;
let elements = {}; // To hold our created DOM elements

// --- Main Function to Initialize the Game ---
function initializeGame() {
    applyStyles();
    createGameStructure();
    startRound();
}

// --- Function to Inject CSS into the Page ---
function applyStyles() {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        body {
            font-family: 'Arial', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #fdf5e6;
            color: #5c4033;
            margin: 0;
            padding: 15px;
            box-sizing: border-box;
        }
        #game-container {
            width: 100%;
            max-width: 500px;
            background-color: #ffffff;
            padding: 25px;
            border-radius: 20px;
            box-shadow: 0 6px 12px rgba(0,0,0,0.15);
            text-align: center;
        }
        #theme-emoji { font-size: 4rem; margin-bottom: 15px; }
        #story-text { font-size: 1.2rem; line-height: 1.6; min-height: 100px; }
        #visual-recap {
            font-size: 1.5rem;
            margin: 20px 0;
            padding: 15px;
            background-color: #f0f8ff;
            border-radius: 10px;
            min-height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
        #question-text { font-size: 1.3rem; font-weight: bold; margin-top: 15px; }
        #answer-options { margin-top: 20px; display: flex; justify-content: center; gap: 15px; }
        .option-btn {
            width: 80px;
            height: 80px;
            font-size: 2.5rem;
            font-weight: bold;
            cursor: pointer;
            border: none;
            border-radius: 15px;
            background-color: #ffcc80;
            color: #5c4033;
            transition: transform 0.2s;
        }
        .option-btn:hover { transform: scale(1.05); }
        .option-btn.correct { background-color: #a5d6a7; }
        .option-btn.incorrect { background-color: #ef9a9a; }
        #feedback { margin-top: 20px; font-size: 1.5rem; font-weight: bold; min-height: 30px; }
        #next-button {
            margin-top: 15px;
            padding: 15px 30px;
            font-size: 1.2rem;
            cursor: pointer;
            border: none;
            border-radius: 10px;
            background-color: #007bff;
            color: white;
            display: none;
        }
    `;
    document.head.appendChild(styleSheet);
}

// --- Function to Create All HTML Elements ---
function createGameStructure() {
    const gameContainer = document.createElement('div');
    gameContainer.id = 'game-container';

    // Create all the elements and store them in the 'elements' object
    elements.themeEmoji = document.createElement('div');
    elements.themeEmoji.id = 'theme-emoji';

    elements.storyText = document.createElement('h3');
    elements.storyText.id = 'story-text';

    elements.visualRecap = document.createElement('div');
    elements.visualRecap.id = 'visual-recap';

    elements.questionText = document.createElement('p');
    elements.questionText.id = 'question-text';

    elements.answerOptions = document.createElement('div');
    elements.answerOptions.id = 'answer-options';

    elements.feedback = document.createElement('div');
    elements.feedback.id = 'feedback';

    elements.nextButton = document.createElement('button');
    elements.nextButton.id = 'next-button';
    elements.nextButton.textContent = 'Lanjut!';
    elements.nextButton.addEventListener('click', () => {
        currentStoryIndex = (currentStoryIndex + 1) % stories.length;
        startRound();
    });

    // Append all elements to the main container
    gameContainer.append(
        elements.themeEmoji,
        elements.storyText,
        elements.visualRecap,
        elements.questionText,
        elements.answerOptions,
        elements.feedback,
        elements.nextButton
    );

    // Add the container to the page body
    document.body.appendChild(gameContainer);
}

// --- Game Logic Functions ---
function startRound() {
    // Reset from previous round
    elements.feedback.textContent = '';
    elements.nextButton.style.display = 'none';
    elements.answerOptions.innerHTML = '';

    const currentStory = stories[currentStoryIndex];

    // Populate the elements with new story data
    elements.themeEmoji.textContent = currentStory.theme;
    elements.storyText.textContent = currentStory.story;
    elements.visualRecap.innerHTML = currentStory.visuals.join(' ');
    elements.questionText.textContent = currentStory.question;

    // Create answer buttons
    currentStory.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-btn';
        button.onclick = () => selectAnswer(option, currentStory.correctAnswer, button);
        elements.answerOptions.appendChild(button);
    });
}

function selectAnswer(selectedOption, correctAnswer, button) {
    const buttons = elements.answerOptions.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        elements.feedback.textContent = 'Benar! Hebat!';
        elements.feedback.style.color = 'green';
        button.classList.add('correct');
        elements.nextButton.style.display = 'block';
    } else {
        elements.feedback.textContent = 'Coba lagi yuk!';
        elements.feedback.style.color = 'red';
        button.classList.add('incorrect');
        buttons.forEach(btn => {
            if (parseInt(btn.textContent) === correctAnswer) {
                btn.classList.add('correct');
            }
        });
        elements.nextButton.style.display = 'block';
    }
}

// --- Start the game when the script loads ---
initializeGame();
