import ServiceCard from "../../components/ui/ServiceCard";
import Title from "../../Shared/Title";
import Laminating from "../../assets/service/laminating.png"
import Printer from "../../assets/service/printer.jpg"
import Scaner from "../../assets/service/scaner.jpg"
import typing from "../../assets/service/typing.jpg"


const OurServices = () => {
    return (
      <div className="px-6 text-center flex flex-col mx-auto py-8">
        <Title
          title="Our Core Survices"
          subtitle="Our shop services are conducted by skilled people."
        ></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-auto gap-8 mt-6">
          <ServiceCard
            image={Laminating}
            title="Laminating"
            detail="ID card size 10TK, A4 site 20TK, Legal size 30Tk."
          />
          <ServiceCard
            image={Printer}
            title="Printing"
            detail="Images and documents are printed in color on A4 size paper."
          />
          <ServiceCard
            image={Scaner}
            title="Scaning"
            detail="Scanned documents are sent via email and WhatsApp.."
          />
          <ServiceCard
            image={typing}
            title="Typing"
            detail="CV, Biodata, Application, Question Paper, etc are typed in Bengali and English."
          />
        </div>
      </div>
    );
};

export default OurServices;