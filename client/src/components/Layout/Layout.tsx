import {ReactNode} from 'react'

interface Props {
    children: ReactNode
}
function Layout({children}: Props) {
    return (
        <div className="max-w-[60%] mx-auto text-[#f4f4f5]">{children}</div>
    );
}

export default Layout;