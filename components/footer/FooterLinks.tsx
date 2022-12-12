import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"

export const footerLinks = [
    {
        title: "Doodles",
        links: [
            {
                path: "https://opensea.io/collection/doodles-official",
                name: "Browse",
                target: true,
            },
            {
                path: "/dooplicator",
                name: "Dooplicator",
                target: false,
            },
            {
                path: "/about",
                name: "About",
                target: false,
            },
            {
                path: "https://docs.doodles.app/",
                name: "Docs",
                target: true,
            },
        ]
    },
    {
        title: "Space Doodles",
        links: [
            {
                path: "/",
                name: "Space Port",
                target: false,
            },
            {
                path: "/",
                name: "Launch",
                target: false,
            },
            {
                path: "https://docs.doodles.app/space-doodles-documentation",
                name: "Docs",
                target: true,
            },
        ]
    },
    {
        title: "Doodles2",
        links: [
            {
                path: "/auction",
                name: "Genesis Box",
                target: false,
            },
            {
                path: "https://www.youtube.com/watch?v=sv9TaQ5z9jw",
                name: "Watch Trailer",
                target: true,
            },
        ]
    },
    {
        title: "Events",
        links: [
            {
                path: "/events/doodleputt",
                name: "DoodlePutt",
                target: false,
            },
            {
                path: "/events/nftnyc",
                name: "NFT NYC 2022",
                target: false,
            },
            {
                path: "/events/sxsw-2022",
                name: "SXSW 2022",
                target: false,
            },
        ]
    },
    {
        title: "About",
        links: [
            {
                path: "/careers",
                name: "Careers",
                target: false,
            },
        ]
    }
]

export const socialLinks = [
    {
        path: "https://twitter.com/doodles",
        icon: <FaTwitter size={20} />,
    },
    {
        path: "https://instagram.com/welikethedoodles",
        icon: <FaInstagram size={20} />,
    },
    {
        path: "https://www.youtube.com/channel/UCtPrgLDvHqOCAG8K4E1Cw6g",
        icon: <FaYoutube size={20} />,
    },
]








