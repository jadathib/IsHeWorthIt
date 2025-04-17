function calculateScore(formData) {
    let score = 0;

    // Helper function to safely parse integers, returning 0 for NaN
    function safeParseInt(value) {
        const parsed = parseInt(value || 0);
        return isNaN(parsed) ? 0 : parsed;
    }

    score += safeParseInt(formData.textBack);
    score += safeParseInt(formData.plans);
    score += safeParseInt(formData.ghosted);
    score += safeParseInt(formData.compliments);

    let resultText = "";
    if (score >= 30) {
        resultText = "👑 He's a king! Lock him down!";
    } else if (score >= 20) {
        resultText = "😬 He's decent, but keep an eye on him.";
    } else {
        resultText = "🚩 RUN. He is NOT worth it!";
    }

    return {
        score: score,
        resultText: resultText
    };
}

// For browser usage
if (typeof window !== 'undefined') {
    window.calculateFormScore = function() {
        let form = document.forms["quizForm"];
        let formData = {
            textBack: form["textBack"].value || 0,
            plans: form["plans"].value || 0,
            ghosted: form["ghosted"].value || 0,
            compliments: form["compliments"].value || 0
        };

        const result = calculateScore(formData);
        document.getElementById("result").innerText = result.resultText;
    };
}

// For Node.js/Jest testing
if (typeof module !== 'undefined') {
    module.exports = {
        calculateScore
    };
}
