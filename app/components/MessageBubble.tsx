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
              ? "bg-blue-600 text-black rounded-br-md"
              : "bg-black-100 text-black-800 rounded-bl-md"
          }
        `}
      >
        {text}
      </div>
    </div>
  );
}
