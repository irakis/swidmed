import { FC } from "react";
import { Route, Routes } from "react-router";
import { MainLayout } from "./modules/layout/layout";
import "./App.css";
import { Home } from "./modules/layout/home/home";
import { Endoscope } from "./modules/endoscope/endoscope";
import { Form } from "./modules/form/form";
import { Gastro } from "./modules/gastro/gastro";
import { Addiction } from "./modules/addiction/addiction";
import { Sexual } from "./modules/sexual/sexual";
import { Children } from "./modules/children/children";
import { Mental } from "./modules/mental/mental";
import { EndoWorkshop } from "./modules/endo_workshop/endoWorkshop";
import { Documents } from "./modules/documents/documents";
import { Contact } from "./modules/contact/contact";
import { Pricing } from "./modules/pricing/Pricing";

export const App: FC = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/endoscope_clinic" element={<Endoscope />} />
      <Route path="/gastro_clinic" element={<Gastro />} />
      <Route path="/addiction_clinic" element={<Addiction />} />
      <Route path="/sexual_clinic" element={<Sexual />} />
      <Route path="/children_clinic" element={<Children />} />
      <Route path="/mental_clinic" element={<Mental />} />
      <Route path="/endo_workshop_clinic" element={<EndoWorkshop />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/form" element={<Form />} />
    </Route>
  </Routes>
);

export default App;
