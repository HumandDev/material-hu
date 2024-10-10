export const megabytesToBytes = (megabytes) => megabytes * 1024 * 1024;
const SIZES = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
export const bytesToSize = (bytes, decimals = 2) => {
    if (bytes === 0)
        return '0 Bytes';
    if (!bytes)
        return '';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(dm))} ${SIZES[i]}`;
};
