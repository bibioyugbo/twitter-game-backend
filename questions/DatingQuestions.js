
const express = require('express')
const questionsRouter = express.Router()

const daterType=[
    {
        name: "Chill Lover",
        description:"Effortless, secure, and drama-free. You don’t overthink, you don’t stress, and your energy is top-tier. Just make sure you’re not so chill that people think you don’t care.",
        criteria: {chillAns: "A", deluluAns: "A", redFlagAns: "A" , difficultAs:"A"}
    },
    {
        name: "Delulu lover",
        description:"You mean well, but dating feels like a puzzle you can’t quite solve. Your heart is in the right place, but your decisions? Questionable. You need better strategies if you want love to last",
        criteria: {chillAns: "B", deluluAns: "B", redFlagAns: "C" , difficultAs:"D"}
    },
    {
        name: "Walking Red Flag",
        description:"Your toxic energy is magnetic, and honestly, people love the drama. You bring passion, excitement, and chaos, but at what cost? Relationships shouldn’t feel like a reality show.",
        criteria: {chillAns: "C", deluluAns: "C", redFlagAns: "C" , difficultAs:"C"}
    },
    {
        name: "Difficult to Date",
        description:"You’re mean-spirited and, frankly, you need this time to heal instead of looking for a partner. Your standards aren’t high—they’re unreasonable. Love is not a battlefield, but you treat it like one",
        criteria: {chillAns: "D", deluluAns: "D", redFlagAns: "D" , difficultAs:"D"}
    },
]



const datingQuestions =[
    {
        "category": "GENERAL",
        "question": "You see your partner tagged in a pic with someone you don’t know. What’s your move?",
        "options": [
            "Ask them about it casually",
            "Stalk the person’s entire social media",
            "Assume it’s nothing",
            "DM the person and ask who they are"
        ]
    },
    {
        "category": "GENERAL",
        "question": "They’re taking too long to reply but are active online. How do you react?",
        "options": [
            "Wait, they’ll reply when they can",
            "Double text them",
            "Tweet something spicy",
            "Call them and demand an explanation"
        ]
    },
    {
        "category": "GENERAL",
        "question": "Your partner still talks to their ex “as a friend.” What’s your response?",
        "options": [
            "No problem, I trust them",
            "Ask a lot of questions",
            "Side-eye but stay quiet",
            "End the relationship immediately"
        ]
    },
    {
        "category": "GENERAL",
        "question": "Your partner calls someone else their “work wife/husband”…",
        "options": [
            "It’s just a joke, no big deal",
            "Side-eye but let it go",
            "Ask them to stop",
            "Pull up to their office unannounced"
        ]
    },
    {
        "category": "GENERAL",
        "question": "Your partner forgets your anniversary. What happens next?",
        "options": [
            "It’s okay, I remind them",
            "I get a little upset but move on",
            "I guilt-trip them for days",
            "I “forget” their birthday too"
        ]
    },
    {
        "category": "GENERAL",
        "question": "Your partner’s best friend of the opposite gender calls them at 2 AM. What do you do?",
        "options": [
            "It’s just a friend, no stress",
            "Ask why they’re calling that late",
            "Start side-eyeing the friendship",
            "Pick up the call myself"
        ]
    },
    {
        "category": "GENERAL",
        "question": "Your partner asks for an open relationship, what’s your reaction?",
        "options": [
            "If they’re serious, I’m out",
            "Ask what’s missing in our relationship",
            "Agree, but start exploring too",
            "Laugh and tell them to enjoy being single"
        ]
    },
    {
        "category": "GENERAL",
        "question": "You catch your partner texting someone labeled 'cousin' but they don’t look related…",
        "options": [
            "It’s probably fine",
            "Ask for an explanation",
            "Demand to see the messages",
            "Block the number when they’re not looking"
        ]
    },
    {
        "category": "FINANCIAL",
        "question": "Your partner doesn’t pay for dinner on the first date. Thoughts?",
        "options": [
            "No problem, we can split",
            "I’m a little disappointed but let it go",
            "Major red flag",
            "Never seeing them again"
        ]
    },
    {
        "category": "FINANCIAL",
        "question": "Your partner asks to borrow money but hasn’t paid back the last loan. What now?",
        "options": [
            "Give it if I can",
            "Ask when they’ll return the last one",
            "Say I’m broke too",
            "Tell them to go ask their real partner"
        ]
    },
    {
        "category": "FINANCIAL",
        "question": "Your partner surprises you with a gift, but it’s something you hate. What do you do?",
        "options": [
            "Appreciate the thought",
            "Subtly hint that it’s not my style",
            "Exchange it for something better",
            "Call them out for not knowing me"
        ]
    },
    {
        "category": "FINANCIAL",
        "question": "Your partner’s job pays way less than yours. How do you feel?",
        "options": [
            "No big deal, love isn’t about money",
            "Hope they work on growing financially",
            "I’d feel a bit weird about it",
            "I can’t date someone who earns less"
        ]
    },
    {
        "category": "FINANCIAL",
        "question": "They want to split rent 50/50, but they make double your salary. What’s your move?",
        "options": [
            "That’s fair",
            "Ask for a more reasonable split",
            "Let them know I’m not comfortable with that",
            "Move out and let them live alone"
        ]
    },
    {
        "category": "FINANCIAL",
        "question": "You find out your partner is stingy when it comes to money. What’s your next move?",
        "options": [
            "It’s fine, I don’t expect much anyway",
            "I’ll try to show them the importance of generosity",
            "I’ll start testing them to see if they’ll step up",
            "Oh, I’m out. I can’t date a financial liability"
        ]
    },
    {
        "category": "FINANCIAL",
        "question": "Your partner surprises you with a 'just because' gift. What’s your reaction?",
        "options": [
            "Aww, that’s sweet, but they didn’t have to!",
            "OMG, this is the romance I live for!",
            "Hmm… what did they do? Nobody gives gifts for no reason",
            "Hope it’s something expensive"
        ]
    },
    {
        "category": "FINANCIAL",
        "question": "You’re at a fancy dinner, and the waiter hands the bill to your partner. What do you expect?",
        "options": [
            "Whoever invited should pay",
            "I’ll offer to split, but I hope they decline",
            "I’ll stare at them and see what they do",
            "I have my own money and I’m ready to leave them if they don’t pay"
        ]
    },
    {
        "category": "SPICY & CONTROVERSIAL",
        "question": "Your partner refuses to go down on you, but expects it from you.",
        "options": [
            "I’d talk to them and see if they’ll compromise",
            "Let it slide, but secretly judge them",
            "Start faking it when I do it for them",
            "Cheat"
        ]
    },
    {
        "category": "SPICY & CONTROVERSIAL",
        "question": "Your partner stops initiating sex. What’s your move?",
        "options": [
            "Maybe they’re stressed, I’ll talk to them about it",
            "Assume it’s something I did and overthink",
            "Start being 'too tired' when they finally want it",
            "Test their loyalty by flirting with someone else and see their reaction"
        ]
    },
    {
        "category": "SPICY & CONTROVERSIAL",
        "question": "Your partner doesn’t put effort into your birthday, but they go all out for their friends.",
        "options": [
            "Maybe they’re just bad at birthdays, I’ll tell them how I feel",
            "Wait till their birthday and match their energy",
            "Plan a fake surprise for them, then cancel last minute",
            "Break up with them ON my birthday"
        ]
    },
    {
        "category": "SPICY & CONTROVERSIAL",
        "question": "Your partner goes clubbing without telling you. What’s your next move?",
        "options": [
            "Ask them how it went, no stress",
            "Subtweet about them but don’t say anything",
            "Go clubbing the next night without telling them",
            "Go and meet them at the club they are at"
        ]
    },
    {
        "category": "SPICY & CONTROVERSIAL",
        "question": "Your partner says ‘I love you’ mid-argument. What do you do?",
        "options": [
            "Maybe they just don’t want to fight, I’ll hear them out",
            "Wow they love me, I’ve forgotten what I was mad about",
            "Say 'Love yourself first'",
            "Look them dead in the eye and say 'I don’t'"
        ]
    },
    {
        "category": "SPICY & CONTROVERSIAL",
        "question": "Your partner says they 'don’t believe in Valentine’s Day.'",
        "options": [
            "That’s fine, as long as they still show love in other ways",
            "Accept it, but still hope they surprise me",
            "Buy myself gifts and post 'Best Valentine’s yet' online",
            "Drop them in February and pick them back up in March"
        ]
    },
    {
        "category": "SPICY & CONTROVERSIAL",
        "question": "Your partner tells you 'I love you' for the first time during sex. What do you do?",
        "options": [
            "Say it back if I feel it",
            "This is not how I wanted the first time to be but I’ll take it",
            "Say 'I love fucking you' instead",
            "Act like nothing happened"
        ]
    },
    {
        "category": "SPICY & CONTROVERSIAL",
        "question": "Your partner says they 'just want to vibe' but you want something serious.",
        "options": [
            "Respect their honesty and move on",
            "Stick around, hoping they change their mind",
            "Make them fall in love and then ghost them",
            "Gaslight them into commitment"
        ]
    },
    {
        "category": "SPICY & CONTROVERSIAL",
        "question": "Your partner suddenly gets hotter, but they were mid when you met them.",
        "options": [
            "Good for them! Glow-ups are great",
            "Get hotter too, just to stay ahead",
            "Start getting jealous when people notice them",
            "Assume they’re about to leave me and plan my revenge"
        ]
    },
    {
        "category": "RELATIONSHIP",
        "question": "You find out your partner used to have a crush on your friend.",
        "options": [
            "The past is the past, I don’t care",
            "Ask subtle questions about it but act like I’m chill",
            "Start complimenting their friend a little too much",
            "Secretly wait for my friend to mess up so I can bring it up"
        ]
    }

]

//FISHER-YATES ALGORITHM
function randomizeQuestions(questionArray){
    for(let i = questionArray.length-1; i>0; i--){
        const random = Math.floor(Math.random() * (i +1));
        [questionArray[i], questionArray[random]] = [questionArray[random],questionArray[i]]
    }
        return questionArray
}
function matchCriteria(userAnswers, characterCriteria) {
    let matchCount = 0;
    for (const key in characterCriteria) {
        if (userAnswers[key] === characterCriteria[key]) {
            matchCount++;
        }
    }
    return matchCount;
}
function getRedFlag(req,res){
    const matchCountPairs = daterType.map((character)=>{
        const matchScore =  matchCriteria(req,character.criteria)
        return {character:character.name, matchScore}
    })
    const maxMatchScore = Math.max(...matchCountPairs.map((item)=>(item.matchScore)))
    const redFlagObject = matchCountPairs.find((match)=>match.matchScore === maxMatchScore)
    console.log(redFlagObject.character)
    return res.json(redFlagObject.character);

}

   const shuffledQuestions = randomizeQuestions(datingQuestions)


questionsRouter.get("/", (req,res)=>{
    res.json(shuffledQuestions)
})
questionsRouter.post("/dater-type", (req,res)=>{
    getRedFlag(req, res)
})

questionsRouter.post("/", (req,res)=>{
    res.json(datingQuestions)
})


module.exports = questionsRouter