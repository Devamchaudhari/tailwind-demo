
import HeroSection from "feature/heroSection/container/heroSection";
import CompanyIntro from "feature/companyIntroduction/container/companyIntro";
import MarketingCompanies from "feature/marketingCompanies/container/marketingCompanies";
import CompanyServices from "feature/companyServices/container/companyServices";
import ClientTestimonialsComponent from "feature/clientTestimonials/component/clientTestimonialsComponent";

const HomePage = () => {
    return (
        <div className='w-full mx-auto'>
            <HeroSection />
            <CompanyIntro />
            <MarketingCompanies />
            <CompanyServices />
            <ClientTestimonialsComponent />
        </div>
    );
};

export default HomePage;