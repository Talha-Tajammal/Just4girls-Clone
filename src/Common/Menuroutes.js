import React from "react";
import { Route } from "react-router-dom";
import FaceMakeup from "../ProductsPages/Makeup/Face";
import EyesMakeup from "../ProductsPages/Makeup/Eyes";
import LipsMakeup from "../ProductsPages/Makeup/Lips";
import BathShower from "../ProductsPages/BathBody/BathShower";
import HandFeet from "../ProductsPages/BathBody/HandFeet";
import LotionsCreams from "../ProductsPages/BathBody/LotionsCreams";
import FeminineEssentials from "../ProductsPages/BathBody/FeminineEssentials";
import Nails from "../ProductsPages/Nails/Nails";
import FaceSkincare from "../ProductsPages/Skincare/Face";
import EyesSkincare from "../ProductsPages/Skincare/Eyes";
import LipsSkincare from "../ProductsPages/Skincare/Lips";
import MiniBar from "../ProductsPages/MiniBar/MiniBar";
import Conditioner from "../ProductsPages/Hair/Conditioner";
import Shampoos from "../ProductsPages/Hair/Shampoos";
import HairCare from "../ProductsPages/Hair/HairCare";
import StylingTools from "../ProductsPages/Hair/StylingTools";
import DeodorantSpray from "../ProductsPages/Fragrances/DeodorantSpray";
import Perfumes from "../ProductsPages/Fragrances/Perfumes";
import MakeupTools from "../ProductsPages/Tools/MakeupTools";
import ManicurePedicure from "../ProductsPages/Tools/ManicurePedicure";
import Mirrors from "../ProductsPages/Tools/Mirrors";
import Organizers from "../ProductsPages/Tools/Organizers";
import Gifts from "../ProductsPages/Gifts/Gifts";
import FlashSale from "../ProductsPages/Sale/FlashSale";
import Rs399 from "../ProductsPages/Sale/Rs399";
import Rs499 from "../ProductsPages/Sale/Rs499";
import Rs599 from "../ProductsPages/Sale/Rs599";
import Rs999 from "../ProductsPages/Sale/Rs999";
import Rs1499 from "../ProductsPages/Sale/Rs1499";
import Rs2499 from "../ProductsPages/Sale/Rs2499";
import Brand from "../ProductsPages/Brand/Brand";

const Menuroutes = () => {
  return (
    <>
      <Route path="/makeup/face" element={<FaceMakeup />} />
      <Route path="/makeup/eyes" element={<EyesMakeup />} />
      <Route path="/makeup/lips" element={<LipsMakeup />} />
      <Route path="/bath-body/bath-shower" element={<BathShower />} />
      <Route path="/bath-body/hand-feet" element={<HandFeet />} />
      <Route path="/bath-body/lotions-creams" element={<LotionsCreams />} />
      <Route
        path="/bath-body/feminine-essentials"
        element={<FeminineEssentials />}
      />
      <Route path="/nails" element={<Nails />} />
      <Route path="/skincare/face" element={<FaceSkincare />} />
      <Route path="/skincare/eyes" element={<EyesSkincare />} />
      <Route path="/skincare/lips" element={<LipsSkincare />} />
      <Route path="/minibar" element={<MiniBar />} />
      <Route path="/hair/conditioner" element={<Conditioner />} />
      <Route path="/hair/shampoos" element={<Shampoos />} />
      <Route path="/hair/hair-care" element={<HairCare />} />
      <Route path="/hair/styling-tools" element={<StylingTools />} />
      <Route path="/fragrances/deodorant-spray" element={<DeodorantSpray />} />
      <Route path="/fragrances/perfumes" element={<Perfumes />} />
      <Route path="/tools/makeup-tools" element={<MakeupTools />} />
      <Route path="/tools/manicure-pedicure" element={<ManicurePedicure />} />
      <Route path="/tools/mirrors" element={<Mirrors />} />
      <Route path="/tools/organizers" element={<Organizers />} />
      <Route path="/gifts" element={<Gifts />} />
      <Route path="/sale/flash-sale" element={<FlashSale />} />
      <Route path="/sale/rs-399" element={<Rs399 />} />
      <Route path="/sale/rs-499" element={<Rs499 />} />
      <Route path="/sale/rs-599" element={<Rs599 />} />
      <Route path="/sale/rs-999" element={<Rs999 />} />
      <Route path="/sale/rs-1499" element={<Rs1499 />} />
      <Route path="/sale/rs-2499" element={<Rs2499 />} />
      <Route path="/brand" element={<Brand />} />
    </>
  );
};

export default Menuroutes;
