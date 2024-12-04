import React from 'react'
import { Text } from '../../../ui'

type HeaderSectionProps = {
    title: string | undefined;
    industry: string | undefined;
    duration: string | undefined;
    segment: string | undefined;
    imgUrl: string | undefined;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({title, industry, segment, duration, imgUrl}) => {
  return (
    <section className="py-[120px]  flex flex-col gap-[47px] px-[80px] msm:px-[80px] border border-red-700">
       <Text
       variant='h3'
       fontWeight='medium'
       fontFamily='gambetta'
       color='af-dark-green'
       align='center'
       >
        {title}
       </Text>

        <div className=" w-full h-[500px]">
            <img src={imgUrl} alt="" className="w-full h-full"/>
        </div>

        <div className="w-full flex justify-center px-[220px] max-w-[1500px] border border-blue-700 msm:px-5">
            <table className="w-full">
                <tbody>
                    <tr className="text-[20px] font-proxima-nova font-normal text-[#999590]">
                        <td>Industry</td>
                        <td className="pl-[156px]">Services</td>
                        <td className="pl-[156px]">Project Timeline</td>
                    </tr>
                    <tr className="text-[24px] font-proxima-nova text-[#11240F] font-normal">
                        <td>{industry}</td>
                        <td className="pl-[156px]">{segment} Implementation</td>
                        <td className="pl-[156px]">{duration}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}

export { HeaderSection }
