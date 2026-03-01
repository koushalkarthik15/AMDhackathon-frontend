import TimelineItem from "./TimeLineItem";
import SummaryCards from "./SummaryCards";

type Activity = {
  name: string;
  startTime: string;
  endTime: string;
  duration: number;
  category: string;
  description?: string;
};

type Plan = {
  status: string;
  timeWindow: string;
  estimatedCost: number;
  totalDistanceKm: number;
  activities: Activity[];
  reasoning: string[];
  accessibility: {
    wheelchairAccessible: boolean;
  };
};

type Props = {
  plan: Plan | null;
};

export default function PlanPanel({ plan }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-full overflow-y-auto">
      <h1 className="text-black font-semibold mb-4 flex items-center justify-between">
        Current Plan
        {plan && (
          <span
            className={`text-sm px-3 py-1 rounded-full ${
              plan.status === "optimized"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          ></span>
        )}
      </h1>

      {plan && (
        <>
          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <h2 className="text-sm text-gray-500 mb-4">SCHEDULE</h2>

            <div className="space-y-4">
              {plan.activities?.map((activity, idx) => (
                <TimelineItem key={idx} activity={activity} />
              ))}
            </div>
          </div>

          <SummaryCards plan={plan} />
        </>
      )}
    </div>
  );
}
