import {Card, CardBody, CardHeader, CardFooter, Link, Chip, Image, Tabs, Tab, Divider} from "@nextui-org/react";

export default function Home() {
    return (
        <main>
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="flex justify-center">
                    <Card className="w-96">
                        <CardHeader className="flex justify-center">
                            <Image alt="Avatar" src="./avatar.png" className="w-40 h-40 text-large mt-5 mb-0"/>
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
            </div>
            <div className="flex min-h-screen flex-col items-center p-24">
                <h1 className="text-3xl">Current Projects</h1>
                <div className="pt-12 flex flex-col gap-3">
                    <Card className="w-96">
                        <CardHeader>
                            <div className="flex flex-col pl-3">
                                <p className="text-large">FVT Startup</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <div className="text-md text-default-500 flex gap-3">
                                <Chip color="success">Active</Chip>
                                <Chip color="default">Closed Source</Chip>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-96">
                        <CardHeader>
                            <div className="flex flex-col pl-3">
                                <p className="text-large">Harmonix Java Framework</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <div className="text-md text-default-500 flex gap-3">
                                <Chip color="success">Active</Chip>
                                <Chip color="default">Closed Source</Chip>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-96">
                        <CardHeader>
                            <div className="flex flex-col pl-3">
                                <p className="text-large">E-Commerce Flutter App</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <div className="text-md text-default-500 flex gap-3">
                                <Chip color="warning">Paused</Chip>
                                <Chip color="default">Closed Source</Chip>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-96">
                        <CardHeader>
                            <div className="flex flex-col pl-3">
                                <p className="text-large">ERP System</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <div className="text-md text-default-500 flex gap-3">
                                <Chip color="secondary">Queued</Chip>
                                <Chip color="default">Closed Source</Chip>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </main>
    );
}
