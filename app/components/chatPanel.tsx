"use client";

import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import SuggestionChips from "./SuggestionChips";
type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  text: string;
};

type Props = {
  messages: ChatMessage[];
  suggestions: string[];
  input: string;
  setInput: (v: string) => void;
  onSend: (msg: string) => void;
  loading: boolean;
};

export default function ChatPanel({
  messages,
  suggestions,
  input,
  setInput,
  onSend,
  loading,
}: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md p-6 h-full">
      <h1 className="text-xl font-semibold mb-4">Planner Assistant</h1>

      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} role={msg.role} text={msg.text} />
        ))}

        {loading && (
          <div className="text-gray-400 text-sm animate-pulse">
            Planner is thinking...
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <SuggestionChips suggestions={suggestions} onClick={onSend} />

      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your preferences..."
          className="flex-1 border rounded-xl px-4 py-2"
        />
        <button
          onClick={() => onSend(input)}
          className="bg-purple-600 text-white px-4 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}
