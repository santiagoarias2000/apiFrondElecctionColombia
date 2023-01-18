import { RoutesInternal } from "../util/routes/RoutesInternal";
import { UpMenu } from "./UpMenu";

export const PrincipalTable  =() =>{
    return(
        <div>
            <UpMenu/>
            <RoutesInternal/>
        </div>
    );
};