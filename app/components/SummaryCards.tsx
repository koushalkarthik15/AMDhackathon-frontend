type Plan = {
  estimatedCost: number;
  totalDistanceKm: number;
  accessibility: {
    wheelchairAccessible: boolean;
  };
  reasoning: string[];
};

type Props = {
  plan: Plan;
};

export default function SummaryCards({ plan }: Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
          <div className="text-gray-500 text-sm">Estimated Cost</div>
          <div className="text-lg font-semibold text-gray-800">
            ₹{plan.estimatedCost}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <div className="text-gray-500 text-sm">Distance</div>
          <div className="text-lg text-black font-semibold">
            {plan.totalDistanceKm} km total walking
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-4">
        <div className="text-gray-500 text-sm mb-2">
          Accessibility & Reasoning
        </div>

        <div className="text-sm text-gray-600">
          {plan.accessibility && plan.accessibility.wheelchairAccessible}
        </div>

        <ul className="mt-2 list-disc list-inside text-sm text-gray-500">
          {Array.isArray(plan.reasoning) &&
            plan.reasoning.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
    </>
  );
}
