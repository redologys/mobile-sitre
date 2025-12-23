
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Mobile Experts AI Assistant" for a premium repair shop in Brooklyn, NY. 
Your goal is to help users diagnose common mobile phone issues (cracked screens, battery drain, water damage, software glitches) and provide a professional, helpful tone.

Context for repairs:
- iPhone Screen Repair: $80-$250 depending on model.
- Battery Replacement: $50-$90.
- Water Damage: Diagnostic required ($30 base).
- Unlocking: Starting at $40.

Always encourage visiting the store at 1134 Liberty Ave, Brooklyn. 
Keep responses concise, empathetic, and expert.
`;

export const getDiagnosticAdvice = async (userQuery: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please visit our store for a free physical diagnostic.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our diagnostic system is currently offline. Please call us at (929) 789 2786 for immediate assistance.";
  }
};
