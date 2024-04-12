import silver from "../../assets/subscriptions/medal-silver.svg"
import green_check from "../../assets/subscriptions/green_check.svg"
import red_x from "../../assets/subscriptions/red_x.svg"
import { useState } from "react"
import axios from "axios"

const SubCheckoutSilver = () => {

    const [form, setForm] = useState({
        sconto: "",
    })

    const handleInput = (s) => {
        const { name, value } = s.target;

        setForm((form) => ({ ...form, [name]: value }))
    }

    const handleSubmit = async (s) => {
        s.preventDefault();

        try {
            const results = await axios({
                url: "{--//ANCHOR - inserire url per lo sconto}",
                method: "POST",
                data: form
            });

        } catch (err) {
            console.error(err);
        }
    }


    return (
        <>
            <div className="flex justify-center h-screen">
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col items-center border-2 rounded-3xl border-none w-[250px] h-[400px] shadow-md bg-white mt-2 ">
                        <img
                            src={silver}
                            alt="medals"
                            className="w-[120px] h-[120px] self-center"
                        />
                        <p className="text-2xl italic self-center">Premium</p>
                        <div className="flex flex-col items-center justify-between mt-5">
                            <p>Gestionale dell'applicazione</p>
                            <img src={green_check} alt="green_check" className="w-[30px] h-[30px]" />
                        </div>
                        <div className="flex flex-col items-center">
                            <p>Pubblicità</p>
                            <img src={green_check} alt="green_check" className="w-[30px] h-[30px]" />
                        </div>
                        <div className="flex flex-col items-center">
                            <p>Sponsorizzazioni eventi</p>
                            <img
                                src={red_x}
                                alt="red_x"
                                className="w-[30px] h-[30px]"
                            />
                        </div>
                    </div>

                    <div className="w-1/3 ml-8">
                        <h3 className="font-semibold text-xl">Gestionale dell'applicazione</h3>
                        <ul className="list-disc ">
                            <li>Controllo oraganizzazione eventi;</li>
                            <li>Calendario con eventi e prenotazioni programmati;</li>
                            <li>Monitoraggio delle transazioni;</li>
                        </ul>

                        <hr />
                        <h3 className="font-semibold text-xl">Pubblicità</h3>
                        <ul className="list-disc">
                            <li>I tuoi eventi e la tua azienda verranno pubblicizzati nella nostra piattaforma;</li>
                        </ul>

                    </div>



                    <div className="flex flex-col items-center border-2 rounded-3xl border-none w-[250px] h-[400px] shadow-md bg-white mt-2 ">
                        <img
                            src={silver}
                            alt="medals"
                            className="w-[120px] h-[120px] self-center"
                        />
                        <p className="text-2xl italic self-center">Premium</p>
                            <label className="font-semibold text-md" for="sconto">Codice sconto</label>
                        <form className="flex flex-row justify-center items-center " onSubmit={handleSubmit} >
                            <input className="border-2 border-black w-2/3 mr-2 mb-2 placeholder-shown:border-gray-500 ..." placeholder="000-000-000" type="text" id="sconto" name="sconto" onInput={handleInput} value={form.sconto} />
                            <button className="font-semibold text-sm border-black rounded-2xl w-16 bg-c_button hover:shadow font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300" type="submit">Invia</button>
                        </form>
                        <button className="flex flex-row justify-center items-center mt-2 hover:shadow bg-c_button rounded-full px-5 h-8 h-max w-max font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
                            <p className="p-2">Abbonati</p> {/* Link per il checkout silver */}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SubCheckoutSilver;