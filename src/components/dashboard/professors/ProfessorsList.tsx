import ProfessorListItem from './ProfessorListItem';
import { professors } from './data';

export default function ProfessorsList() {
  return (
    <div className="space-y-5">
      {professors.map((professor) => (
        <ProfessorListItem
          key={professor.name}
          {...professor}
        />
      ))}
    </div>
  );
}