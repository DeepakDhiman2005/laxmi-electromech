import "./gallery.scss";
import GalleryCard from "../cards/GalleryCard";

const GallerySection = () => {
    return (
        <>
            <section class="my-section  product-gallery py-2 px-4 md:px-8">

                <div class="container-fluid">
                    <div class="row">
                        <div class="grid-wrapper">

                            <div class="grid-box">
                                <div className="product-gallery-text w-full min-w-0">
                                    <div className="h2-wrapper">
                                        <h2>
                                            <span className="font-semibold text-[25px] leading-tight">
                                                Laxmi Electromech Pvt. Ltd.
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>


                            <div class="grid-box wide">
                                <GalleryCard
                                    image="/images/plc-control-image.png"
                                    href="/category/electrical-automation/plc-control-panel"
                                    title="PLC Control Panel"
                                    className="w-full h-auto"
                                    description="A PLC Control Panel is a key part of industrial automation, combining PLC hardware with electrical components to efficiently control machines and processes, minimizing manual work and boosting productivity."
                                />
                            </div>

                            <div class="grid-box">
                                <GalleryCard
                                    image="/images/laxmi-services/electrical-control-panel-2.jpg"
                                    href="/category/electrical-automation/electrical-control-panel"
                                    title="Electrical Control Panel"
                                    className="w-full h-auto"
                                    description="An Electrical Control Panel regulates and manages power distribution, automation, and control in industrial and commercial systems."
                                />
                            </div>
                            <div class="grid-box tall">

                                <GalleryCard
                                    image="/images/laxmi-services/motor-control-panel.jpg"
                                    href="/category/electrical-automation/motor-control-centre"
                                    title="Motor Control Centre (MCC)"
                                    className="w-full h-auto"
                                    description="A Motor Control Centre (MCC) centrally controls multiple motors, enhancing efficiency and safety in industrial systems."
                                />
                            </div>
                            <div class="grid-box wide">
                                <GalleryCard
                                    image="/images/laxmi-services/hmi-touch-panel-image.jpg"
                                    href="/category/electrical-automation/hmi-touch-panel"
                                    title="HMI Touch Panel"
                                    className="w-full h-auto"
                                    description="An HMI Touch Panel enables operators to interact with industrial automation systems through a user-friendly interface."
                                />
                            </div>

                            <div class="grid-box tall">
                                <GalleryCard
                                    image="/images/laxmi-services/automation-control-panel-2.jpg"
                                    href="/category/electrical-automation/automation-control-panel"
                                    title="Automation Control Panel"
                                    className="w-full h-auto"
                                    description="An Automation Control Panel efficiently manages machinery, processes, and equipment in industrial and commercial automation systems."
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GallerySection;