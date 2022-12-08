export const uploadFiles = async (file)=>{
    if(!file) throw new Error('There is no file to upload');

    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/coddica/upload';
    const formData = new FormData();
    formData.append('upload_preset','journal');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
        });

        if(!resp.ok) throw new Error('Error uploading image');

        const finalResp = await resp.json();

        return finalResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error('Couldnt upload images');
    }


}