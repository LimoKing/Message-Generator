//Create random number
function randomNumber(num)
{
    return Math.floor(Math.random() * num);
}

//List of sentence
const sentence = {
    sign: ["aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra", 
    "escorpio", "sagitario", "capricornio", "acuario", "piscis"],
    luck: ["bad luck", "good luck", "a terrible luck", "good fortune"],
    advice: ["run away little girl, run away", "better pay your debts", "please go and sleep", "Just stop", 
    "just die", "live your life", "stop complain", "find another job", "stfu"]
}

//An array so we can put everything togheter
let message = [];

//Decide the message
for (let typeOfSentence in sentence)
{
    //Find the index for the type of sentence
    let option = randomNumber(sentence[typeOfSentence].length);

    //Find the sentence
    switch(typeOfSentence)
    {
        case "sign":
            message.push(`Your sign is: ${sentence[typeOfSentence][option]}`);
            break;
        case "luck":
            message.push(`you have: ${sentence[typeOfSentence][option]}`);
            break;
        case "advice":
            message.push(`Your advice: ${sentence[typeOfSentence][option]}`);
            break;
    }
}

//Time to put everything togheter and gave the user his message
function giveMessage(message)
{
    //put everything togheter
    const finalMessage = message.join("\n");
    console.log(finalMessage);
}

//print on screen the message
giveMessage(message);