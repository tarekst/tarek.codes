import {Card, CardBody, CardHeader, CardFooter, Link, Chip, Image} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center">
          <Card className="w-96">
              <CardHeader className="flex justify-center">
                  <Image alt="Avatar" src="./avatar.png" className="w-40 h-40 text-large mt-5 mb-0" />
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
                  <Link
                      isExternal
                      href="https://github.com/tarekst"
                      showAnchorIcon
                  >
                      GitHub
                  </Link>
              </CardFooter>
          </Card>
      </div>
    </main>
  );
}
