import React from 'react';
import {SuspenseWithPerf} from "reactfire";
import {useUserNeoudeus} from "../../chat/dialog/hooks/UseUserNeodeus";

import DialogFrame from "../../chat/dialog/structure/DialogFrame";
import SetUsername from "../../user/structure/SetUsername";

const FirstInterface = (props) => {
    const userNeodeus = useUserNeoudeus(props.user.uid);
    var firstInterfaceContent = "";

    if (userNeodeus && userNeodeus.username) {
        firstInterfaceContent = <DialogFrame/>;
    } else if (userNeodeus && userNeodeus.userId && !userNeodeus.username) {
        firstInterfaceContent = <SetUsername userNeodeus={userNeodeus}/>;
    }
    ;

    return (
        <span>
           {firstInterfaceContent}
       </span>
    );


};
const SuspenseWrapperFirstInterface = props => {
    return (
        <SuspenseWithPerf fallback="loading..." traceId="RTDB-root">
            <FirstInterface {...props}/>
        </SuspenseWithPerf>
    );
};

export default SuspenseWrapperFirstInterface;
