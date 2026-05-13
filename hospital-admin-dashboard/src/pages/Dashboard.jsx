import StatsCard from "../components/ui/StatsCard";
import Button from "../components/ui/Button";

function Dashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Welcome Admin 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor hospital activities and reports.
          </p>
        </div>

        <Button title="Add Patient" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatsCard title="Total Patients" value="1,250" />
        <StatsCard title="Doctors" value="85" />
        <StatsCard title="Appointments" value="320" />
        <StatsCard title="Revenue" value="$25K" />
      </div>
    </div>
  );
}

export default Dashboard;
