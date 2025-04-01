// Language Data
const languageData = {
    de: {
        pageTitle: "Regex Lernführer",
        creditsTitle: "Quellen",
        regexRules: [
            {
                title: "1. Grundlegende Zeichenübereinstimmung",
                description: "Einfache Zeichen werden direkt abgeglichen.",
                example: "Muster: /Hund/\nText: 'Der Hund spielt im Garten'"
            },
            {
                title: "2. Platzhalterzeichen (.)",
                description: "Der Punkt stimmt ein beliebiges einzelnes Zeichen ab.",
                example: "Muster: /h.t/\nText: 'hut', 'hot', 'hit'"
            },
            {
                title: "3. Zeichenklassen ([...])",
                description: "Definiert eine Gruppe von Zeichen zur Auswahl.",
                example: "Muster: /[aeiou]/\nText: Stimmt Vokale in 'Hallo' ab."
            },
            {
                title: "4. Negierte Zeichenklassen ([^...])",
                description: "Stimmt Zeichen, die NICHT in der Klasse sind ab.",
                example: "Muster: /[^0-9]/\nText: Matched Nicht-Ziffern"
            },
            {
                title: "5. Wiederholungszeichen (*)",
                description: "0 oder mehr Vorkommen des vorherigen Zeichens.",
                example: "Muster: /go*/\nText: 'g', 'go', 'gooo'"
            },
            {
                title: "6. Plus-Zeichen (+)",
                description: "1 oder mehr Vorkommen des vorherigen Zeichens.",
                example: "Muster: /go+/\nText: 'go', 'gooo', NICHT 'g'"
            },
            {
                title: "7. Fragezeichen (?)",
                description: "0 oder 1 Vorkommen des vorherigen Zeichens.",
                example: "Muster: /Hunde?/\nText: 'Hund', 'Hunde'"
            },
            {
                title: "8. Bereichsangaben ({n,m})",
                description: "Exakte Anzahl von Wiederholungen.",
                example: "Muster: /a{2,4}/\nText: 'aa', 'aaa', 'aaaa'"
            },
            {
                title: "9. Ankerwerte (^ $)",
                description: "Definiert Start und Ende einer Zeile.",
                example: "Muster: /^Start/\nText: 'Start der Zeile'"
            },
            {
                title: "10. Escape-Zeichen (\\)",
                description: "Stimmt Sonderzeichen für wörtliche Übereinstimmung ab.",
                example: "Muster: /\\./\nText: Stimmt einen Punkt '.' ab."
            }
        ]
    },
    en: {
        pageTitle: "Regex Learning Guide",
        creditsTitle: "Sources",
        regexRules: [
            {
                title: "1. Basic Character Matching",
                description: "Simple characters are matched directly.",
                example: "Pattern: /cat/\nText: 'The cat is on the bed'"
            },
            {
                title: "2. Wildcard Character (.)",
                description: "The dot matches any single character.",
                example: "Pattern: /h.t/\nText: 'hat', 'hot', 'hit'"
            },
            {
                title: "3. Character Classes ([...])",
                description: "Defines a group of characters to choose from.",
                example: "Pattern: /[aeiou]/\nText: Matches vowels in 'Hello'"
            },
            {
                title: "4. Negated Character Classes ([^...])",
                description: "Matches characters NOT in the class.",
                example: "Pattern: /[^0-9]/\nText: Matches non-digit characters"
            },
            {
                title: "5. Asterisk Quantifier (*)",
                description: "0 or more occurrences of the previous character.",
                example: "Pattern: /go*/\nText: 'g', 'go', 'gooo'"
            },
            {
                title: "6. Plus Sign (+)",
                description: "1 or more occurrences of the previous character.",
                example: "Pattern: /go+/\nText: 'go', 'gooo', NOT 'g'"
            },
            {
                title: "7. Question Mark (?)",
                description: "0 or 1 occurrence of the previous character.",
                example: "Pattern: /colou?r/\nText: 'color', 'colour'"
            },
            {
                title: "8. Quantified Ranges ({n,m})",
                description: "Exact number of repetitions.",
                example: "Pattern: /a{2,4}/\nText: 'aa', 'aaa', 'aaaa'"
            },
            {
                title: "9. Anchor Values (^ $)",
                description: "Defines start and end of a line.",
                example: "Pattern: /^Start/\nText: 'Start of the line'"
            },
            {
                title: "10. Escape Character (\\)",
                description: "Escapes special characters for literal matching.",
                example: "Pattern: /\\./\nText: Matches a literal dot '.'"
            }
        ]
    }
};

// Language toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const deButton = document.getElementById('de-lang');
    const enButton = document.getElementById('en-lang');
    
    // Default to German
    let currentLanguage = 'de';
    
    deButton.addEventListener('click', () => {
        currentLanguage = 'de';
        updateLanguage();
    });
    
    enButton.addEventListener('click', () => {
        currentLanguage = 'en';
        updateLanguage();
    });
    
    function updateLanguage() {
        const languageDataCurrent = languageData[currentLanguage];
        
        // Update page elements
        document.documentElement.lang = currentLanguage;
        document.getElementById('page-title').textContent = languageDataCurrent.pageTitle;
        document.getElementById('credits-title').textContent = languageDataCurrent.creditsTitle;
        
        // Update regex rules
        const rulesSection = document.getElementById('regex-rules');
        rulesSection.innerHTML = ''; // Clear existing rules
        
        languageDataCurrent.regexRules.forEach(rule => {
            const ruleElement = document.createElement('div');
            ruleElement.classList.add('regex-rule');
            ruleElement.innerHTML = `
                <h3>${rule.title}</h3>
                <p>${rule.description}</p>
                <pre><code>${rule.example}</code></pre>
            `;
            rulesSection.appendChild(ruleElement);
        });
    }
    
    // Initial load
    updateLanguage();
});
