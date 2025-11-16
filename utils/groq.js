import Groq from "groq-sdk";

export const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function askGroq(prompt) {
  try {
    const res = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",   // fastest + always available
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    return res.choices[0].message.content;
  } catch (err) {
    console.error("🔥 GROQ FULL ERROR:", JSON.stringify(err, null, 2));
    return "⚠️ Elesha is unavailable right now.";
  }

}
