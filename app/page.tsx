"use client";

import { useRef, useState } from "react";
import ChatPanel from "./components/chatPanel";
import PlanPanel from "./components/PlanPanel";
type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  text: string;
};

export default function Home() {
  const sessionId = useRef(crypto.randomUUID());

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [plan, setPlan] = useState(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(message: string) {
    if (!message) return;

    setMessages((prev) => [...prev, { role: "user", text: message }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: sessionId.current,
          message,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.chatReply },
      ]);

      setSuggestions(data.suggestions || []);
      setPlan(data.plan || null);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div className="h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-[1fr_1.3fr] gap-6 h-full">
        <ChatPanel
          messages={messages}
          suggestions={suggestions}
          input={input}
          setInput={setInput}
          onSend={sendMessage}
          loading={loading}
        />

        <PlanPanel plan={plan || null} />
      </div>
    </div>
  );
}
