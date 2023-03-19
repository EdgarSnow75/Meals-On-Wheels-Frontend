import { useState } from "react";
import CaretakerTable from "./CaretakerTable";
import MemberTable from "./MemberTable";
import PartnerTable from "./PartnerTable";
import VolunteerTable from "./VolunteerTable";

const AdminUserControl = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const tabs = [
    { label: "Member", component: <MemberTable /> },
    { label: "Caretaker", component: <CaretakerTable /> },
    { label: "Partner", component: <PartnerTable /> },
    { label: "Volunteer", component: <VolunteerTable /> },
  ];
  return (
    <div>
      <div className="flex flex-col items-center text-4xl">
        <div className="tab-list mb-4 text-4xl">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={
                activeTab === tabs.indexOf(tab)
                  ? "tab tab-lifted tab-active text-2xl"
                  : "tab tab-lifted text-2xl"
              }
              onClick={() => handleTabClick(tabs.indexOf(tab))}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className="tab-content">{tabs[activeTab].component}</div>
      </div>
    </div>
  );
};
export default AdminUserControl;
