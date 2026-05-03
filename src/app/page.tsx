import React from "react";
import {Card, Link, Chip, Separator} from "@heroui/react";
import {ArchiveIcon, ClosedIcon, EyeOffIcon, GithubIcon, InstagramIcon, LinkedInIcon, OpenSourceIcon, ProgressIcon, ShieldIcon, TerminalIcon, UpArrowIcon} from "@/app/icons";
import ScrollButton from "@/app/scroll-button";
import Navigation from "@/app/navigation";
import DotPatternBackground from "@/app/components/DotPatternBackground";
import DemoButton from "@/app/components/DemoButton";

export default function Home() {
  return (
    <main>
      <Navigation/>
      <DotPatternBackground />
      <div id="profile" className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex justify-center">
          <Card className="w-72 md:w-96 bg-background/30 backdrop-blur-[2px] border-2 border-default-200 gradient-border-card">
            <Card.Header className="flex flex-col justify-center items-center">
              <img alt="Animated Avatar" src="./transparent_animated_avatar.gif"
                className="text-large mt-5 mb-0 rounded-lg" width={100}/>
            </Card.Header>
            <Card.Content className="text-center mb-5">
              <h1 className="text-3xl">Tarek Stei&#223;</h1>
              <div className="flex justify-center mt-8">
                <Chip
                  className="bg-linear-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30 shadow-md"
                >
                  <span className="drop-shadow shadow-black text-white">Software Engineer</span>
                </Chip>
              </div>
            </Card.Content>
            <Card.Footer className="flex justify-center mb-5">
              <div className="flex gap-5">
                <Link href="https://github.com/tarekst" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon size={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/tarek-stei%C3%9F-299b1a290/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon size={24} />
                </Link>
                <Link href="https://www.instagram.com/tarek.steiss/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon size={24} />
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </div>
        <ScrollButton targetId={"current-projects"} topLabel={"Checkout my current projects"} />
      </div>
      <div id="current-projects" className="flex min-h-screen flex-col justify-between items-center p-24">
        <div className="flex flex-col items-center mx-24">
          <h1 className="text-3xl">Current Projects</h1>
          <small className="mt-3 mb-0 max-w-80 md:max-w-140">These are some of mine private and public projects that I do work on in my spare time on.</small>
          <div className="pt-8 flex flex-col items-center gap-5">
            <Card className="w-80 md:w-125 lg:w-175 bg-background/30 backdrop-blur-[2px] border-2 border-default-200 transition-transform duration-300 hover:-translate-y-1">
              <Card.Header>
                <div className="flex flex-row pl-3 w-full justify-between items-center">
                  <Link className="text-large text-foreground" href="https://github.com/tarekst/jar-explorer" target="_blank" rel="noopener noreferrer">
                    jar-explorer
                    <Link.Icon />
                  </Link>
                  <Link href="/jar-explorer/privacy-policy" className="text-xs text-default-400 flex items-center gap-1 hover:text-default-600 transition-colors">
                    <ShieldIcon size={14} />
                    Privacy Policy
                  </Link>
                </div>
              </Card.Header>
              <Separator/>
              <Card.Content>
                <p className="text-md text-default-500">
                  Claude Code Plugin to decompile and explore Java JAR files &mdash; read source code of dependencies, search packages, classes, methods, and fields.
                </p>
              </Card.Content>
              <Separator/>
              <Card.Content>
                <div className="text-md text-default-500 flex gap-3 flex-wrap items-center justify-between">
                  <div className="flex gap-3">
                    <Chip color="success" variant="soft"><ProgressIcon size={17} />Active</Chip>
                    <Chip color="default"><OpenSourceIcon size={15} />Open Source</Chip>
                    <Chip className="bg-[#e07a2f] text-white border-small border-white/30"><TerminalIcon size={15} />Claude Code Plugin</Chip>
                  </div>
                  <span className="text-xs text-default-400">Created on Mar 31, 2026</span>
                </div>
              </Card.Content>
            </Card>
            <Card className="w-80 md:w-125 lg:w-175 bg-background/30 backdrop-blur-[2px] border-2 border-default-200 transition-transform duration-300 hover:-translate-y-1">
              <Card.Header>
                <div className="flex flex-row pl-3 w-full justify-between items-center">
                  <Link className="text-large text-foreground" href="https://github.com/tarekst/prompt-brain" target="_blank" rel="noopener noreferrer">
                    prompt-brain
                    <Link.Icon />
                  </Link>
                  <Link href="/prompt-brain/privacy-policy" className="text-xs text-default-400 flex items-center gap-1 hover:text-default-600 transition-colors">
                    <ShieldIcon size={14} />
                    Privacy Policy
                  </Link>
                </div>
              </Card.Header>
              <Separator/>
              <Card.Content>
                <p className="text-md text-default-500">
                  Claude Code Plugin to analyze and optimize prompts through automated weakness detection, best-practice matching, and intelligent reconstruction.
                </p>
              </Card.Content>
              <Separator/>
              <Card.Content>
                <div className="text-md text-default-500 flex gap-3 flex-wrap items-center justify-between">
                  <div className="flex gap-3">
                    <Chip color="success" variant="soft"><ProgressIcon size={17} />Active</Chip>
                    <Chip color="default"><OpenSourceIcon size={15} />Open Source</Chip>
                    <Chip className="bg-[#e07a2f] text-white border-small border-white/30"><TerminalIcon size={15} />Claude Code Plugin</Chip>
                  </div>
                  <span className="text-xs text-default-400">Created on Apr 06, 2026</span>
                </div>
              </Card.Content>
            </Card>
            <Card className="w-80 md:w-125 lg:w-175 bg-background/30 backdrop-blur-[2px] border-2 border-default-200 transition-transform duration-300 hover:-translate-y-1">
              <Card.Header>
                <div className="flex flex-col pl-3">
                  <Link className="text-large text-foreground" href="https://github.com/WhiteBreachSecurity" target="_blank" rel="noopener noreferrer">
                    WhiteBreach Security
                    <Link.Icon />
                  </Link>
                </div>
              </Card.Header>
              <Separator/>
              <Card.Content>
                <p className="text-md text-default-500">
                  Developing hard- and software tools for the protection of IT-Systems and legal penetration testing.
                </p>
              </Card.Content>
              <Separator/>
              <Card.Content>
                <div className="text-md text-default-500 flex gap-3 flex-wrap items-center justify-between">
                  <div className="flex gap-3">
                    <Chip color="success" variant="soft"><ProgressIcon size={17} />Active</Chip>
                    <Chip color="default"><ClosedIcon size={15} />Closed Source</Chip>
                  </div>
                  <span className="text-xs text-default-400">Created on Feb 10, 2025</span>
                </div>
              </Card.Content>
            </Card>
            <Card className="w-80 md:w-125 lg:w-175 bg-background/30 backdrop-blur-[2px] border-2 border-default-200 transition-transform duration-300 hover:-translate-y-1">
              <Card.Header>
                <div className="flex flex-row pl-3 w-full justify-between">
                  <Link
                    className="text-large text-foreground"
                    href="https://github.com/tarekst/emoji-steg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    emoji-steg
                    <Link.Icon />
                  </Link>
                  <DemoButton />
                </div>
              </Card.Header>
              <Separator/>
              <Card.Content>
                <p className="text-md text-default-500">
                  A lightweight TypeScript library for Unicode steganography in emojis.<br/>This library can be used to hide text in a single emoji so that the encrypted text is invisible and can only be decrypted with the correct password.
                </p>
              </Card.Content>
              <Separator/>
              <Card.Content>
                <div className="text-md text-default-500 flex gap-3 flex-wrap items-center justify-between">
                  <div className="flex gap-3">
                    <Chip color="warning" variant="soft"><ArchiveIcon size={15} />Archived</Chip>
                    <Chip color="default"><OpenSourceIcon size={15} />Open Source</Chip>
                  </div>
                  <span className="text-xs text-default-400">Created on Apr 18, 2025</span>
                </div>
              </Card.Content>
            </Card>
            <Card className="w-80 md:w-125 lg:w-175 bg-background/30 backdrop-blur-[2px] border-2 border-default-200 transition-transform duration-300 hover:-translate-y-1">
              <Card.Header>
                <div className="flex flex-col pl-3">
                  <span className="text-large text-foreground">
                    web-browsing-mcp-server
                  </span>
                </div>
              </Card.Header>
              <Separator/>
              <Card.Content>
                <div className="text-md text-default-500 flex gap-3 flex-wrap items-center justify-between">
                  <div className="flex gap-3">
                    <Chip color="success" variant="soft"><ProgressIcon size={17} />Active</Chip>
                    <Chip color="default"><ClosedIcon size={15} />Closed Source</Chip>
                    <Chip color="default"><EyeOffIcon size={15} />Private</Chip>
                  </div>
                  <span className="text-xs text-default-400">Created on Jan 04, 2025</span>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
        {/*<ScrollButton targetId={"quotes"} topLabel={"Read my Quotes"} />*/}
        <ScrollButton targetId={"profile"} icon={<UpArrowIcon size={24}/>} bottomLabel={"Back to the top"} additionalClassNames={"pb-20"} />
      </div>
      <div className="flex flex-col w-full items-center text-center mb-2">
        <small className="mb-3 flex items-center gap-1.5">&copy; 2026 Tarek Stei&#223; <svg width="20" height="14" viewBox="0 0 5 3" className="inline-block rounded-sm"><rect width="5" height="1" fill="#000"/><rect y="1" width="5" height="1" fill="#D00"/><rect y="2" width="5" height="1" fill="#FFCE00"/></svg></small>
        <small className="px-3">Disclaimer: This page is a private profile page and is not used commercially in any way, therefore it does not require any type of legal imprint.</small>
      </div>
    </main>
  );
}
