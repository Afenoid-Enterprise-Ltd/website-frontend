import { Text } from '../../../ui'
import Fintech from "../../../assets/fintech1.png"

const HeaderSection = () => {
  return (
    <section className="py-[120px] px-[80px] flex flex-col items-center gap-[47px]">
       <Text
       variant='h3'
       fontWeight='medium'
       fontFamily='gambetta'
       color='af-dark-green'
       align='center'
       >
        Fintech Payment Processing
       </Text>

        <div className="w-[1280px] h-[400px]">
            <img src={Fintech} alt="" className="w-full h-full"/>
        </div>

        <div className="w-full flex justify-center px-[220px]">
            <table className="w-full">
                <tr className="text-[20px] font-proxima-nova font-normal text-[#999590]">
                    <td>Industry</td>
                    <td className="pl-[156px]">Services</td>
                    <td className="pl-[156px]">Project Timeline</td>
                </tr>
                <tr className="text-[24px] font-proxima-nova text-[#11240F] font-normal">
                    <td>Fintech</td>
                    <td className="pl-[156px]">ISO 27001 Implementation</td>
                    <td className="pl-[156px]">12 weeks</td>
                </tr>
            </table>
        </div>
    </section>
  )
}

export { HeaderSection }
