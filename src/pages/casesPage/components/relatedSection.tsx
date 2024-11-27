import { Text } from "../../../ui"
import Fintech2 from "../../../assets/fintech2.png"
import {Link} from "react-router-dom"

const RelatedSection = () => {
    return (
    <div className="bg-[#EBEEEB] mx-auto max-w-[1280px] px-[246px] py-[50px] flex flex-col items-center gap-[48px]">
        <div className="flex flex-col gap-2">
            <Text
                variant="h3"
                fontFamily="gambetta"
                fontWeight="medium"
                align="center"
                color="af-dark-green"
            >
                Explore more case studies
            </Text>
            <Text
                variant="h6"
                fontFamily="proxima-nova"
                fontWeight="light"
                align="center"
                color="af-dark-green"
            >
                Our case studies showcase our expertise and approach to ensuring organizational resilience.
            </Text>
        </div>


        <div className="flex gap-[48px]"> 
            <div className="h-[504px] w-[350px] flex flex-col gap-[20px]">
                <div className="h-[180px] w-full">
                    <img
                        src={Fintech2}
                        alt="Case Study 1"
                        className="h-full"
                    />
                </div>
                <div className="flex flex-col gap-[18px] items-center">
                    <Text
                        variant="h5"
                        align="center"
                        fontFamily="gambetta"
                        color="af-green"
                        customClassName="font-medium"
                    >
                        Strengthening Cross-Border Payment Security
                    </Text>

                    <Text
                        variant="h6"
                        align="center"
                        fontFamily="proxima-nova"
                        fontWeight="light"
                        color="af-dark-green"
                        customClassName="font-normal"
                    >
                        A high-volume transaction provider implemented ISO 27001 to secure international transactions, reduce breaches, and ensure regulatory compliance, gaining ISO 27001 certification.
                    </Text>

                    <Link
                        to="case-studies"
                        // to={`/case-studies/${study.title.split(' ').join('-').toLowerCase()}`}
                        className="w-fit py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-center text-base h-auto font-proxima-nova font-regular bg-transparent border-[3px] border-afenoid-green text-afenoid-green hover:border-0 hover:bg-afenoid-lemon hover:text-afenoid-light-lemon hover:px-[2.6785rem] hover:py-[0.9875rem]"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
            
            <div className="h-[504px] w-[350px] flex flex-col gap-[20px]">
                <div className="h-[180px] w-full">
                    <img
                        src={Fintech2}
                        alt="Case Study 1"
                        className="h-full"
                    />
                </div>
                <div className="flex flex-col gap-[18px] items-center">
                    <Text
                        variant="h5"
                        align="center"
                        fontFamily="gambetta"
                        color="af-green"
                        customClassName="font-medium"
                    >
                        Strengthening Cross-Border Payment Security
                    </Text>

                    <Text
                        variant="h6"
                        align="center"
                        fontFamily="proxima-nova"
                        fontWeight="light"
                        color="af-dark-green"
                        customClassName="font-normal"
                    >
                        A high-volume transaction provider implemented ISO 27001 to secure international transactions, reduce breaches, and ensure regulatory compliance, gaining ISO 27001 certification.
                    </Text>

                    <Link
                        to="case-studies"
                        // to={`/case-studies/${study.title.split(' ').join('-').toLowerCase()}`}
                        className="w-fit py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-center text-base h-auto font-proxima-nova font-regular bg-transparent border-[3px] border-afenoid-green text-afenoid-green hover:border-0 hover:bg-afenoid-lemon hover:text-afenoid-light-lemon hover:px-[2.6785rem] hover:py-[0.9875rem]"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export {RelatedSection}