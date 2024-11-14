import SectionTitle from "../../components/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="产品中心"
            paragraph="系統不只是音箱，實際上還包括 系統構件；音箱、電子設備、機械附件和中央控制及監視遠程網絡都經過精心整合及互相匹配。只有使用由同壹制造商制造的完整系統，才能確保音響和機械兼容性，從而使系統不僅可提供中性音質，而且具有模組化、操作方便和完全可靠的特點。各單獨系統都是自我獨立的個體。這個優點及其相互兼容性可確保在可擴展場所配置的方便性。"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
