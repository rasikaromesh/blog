import {ReactNode} from "react";

export interface PostHeaderProps {
    size?: number;
    children: ReactNode
}

const PostHeaderComponent = ({children, size = 1}: PostHeaderProps) => {
    switch (size) {
        case 1:
            return <h1>{children}</h1>
        case 2:
            return <h2>{children}</h2>
        case 3:
            return <h3>{children}</h3>
        case 4:
            return <h4>{children}</h4>
        case 5:
            return <h5>{children}</h5>
        default:
            return <h6>{children}</h6>
    }
};
export default PostHeaderComponent
