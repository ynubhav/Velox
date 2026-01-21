export function AddRouteSection() {
  return (
    <section className="border rounded-lg p-6 space-y-4 bg-slate-50">
      <h2 className="font-medium text-slate-900">
        Add New Route
      </h2>

      <div className="grid grid-cols-2 gap-4 max-w-3xl">
        <select className="input">
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>PATCH</option>
          <option>DELETE</option>
        </select>

        <input
          placeholder="/api/example"
          className="input font-mono"
        />

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Auth Required
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Enable Cache
        </label>

        <input
          type="number"
          placeholder="cache TTL (in seconds)"
          className="input"
        />
      </div>

      <button className="btn-primary">
        Add Route
      </button>
    </section>
  );
}
