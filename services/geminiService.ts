import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key is available to avoid errors during static analysis if env is missing
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateEditedImage = async (
    imageBase64: string, 
    prompt: string
): Promise<string> => {
    if (!ai) throw new Error("API Key not found");

    // Remove header if present (data:image/png;base64,)
    const cleanBase64 = imageBase64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    {
                        text: prompt
                    },
                    {
                        inlineData: {
                            mimeType: 'image/png', // Assuming PNG or generic image handling
                            data: cleanBase64
                        }
                    }
                ]
            }
        });

        // The model returns the generated image in the response parts
        // Iterate to find inlineData
        const parts = response.candidates?.[0]?.content?.parts;
        if (parts) {
            for (const part of parts) {
                if (part.inlineData && part.inlineData.data) {
                    return `data:image/png;base64,${part.inlineData.data}`;
                }
            }
        }
        
        throw new Error("No image generated.");
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw error;
    }
};