export const getPhotoPath = (photoId: string) =>
   `http://localhost:3001/static/photos/${photoId}`;

export const getItemFromLocalStorage = (itemKey: string) => {
   const item = localStorage.getItem(itemKey);

   if (item) {
      return JSON.parse(item);
   } else return null;
};

export const setTokenToLocalStorage = (token: string) => {
   // ocalStorage.setItem('user', JSON.stringify(user));
   localStorage.setItem('token', JSON.stringify(token));
};

async function toDataURL(url: string) {
   console.log(url);
   const blob = await fetch(url).then((res) => res.blob());
   return URL.createObjectURL(blob);
}

export async function downloadImage(url: string, imageFileName: string) {
   const a = document.createElement('a');
   a.href = await toDataURL(url);
   a.download = imageFileName + '.jpeg';
   document.body.appendChild(a);
   a.click();
   document.body.removeChild(a);
}
