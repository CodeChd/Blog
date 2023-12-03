import Layout from "../Layout/Layout.tsx";

function Footer() {
    return (
        <Layout>
            <footer className="py-14 ">
                <div className="flex justify-between">
                    {/* COPYRIGHT */}
                    <div>
                        &copy; {new Date().getFullYear()} CJ Francisco
                    </div>

                    {/* SOCIALS */}
                    <div>
                        <ul className="flex gap-8">
                            <li>
                                <a href="https://github.com/CodeChd" target="_blank">
                                    <img src="/images/icon-github.svg" alt="github"/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.frontendmentor.io/profile/CodeChd"
                                    target="_blank"
                                >
                                    <img
                                        src="/images/icon-frontend-mentor.svg"
                                        alt="frontendMentor"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/cj-francisco-918509275/"
                                    target="_blank"
                                >
                                    <img src="/images/icon-linkedin.svg" alt="linkedin"/>
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
            </footer>
        </Layout>
    );
}

export default Footer;
