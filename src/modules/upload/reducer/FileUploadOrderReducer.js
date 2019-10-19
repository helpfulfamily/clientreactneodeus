export function fileUploadOrderReducer(state = {}, action) {
    switch (action.type) {
        case 'FILE_UPLOAD_ORDER_ACTION':
            return action.file;

        default:
            return state;
    }
}
