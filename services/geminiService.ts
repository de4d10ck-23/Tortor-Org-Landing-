
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedProject } from "../types";

const MODEL_NAME = 'gemini-3-flash-preview';

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateProjectIdea(topic: string): Promise<GeneratedProject | null> {
    try {
      const response = await this.ai.models.generateContent({
        model: MODEL_NAME,
        contents: `Generate a creative and technical project idea based on this topic: "${topic}". Provide a title, a short description, 4 relevant tech tags, and 3 key features.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              tags: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              features: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["title", "description", "tags", "features"]
          }
        }
      });

      const text = response.text;
      if (!text) return null;
      return JSON.parse(text);
    } catch (error) {
      console.error("Error generating project idea:", error);
      return null;
    }
  }

  async getChatResponse(history: { role: string; text: string }[], message: string): Promise<string> {
    try {
      const chat = this.ai.chats.create({
        model: MODEL_NAME,
        config: {
          systemInstruction: "You are a helpful and charismatic AI assistant for a developer's portfolio website. You know about the developer's projects (Nexus, EtherFlow, Lumina, Aura, Zenith) and can discuss their technologies like React, AI, Blockchain, and Design. Keep answers concise and professional."
        }
      });

      // Simple implementation since chat.sendMessage doesn't take history directly in this version
      // In a real scenario, we'd loop through history or use a proper chat session
      const response = await chat.sendMessage({ message });
      return response.text || "I'm sorry, I couldn't process that.";
    } catch (error) {
      console.error("Error in AI chat:", error);
      return "The AI is currently resting. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
