const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: "",
    message:"",
};
const refs ={
    form:document.querySelector('.feedback-form')
};



//Вішаю подію інпут
refs.form.addEventListener('input',e => {
const email = e.currentTarget.elements.email.value.trim();
const message = e.currentTarget.elements.message.value.trim();
formData.email = email;
formData.message = message;
saveToLS(STORAGE_KEY,formData);
});


function initPage() {
    const localData = loadFromLS(STORAGE_KEY);
    if (localData) {
        formData.email = localData.email || "";
        formData.message = localData.message || "";
        refs.form.elements.email.value = formData.email;
        refs.form.elements.message.value = formData.message;
    }
}


//вішаю подію сабміт
refs.form.addEventListener('submit', e => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    refs.form.reset();

    formData.email = '';
    formData.message = '';
    });


    //Збереження даних у сховтище

    function saveToLS(key, value) {
        const jsonData = JSON.stringify(value);
        localStorage.setItem(key, jsonData);
    };

    function loadFromLS(key) {
        const body = localStorage.getItem(key);
        try {
            const data = JSON.parse(body);
            return data;
        } catch {
            return body;
        }
    }





