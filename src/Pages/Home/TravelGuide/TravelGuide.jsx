import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "../../../Components/Overview/Overview";
import OurPackages from "../../../Components/OurPackages/OurPackages";
import OurGuides from "../../../Components/OurGuides/OurGuides";

const TravelGuide = () => {
  const [tabIndex, setTabIndex] = useState(2);
  return (
    <div className="mx-20 my-16">
      <Tabs
        dir="rtl"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <div className="flex flex-row-reverse justify-between mb-8">
          <h2 className="text-4xl font-bold">Tourism and Travel Guide</h2>
          <TabList dir="rtl" className="border-0">
            <Tab><h3 className="font-semibold">Meet Our Tour Guides</h3></Tab>
            <Tab><h3 className="font-semibold">Overview</h3></Tab>
            <Tab><h3 className="font-semibold">Our Packages</h3></Tab>
          </TabList>
        </div>

        <TabPanel dir="ltr">
          <OurGuides></OurGuides>
        </TabPanel>
        <TabPanel dir="ltr">
          <Overview></Overview>
        </TabPanel>
        <TabPanel dir="ltr">
          <OurPackages></OurPackages>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TravelGuide;
