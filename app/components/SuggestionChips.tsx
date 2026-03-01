type Props = {
  suggestions: string[];
  onClick: (msg: string) => void;
};

export default function SuggestionChips({ suggestions, onClick }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {suggestions.map((s, idx) => (
        <button
          key={idx}
          onClick={() => onClick(s)}
          className="
    bg-gray-100 hover:bg-purple-100
    text-gray-700 hover:text-blue-700
    px-3 py-1 rounded-full text-sm
    transition-all duration-200
  "
        >
          {s}
        </button>
      ))}
    </div>
  );
}
