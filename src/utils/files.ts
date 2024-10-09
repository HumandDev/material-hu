export const openFile = (data: BlobPart) => {
  const downloadUrl = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.target = '_blank';
  link.rel = 'noreferrer';
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export const downloadFile = (file: File) => {
  const downloadUrl = window.URL.createObjectURL(file);
  const link = document.createElement('a');
  link.download = file.name;
  link.href = downloadUrl;
  link.target = '_blank';
  link.rel = 'noreferrer';
  document.body.appendChild(link);
  link.click();
  link.remove();
};
