import PipelineColumn from './PipelineColumn';
import { applicationStages } from './data';

export default function PipelineBoard() {
  return (
    <div className="h-full overflow-x-auto overflow-y-hidden pb-6">
      <div className="flex gap-6 min-w-max h-full">
        {applicationStages.map((stage) => (
          <PipelineColumn
            key={stage.title}
            title={stage.title}
            count={stage.count}
            color={stage.color}
            applications={stage.applications}
          />
        ))}
      </div>
    </div>
  );
}