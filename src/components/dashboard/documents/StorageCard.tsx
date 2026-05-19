export default function StorageCard() {
  return (
    <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
      <p className="uppercase tracking-wide text-sm text-gray-400 font-bold mb-6">
        Vault Storage
      </p>

      <div className="flex items-end gap-3 mb-5">
        <h2 className="text-5xl font-bold text-gray-900">
          1.2 GB
        </h2>

        <span className="text-gray-500 mb-2">
          of 5 GB
        </span>
      </div>

      <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-5">
        <div
          className="h-full rounded-full bg-[#0B4EA2]"
          style={{ width: '28%' }}
        />
      </div>

      <p className="text-gray-500 leading-relaxed">
        Upgrade to Premium for unlimited storage and encrypted backups.
      </p>
    </div>
  );
}