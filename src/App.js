import React, { useState } from "react";
import EditableOptions from "./components/EditableOptions";
import FormPreview from "./components/FormPreview";
import EditableWelcomeOptions from "./components/EditableWelcomeOptions";
import WelcomePreview from "./components/WelcomePreview";

function App() {
  const [activeSection, setActiveSection] = useState("welcome");
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [welcomeData, setWelcomeData] = useState({
    heading: "Welcome to the form",
    description: "This is a sample form",
    buttonLabel: "Get Started",
  });
  const [emailData, setEmailData] = useState({
    title: "Enter Your Email",
    description: "Please provide your email for further updates.",
    email: "",
  });

  const [uploadedImage, setUploadedImage] = useState(null); // Store uploaded image

  const handleWelcomeChange = (newData) => setWelcomeData(newData);
  const handleEmailChange = (newData) => setEmailData(newData);
  const handleImageChange = (newImage) => setUploadedImage(newImage); // Handle image update

  const openSideNav = (section) => {
    setActiveSection(section);
    setIsSideNavOpen(true);
  };

  const closeSideNav = () => setIsSideNavOpen(false);

  return (
    <div className="relative flex h-screen">
      <div className="w-1/4 bg-light p-4">
        <h2 className="h5 mb-4">Sections</h2>
        <button
          className={`w-100 mb-4 p-2 ${
            activeSection === "welcome" ? "btn btn-primary" : "btn btn-light"
          }`}
          onClick={() => openSideNav("welcome")}
        >
          Welcome Page
        </button>
        <button
          className={`w-100 mb-4 p-2 ${
            activeSection === "email" ? "btn btn-primary" : "btn btn-light"
          }`}
          onClick={() => openSideNav("email")}
        >
          Email
        </button>
      </div>

      <div className="w-3/4 p-4 border-start">
        {activeSection === "welcome" && (
          <WelcomePreview data={welcomeData} image={uploadedImage} />
        )}
        {activeSection === "email" && <FormPreview data={emailData} />}
      </div>

      {isSideNavOpen && (
        <div className="fixed top-0 left-0 h-full w-25 bg-white shadow-lg transition-transform z-50">
          <div className="d-flex justify-content-between p-4 border-bottom">
            <h2 className="h5">
              {activeSection === "welcome"
                ? "Welcome Page Options"
                : "Email Options"}
            </h2>
            <button onClick={closeSideNav} className="btn btn-danger">
              Close
            </button>
          </div>

          <div className="p-4">
            {activeSection === "welcome" && (
              <EditableWelcomeOptions
                data={welcomeData}
                onWelcomeChange={handleWelcomeChange}
                onImageChange={handleImageChange} // Pass the handler for image change
              />
            )}
            {activeSection === "email" && (
              <EditableOptions
                data={emailData}
                onEmailChange={handleEmailChange}
              />
            )}
          </div>
        </div>
      )}

      {isSideNavOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={closeSideNav}
        ></div>
      )}
    </div>
  );
}

export default App;
