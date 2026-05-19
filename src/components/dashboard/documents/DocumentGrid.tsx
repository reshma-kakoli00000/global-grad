import DocumentCard from './DocumentCard';
import UploadCard from './UploadCard';
import DraftCard from './DraftCard';

import { documents } from './data';

export default function DocumentGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
      
      {documents.map((doc) => (
        <DocumentCard
          key={doc.title}
          {...doc}
        />
      ))}

      <DraftCard />

      <UploadCard />
    </div>
  );
}