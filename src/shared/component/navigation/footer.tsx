import { SITEMAP } from "shared/constant/constant";
import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from "../icons/icon";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative w-full bg-slate-800">
            <div className="mx-auto w-full max-w-7xl px-8 ">
                <div className="mx-auto flex w-full gap-8 py-12 flex-wrap lg:flex-nowrap sm:flex-nowrap">
                    {SITEMAP.map(({ title, links }: { [key: string]: string | string[] | any; }, key: number) => (
                        <div key={key} className="w-full text-center lg:text-align-[unset] sm:text-align-[unset]">
                            <p className="mb-4 font-bold uppercase text-slate-300">{title}</p>
                            <ul className="space-y-1 flex flex-col">
                                {links.map((link: string, key: number) => (
                                    <Link
                                        to="#"
                                        className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-slate-400"
                                        key={key}
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <div className="flex gap-4 text-slate-200 sm:justify-center">
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <GithubIcon />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;