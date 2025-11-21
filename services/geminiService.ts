import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PLANS, SYSTEM_INSTRUCTION, FEATURES, LINKS } from "../constants";

// Helper to format context for the AI
const getContext = () => {
  const planSummary = PLANS.map(p => `${p.name} (${p.type}): ${p.price}, ${p.ram} RAM`).join('\n');
  const linkSummary = `Billing: ${LINKS.billing}, Panel: ${LINKS.panel}, Discord: ${LINKS.discord}`;
  return `
    Available Plans:
    ${planSummary}
    
    Important Links:
    ${linkSummary}
  `;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "I'm sorry, my brain (API Key) is missing. Please contact the administrator.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // We use gemini-2.5-flash for speed in a chat widget context
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION + "\nContext Data:\n" + getContext(),
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't generate a response right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the server mainframe. Please try again later.";
  }
};