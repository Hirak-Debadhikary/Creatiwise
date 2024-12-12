import Footer from "./components/Footer";
import FreeTrial from "./components/FreeTrial";
import HealthcareInbox from "./components/HealthcareInbox";
import { Hero } from "./components/Hero";
import { InboxComponent } from "./components/InboxComponent";
import { Navbar } from "./components/navbar";
import ReviewCard from "./components/ReviewCard";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />

      {/* Main Container with Gradient Background */}
      <div className="relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#87CEFA] via-blue-500 to-[#2A0896] transform skew-y-6 animate-gradient" />

        {/* Main Content with Shadow and White Background */}
        <div className="relative flex h-[70vh] w-[70%] m-auto mb-10 rounded-xl overflow-hidden shadow-lg bg-white">
          <Sidebar />
          <InboxComponent />
        </div>
      </div>

      <ReviewCard />
      <HealthcareInbox />
      <FreeTrial />
      <Footer />
    </main>
  );
}

export default App;
