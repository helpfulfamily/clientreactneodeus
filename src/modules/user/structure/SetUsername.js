import React from 'react';
import {SuspenseWithPerf, useFirebaseApp} from "reactfire";

const SetUsername = (props) => {
    var userNeodeus = props.userNeodeus;

    const firebaseApp = useFirebaseApp();
    const refUserNeodeus = firebaseApp
        .firestore()
        .collection('userNeodeus')
        .doc(userNeodeus.userId);

    function handleChange(event) {
        userNeodeus.username = event.target.value;
    }

    function handleSubmitProcess() {


        refUserNeodeus.update(userNeodeus);


    }

    return (

        <div className="settings">
            <div className="profile">
                <img className="avatar-xl"
                     src={userNeodeus ? userNeodeus.photoURL : ""}

                     alt="avatar"/>
                <h1> Welcome, {userNeodeus ? userNeodeus.displayName : ""}...</h1>


            </div>
            <div className="categories" id="accordionSettings">


                <div className="category">
                    <form>


                        <div className="field">
                            <label htmlFor="username">Neoudeus username:</label>
                            <input type="text" className="form-control" id="username"
                                   placeholder="Specify a username for yourself"
                                   onChange={handleChange}
                                   required/>
                        </div>

                        <button type="button" onClick={handleSubmitProcess} className="btn button w-100">Apply
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );


};

const SuspenseWrapperSetUsername = props => {
    return (
        <SuspenseWithPerf fallback="loading..." traceId="RTDB-root">
            <SetUsername {...props}/>
        </SuspenseWithPerf>
    );
};
export default SuspenseWrapperSetUsername;
