const express = require("express")
const PORT =8000
const app = express()
const cors = require('cors');
const questionRoute = require('./questions/DatingQuestions')


app.use(cors());
app.use(express.json());


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

 // const daterType=[
 //     {
 //         name: "Chill Lover",
 //         description:"Effortless, secure, and drama-free. You don’t overthink, you don’t stress, and your energy is top-tier. Just make sure you’re not so chill that people think you don’t care.",
 //         criteria: {chillAns: "A", deluluAns: "A", redFlagAns: "A" , difficultAs:"A"}
 //     },
 //     {
 //         name: "Delulu lover",
 //         description:"You mean well, but dating feels like a puzzle you can’t quite solve. Your heart is in the right place, but your decisions? Questionable. You need better strategies if you want love to last",
 //         criteria: {chillAns: "B", deluluAns: "B", redFlagAns: "C" , difficultAs:"D"}
 //     },
 //     {
 //         name: "Walking Red Flag",
 //         description:"Your toxic energy is magnetic, and honestly, people love the drama. You bring passion, excitement, and chaos, but at what cost? Relationships shouldn’t feel like a reality show.",
 //         criteria: {chillAns: "C", deluluAns: "C", redFlagAns: "C" , difficultAs:"C"}
 //     },
 //     {
 //         name: "Difficult to Date",
 //         description:"You’re mean-spirited and, frankly, you need this time to heal instead of looking for a partner. Your standards aren’t high—they’re unreasonable. Love is not a battlefield, but you treat it like one",
 //         criteria: {chillAns: "D", deluluAns: "D", redFlagAns: "D" , difficultAs:"D"}
 //     },
 // ]


const userAnswers = {
    situational: "C",
    financial: "B",
    sexAndKink: "C",
    friends: "A",
    morals: "C"
};

let matchScoreArray = []
let matchCountPairs =[]

// function matchCriteria(userAnswers, characterCriteria) {
//     let matchCount = 0;
//     for (const key in characterCriteria) {
//         if (userAnswers[key] === characterCriteria[key]) {
//             matchCount++;
//         }
//     }
//     return matchCount;
// }
//
// function getRedFlag(){
//     const matchCountPairs = daterType.map((character)=>{
//         const matchScore =  matchCriteria(userAnswers,character.criteria)
//         return {character:character.name, matchScore}
//     })
//     const maxMatchScore = Math.max(...matchCountPairs.map((item)=>(item.matchScore)))
//     const redFlagObject = matchCountPairs.find((match)=>match.matchScore === maxMatchScore)
//     console.log(redFlagObject.character)
//     return redFlagObject.character
// }

app.use("/questions",questionRoute)


app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.listen(PORT, ()=>{
    console.log(`Server started successfully at http://localhost:${PORT}`)
})