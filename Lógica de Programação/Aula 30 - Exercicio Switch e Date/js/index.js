function fullDateWindow() {

    const fullDate = new Date(2019, 9, 7, 22, 52);
    const year = fullDate.getFullYear();
    let month = fullDate.getMonth();
    const date = fullDate.getDate();
    const hours = fullDate.getHours();
    const minutes = fullDate.getMinutes();
    let day = fullDate.getDay();
    let dateHTML = document.querySelector('.dateHTML');

    function monthTranslate() {

        switch (month) {
            case 0:
                month = 'Janeiro';
                return
            case 1:
                month = 'Fevereiro';
                return
            case 2:
                month = 'Março';
                return
            case 3:
                month = 'Abril';
                return
            case 4:
                month = 'Maio';
                return
            case 5:
                month = 'Junho';
                return
            case 6:
                month = 'Julho';
                return
            case 7:
                month = 'Agosto';
                return
            case 8:
                month = 'Setembro';
                return
            case 9:
                month = 'Outubro';
                return
            case 10:
                month = 'Novembro';
                return
            case 11:
                month = 'Dezembro';
                return
        }
    }

    function weekTranslate() {
        switch (day) {
            case 0:
                day = 'Domingo'
                break
            case 1:
                day = 'Segunda-Feira'
                break
            case 2:
                day = 'Terça-Feira'
                break
            case 3:
                day = 'Quarta-Feira'
                break
            case 4:
                day = 'Quinta-Feira'
                break
            case 5:
                day = 'Sexta-Feira'
                break
            case 6:
                day = 'Sábado'
                break
        }
    }

    monthTranslate();
    weekTranslate();
    dateHTML.innerHTML = `${day}, ${date} de ${month} de ${year} ${hours}:${minutes}`;
}

fullDateWindow();
