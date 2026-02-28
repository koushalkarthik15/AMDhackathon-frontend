type MessageBubbleProps = {
  role: "user" | "assistant";
  text: string;
};

export default function MessageBubble({ role, text }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-xs px-4 py-2 rounded-2xl text-sm
          ${
            isUser
              ? "bg-purple-600 text-white rounded-br-md"
              : "bg-gray-100 text-gray-800 rounded-bl-md"
          }
        `}
      >
        {text}
      </div>
    </div>
  );
}
