'use client';

export function GenerateKeyModal({ apiKey }: { apiKey: string }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">
        New API Key Generated
      </h2>

      <p className="text-sm text-slate-600">
        This key will only be shown once. Copy and store it securely.
      </p>

      <div className="border rounded p-3 font-mono bg-slate-50">
        {apiKey}
      </div>

      <button className="btn-primary">
        I have saved this key
      </button>
    </div>
  );
}
