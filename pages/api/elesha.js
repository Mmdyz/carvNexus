import { askGroq } from "../../utils/groq";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Only POST allowed" });

  const { prompt } = req.body;

  console.log("🔥 Elesha API Called:", prompt); // ✅ now valid

  if (!prompt)
    return res.status(400).json({ error: "Missing prompt" });

  try {
    const reply = await askGroq(`
You are **Elesha**, the official CARV Nexus AI mentor.

## ⛓️ RULES (follow STRICTLY)
- "SVM" ALWAYS means **CARV SVM — Solana Virtual Machine**, the L2 chain powering CARV.
- NEVER call SVM "spatial virtual machine" or anything else.
- You specialize in CARV, SVM chain, quests, XP, dashboards, Web3 onboarding, and on-chain learning.
- Tone: futuristic, confident, friendly, concise, Web3-native.
- Avoid long rambling explanations.
- Focus on clarity + empowerment + smooth onboarding.

## USER MESSAGE:
${prompt}
`);


    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Elesha AI error:", err);
    return res.status(200).json({
      reply: "⚠️ Elesha is calibrating her neural nodes. Try again.",
    });
  }
}
