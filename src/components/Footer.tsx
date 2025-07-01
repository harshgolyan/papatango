import { ArrowUp } from "lucide-react";
function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <div className="flex flex-col gap-20 bg-[#C9CFD1] px-20 py-10">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <div className="font-bold text-lg">Team</div>
                        <div>Renaud Cusenier</div>
                        <div>Isabelle Paillard</div>
                        <div>Laure-Anne Graf</div>
                        <div>Jérôme Bessard</div>
                    </div>
                    <div className="text-lg font-semibold flex items-center gap-4 cursor-pointer" onClick={scrollToTop}>
                        Back to Top
                        <ArrowUp />
                    </div>
                </div>
                <div className="flex flex-col gap-4 pb-32">
                    <div className="flex justify-between items-center ">
                        <div>
                            <div className="font-semibold text-lg">Paris</div>
                            <div>128 rue du Faubourg</div>
                            <div>Poissonnière75010</div>
                            <div className="font-semibold text-lg">+33 (0)687364316</div>
                        </div>
                        <div className="flex-1 flex justify-center items-start text-[22rem] leading-[16rem] font-parastoo font-extralight uppercase">Hello</div>
                        <div>
                            <div className="font-semibold text-lg">Geneva</div>
                            <div>Chemin de Riantbosson</div>
                            <div>19/1217 Meyrin</div>
                            <div className="font-semibold text-lg">+41 (0)782505807</div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center text-[21rem] font-extralight uppercase leading-[10rem] font-parastoo">papatango</div>
                </div>
            </div>
        </>
    );
}

export default Footer;
