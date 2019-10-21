import logger from "../../../tool/log";


export function fileUploadOut(file, token) {
    /*
      var fbBucketName = 'images';
      // get elements
      var uploader = document.getElementById('uploader');
          // create a storage ref
          var storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
          // upload file
          var uploadTask = storageRef.put(file);
          // The part below is largely copy-pasted from the 'Full Example' section from
          // https://firebase.google.com/docs/storage/web/upload-files
          // update progress bar
          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
              function (snapshot) {
                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  uploader.value = progress;
                  console.log('Upload is ' + progress + '% done');
                  switch (snapshot.state) {
                      case firebase.storage.TaskState.PAUSED: // or 'paused'
                          console.log('Upload is paused');
                          break;
                      case firebase.storage.TaskState.RUNNING: // or 'running'
                          console.log('Upload is running');
                          break;
                  }
              }, function (error) {
                  // A full list of error codes is available at
                  // https://firebase.google.com/docs/storage/web/handle-errors
                  switch (error.code) {
                      case 'storage/unauthorized':
                          // User doesn't have permission to access the object
                          break;
                      case 'storage/canceled':
                          // User canceled the upload
                          break;
                      case 'storage/unknown':
                          // Unknown error occurred, inspect error.serverResponse
                          break;
                  }
              }, function () {
                  // Upload completed successfully, now we can get the download URL
                  // save this link somewhere, e.g. put it in an input field
                  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                      console.log('File available at', downloadURL);
                  });
              });
              */

}

export function fileUploadIn(data) {
    return (dispatch) => {
        data = JSON.parse(data.body);

        var log = {
            action: "PUBLISH_DIALOG_CONTENT"
            , information: "publishDialogContentIn(data, store)"

            , "data": data
        };
        logger.debug(log);


        if (typeof data != "undefined") {


            var payload = data.payload;
            if (typeof payload != "undefined") {

                /* var action = publishDialogContentAction(payload);
                dispatch(action);*/


            }

        }
    }

}
