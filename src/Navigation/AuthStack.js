//import liraries
import React from "react";
import { CsvUpload, Offers, ProductListing } from "../Screens";
import NavigationStrings from "./NavigationStrings";

// create a component
const AuthStack = (Stack) => {
  return (
    <>
      <Stack.Screen name={NavigationStrings.CSV_UPLOAD} component={CsvUpload} />
    </>
  );
};

//make this component available to the app
export default AuthStack;
