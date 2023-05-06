function calAge() {
    const birthDate = document.querySelector('.dob').value;

    const birthYear = new Date(birthDate).getFullYear();

    const currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;

    const month = new Date().getMonth() - new Date(birthDate).getMonth();

    if (month < 0 || month === 0 && new Date().getDate() < new Date(birthDate).getDate()) {
        age --;
    }

    const calEl = document.querySelector(".cal");
    calEl.textContent = "Your age is " + age + " years old!";

}
