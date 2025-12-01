const features = [
  "Deploy APIs and Microservices with ease",
  "Manage traffic with powerful gateways",
  "Monitor performance in real-time",
];

export default function SideComponent() {
  return (
    <div className="rounded-l-sm w-fit px-4 py-8 signup-heading">
      {/* <div className="flex justify-start items-center">
        <img
          className="h-20 items-start"
          src="veloxlogo.svg"
          alt="velox logo"
        />
        <h1 className="font-bold text-slate-300 italic text-left text-4xl py-2 z-10 p-4">
          Velox
        </h1>
      </div> */}
      <p className="text-3xl text-left text-white">
        The unified platform for APIs
      </p>
      <p className="text-sm pt-2 pb-8 font-medium text-gray-300">
        Velox is the fastest way to deploy and manage API, Microsevices and
        gateways.
      </p>
      {features.map((feature) => {
        return (
          <div className="flex gap-2 pt-4 items-center" key={feature}>
            <div>
              <img src="check.svg" alt="check icon" className="size-5" />
            </div>
            <p className="text-lg text-white font-normal">{feature}</p>
          </div>
        );
      })}
      <div className="pt-10">
        <p className="text-gray-300 font-normal text-lg italic">Loved by developers, trusted by enterprises</p> 
        <img className="pt-4" src="customerlogos.svg" alt="customer logos" />
      </div>
    </div>
  );
}
