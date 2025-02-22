'use client'

import React from "react";
import {Link, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@heroui/react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems: { [ pageName: string ]: string } = {
        "Profile": "profile",
        "Current Projects": "current-projects",
        "Quotes": "quotes"
    };

    return (
        <Navbar isBordered={false} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll={true}>
            <NavbarContent justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu>
                {Object.entries(menuItems).map(([pageName, id]) => (
                    <NavbarMenuItem key={id}>
                        <Link isBlock={true} color="foreground" className="w-full" href={`#${id}`} size="lg" onPress={() => setIsMenuOpen(false)}>
                            {pageName}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}