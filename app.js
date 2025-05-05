const express = require("express")
const PORT =8000
const app = express()


const redFlags = [
    {
        name: "The Main Character in a Hallucination",
        description:"You imagined a whole relationship off one eye contact and a follow back. You’re dating in your head. Reality isn’t invited.",
        criteria: { situational: "A", financial: "A", sexAndKink: "A" , friends:"A", morals:"A"}
    },
    {
        name: "The Soft Launch Addict",
        description: "You post their elbow, their dog, and the back of their head — but never their face. Relationships are temporary. Vibes are forever.",
        criteria: { situational: "B", financial: "B", sexAndKink: "B" , friends:"B", morals:"B"}
    },
    {
        name: "The Situationship Scholar",
        description: "You write full essays about “almosts” who were never yours. You’re dating vibes, not people. And it shows.",
        criteria: { situational: "C", financial: "C", sexAndKink: "C" , friends:"C", morals:"C"}
    },
    {
        name: "The Ghost & Go",
        description: "You flirt like it’s your job, then vanish like it never happened. You love the chase. Hate the convo.",
        criteria: { situational: "D", financial: "D", sexAndKink: "D" , friends:"D", morals:"D"}
    },
    {
        name: "The Exit Strategist",
        description: "You post their elbow, their dog, and the back of their head — but never their face. Relationships are temporary. Vibes are forever.",
        criteria: { situational: "E", financial: "E", sexAndKink: "E" , friends:"E", morals:"E"}
    },
];


const userAnswers = {
    situational: "C",
    financial: "B",
    sexAndKink: "C",
    friends: "A",
    morals: "C"
};

let matchScoreArray = []
let matchCountPairs =[]

function matchCriteria(userAnswers, characterCriteria) {
    let matchCount = 0;
    for (const key in characterCriteria) {
        if (userAnswers[key] === characterCriteria[key]) {
            matchCount++;
        }
    }
    return matchCount;
}
function getRedFlag(){
    const matchCountPairs = redFlags.map((character)=>{
        const matchScore =  matchCriteria(userAnswers,character.criteria)
        return {character:character.name, matchScore}
    })
    const maxMatchScore = Math.max(...matchCountPairs.map((item)=>(item.matchScore)))
    const redFlagObject = matchCountPairs.find((match)=>match.matchScore === maxMatchScore)
    console.log(redFlagObject.character)
    return redFlagObject.character
}
getRedFlag()

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.listen(PORT, ()=>{
    console.log(`Server started successfully at http://localhost:${PORT}`)
})