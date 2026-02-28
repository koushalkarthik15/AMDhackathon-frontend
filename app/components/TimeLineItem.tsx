type Activity = {
  name: string;
  startTime: string;
  endTime: string;
  duration: number;
  category: string;
  description?: string;
};

type TimelineItemProps = {
  activity: Activity;
};

export default function TimelineItem({ activity }: TimelineItemProps) {
  return (
    <div className="space-y-6 relative">
      <div className="relative pl-10">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-200"></div>

        <div className="absolute left-2 top-2 w-4 h-4 bg-purple-600 rounded-full border-2 border-white shadow"></div>

        <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
          <div className="font-semibold text-gray-800">{activity.name}</div>

          <div className="text-sm text-gray-500">
            {activity.startTime} – {activity.endTime}
          </div>

          {activity.description && (
            <div className="text-xs text-gray-400 mt-1">
              {activity.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
