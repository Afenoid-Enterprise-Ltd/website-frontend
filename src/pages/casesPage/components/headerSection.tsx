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
    <section className="py-[120px]  flex flex-col gap-[47px] px-[80px] msm:px-6 msm:py-[37px] msm:gap-[27px]">
       <Text
       variant='h3'
       fontWeight='medium'
       fontFamily='gambetta'
       color='af-dark-green'
       align='center'
       >
        {title}
       </Text>

        <div className=" w-full h-[500px] msm:h-[234px]">
            <img src={imgUrl} alt={title} className="w-full h-full object-cover"/>
        </div>

        <div className="w-full flex justify-center px-[220px] max-w-[1500px] msm:px-5">
            <table className="w-full">
                <tbody>
                    <tr className="text-[20px] font-proxima-nova font-normal text-[#999590] msm:text-[12px]">
                        <td>Industry</td>
                        <td className="pl-[156px] msm:pl-[31px]">Services</td>
                        <td className="pl-[156px] msm:pl-[31px] msm:w-full">Project Timeline</td>
                    </tr>
                    <tr className="text-[24px] font-proxima-nova text-[#11240F] font-normal msm:text-[12px]">
                        <td>{industry}</td>
                        <td className="pl-[156px] msm:pl-[31px]">{segment} Implementation</td>
                        <td className="pl-[156px] msm:pl-[31px]">{duration}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}

export { HeaderSection }
