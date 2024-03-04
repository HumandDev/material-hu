export const openFile = (data: BlobPart) => {
  const downloadUrl = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.target="_blank";
  link.rel="noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
}; 
