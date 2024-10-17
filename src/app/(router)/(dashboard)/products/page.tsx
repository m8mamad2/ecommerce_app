import InteridiousProductSection from "./components/InteridiousProductSection";
import MostSearchSection from "./components/MostSearchSection";
import InstallableProductsSection from "./components/InstallableProductsSection";
import ProductSection from "./components/ProductSection";

export default function ProductsPage(){

    return (
        <div className="mx-10 my-4">
            
            <InteridiousProductSection />

            <MostSearchSection />

            <InstallableProductsSection />

            <ProductSection />

        </div>
    );
}