import React from "react";
import {Card, CardBody, CardHeader, CardFooter, Link, Chip, Image, Divider} from "@heroui/react";
import {ClosedIcon, PlanningIcon, ProgressIcon, UpArrowIcon} from "@/app/icons";
import ScrollButton from "@/app/scroll-button";
import Navigation from "@/app/navigation";
import AnimatedBackground from "@/app/components/AnimatedBackground";

export default function Home() {
    return (
        <main>
            <Navigation/>
            <AnimatedBackground />
            <div id="profile" className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="flex justify-center">
                    <Card className="w-72 md:w-96">
                        <CardHeader className="flex flex-col justify-center">
                            <Image alt="Animated Avatar" src="./transparent_animated_avatar.gif"
                                   className="text-large mt-5 mb-0" width={"100px"}/>
                        </CardHeader>
                        <CardBody className="text-center mb-5">
                            <h1 className="text-3xl">Tarek Steiß</h1>
                            <div className="flex justify-center mt-8">
                                <Chip
                                    variant="shadow"
                                    classNames={{
                                        base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                                        content: "drop-shadow shadow-black text-white",
                                    }}
                                >
                                    Software Engineer
                                </Chip>
                            </div>
                        </CardBody>
                        <CardFooter className="flex justify-center mb-5">
                            <div className="flex gap-4">
                                <Link
                                    isExternal
                                    href="https://github.com/tarekst"
                                    showAnchorIcon
                                >
                                    GitHub
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
                <ScrollButton targetId={"current-projects"} topLabel={"Checkout my current projects"} />
            </div>
            <div id="current-projects" className="flex min-h-screen flex-col justify-between items-center p-24">
                <div className="flex flex-col items-center mx-24">
                    <h1 className="text-3xl">Current Projects</h1>
                    <small className="mt-3 mb-0 max-w-80 md:max-w-[500px]">These are private projects that I only work on in my spare time.</small>
                    <div className="pt-8 flex flex-col items-center gap-3">
                        <Card className="w-80 md:w-[500px] lg:w-[700px]">
                            <CardHeader>
                                <div className="flex flex-col pl-3">
                                    <Link isBlock showAnchorIcon color="foreground" className="text-large" href="https://github.com/WhiteBreachSecurity">
                                        WhiteBreach Security
                                    </Link>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                                <p className="text-md text-default-500">
                                    Developing hard- and software tools for the protection of IT-Systems and legal penetration testing.
                                </p>
                            </CardBody>
                            <Divider/>
                            <CardBody>
                                <div className="text-md text-default-500 flex gap-3">
                                    <Chip color="success" variant="faded" startContent={<ProgressIcon size={17} />}>Active</Chip>
                                    <Chip color="default" startContent={<ClosedIcon size={15} />}>Closed Source</Chip>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="w-80 md:w-[500px] lg:w-[700px]">
                            <CardHeader>
                                <div className="flex flex-col pl-3">
                                    <Link isBlock color="foreground" className="text-large">
                                        emoji-steg
                                    </Link>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                                <p className="text-md text-default-500">
                                    A lightweight TypeScript library for Unicode steganography in emojis.<br/>This library can be used to hide text in a single emoji so that the encrypted text is invisible and can only be decrypted with the correct password.
                                </p>
                            </CardBody>
                            <Divider/>
                            <CardBody>
                                <div className="text-md text-default-500 flex gap-3">
                                    <Chip color="success" variant="faded" startContent={<ProgressIcon size={17} />}>Active</Chip>
                                    <Chip color="default">Open Source</Chip>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="w-80 md:w-[500px] lg:w-[700px]">
                            <CardHeader>
                                <div className="flex flex-col pl-3">
                                    <Link isBlock color="foreground" className="text-large">
                                        Nyx Messenger
                                    </Link>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                                <div className="text-md text-default-500 flex gap-3">
                                    <Chip color="secondary" variant="faded" startContent={<PlanningIcon size={17} />}>Planning</Chip>
                                    <Chip color="default" startContent={<ClosedIcon size={15} />}>Closed Source</Chip>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                {/*<ScrollButton targetId={"quotes"} topLabel={"Read my Quotes"} />*/}
                <ScrollButton targetId={"profile"} icon={<UpArrowIcon size={24}/>} bottomLabel={"Back to the top"} additionalClassNames={"pb-20"} />
            </div>
            {/*<div id="quotes" className={"flex flex-col min-h-screen justify-between items-center"}>
                <div className="quotes">
                    <h1 className="text-3xl">Quotes</h1>
                    <div className="quote">
                        <blockquote>
                            „Software development is the oscillation between the Dunning-Kruger effect and the Imposter syndrome.“
                        </blockquote>
                        <p>– Tarek Steiß</p>
                    </div>
                </div>
                <ScrollButton targetId={"profile"} icon={<UpArrowIcon size={24}/>} bottomLabel={"Back to the top"} additionalClassNames={"pb-20"} />
            </div>*/}
            <div className="flex flex-col w-full items-center text-center mb-2">
                <small className="mb-3">© 2025 Tarek Steiß</small>
                <small className="px-3">Disclaimer: This page is a private profile page and is not used commercially in any way, therefore it does not require any type of imprint.</small>
            </div>
        </main>
    );
}
