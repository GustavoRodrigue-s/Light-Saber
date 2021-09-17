let body = document.getElementsByTagName('body')[0];
(() => {
    let input_color = document.getElementById('input_color');
    const light_blade = document.getElementById('light_blade');
    const bat_base = document.getElementById('bat_base');
    let audio = "";
    let Open_Verification = false;
    let Fist_Effect = "";
    let Second_Effect = "";

    //Pegar a última cor
    window.addEventListener('load', () => {
        let RestoreColor = localStorage.getItem('color');
        input_color.value = localStorage.getItem('color') !== null ? RestoreColor : "#ff0000";
    });

    //ChangeColor
    input_color.addEventListener('change', () => {
        localStorage.setItem('color', input_color.value);
    });

    input_color.addEventListener('click', () => {
        Open_Verification === true ? Close_light() : "";
    });

    function EffectOpenLight() {
        Fist_Effect = setInterval(() => {
            light_blade.style.transition = '0s';
            light_blade.style.boxShadow = `0px 0px 20px 8px ${input_color.value}`;
        }, 180);
        Second_Effect = setInterval(() => {
            light_blade.style.transition = '0s';
            light_blade.style.boxShadow = `0px 0px 15px 8px ${input_color.value}`;
        }, 200);
    }

    function AudioEffect(src) {
        audio !== "" ? audio.remove() : "";
        audio = document.createElement('audio');
        audio.setAttribute('src', `${src}`);
        body.appendChild(audio);
        audio.play();
    }

    //Abrir lâmina
    function Open_light() {
        Open_Verification = "";
        AudioEffect("Audios/AudioSaberOpen.mp3");
        light_blade.style.cssText = `
            display: block;
            box-shadow: 0px 0px 15px 8px ${input_color.value};
            animation: AnimationOpenLight 0.3s forwards;
        `;

        EffectOpenLight();

        setTimeout(() => {
            Open_Verification = true;
        }, 300);
    }

    //Fechar lâmina
    function Close_light() {
        Open_Verification = "";
        AudioEffect("Audios/AudioSaberClose.mp3");
        clearInterval(Fist_Effect);
        clearInterval(Second_Effect);
        light_blade.style.transition = '0.5s';
        light_blade.style.animation = "AnimationCloseLight 0.3s forwards";
        light_blade.style.boxShadow = `0px 0px 2px 2px ${input_color.value}`;

        setTimeout(() => {
            light_blade.style.display = "none";
            Open_Verification = false;
        }, 300);
    }

    bat_base.addEventListener('click', () => {
        if(Open_Verification === false) {
            Open_light();
        }else if(Open_Verification === true) {
            Close_light();
        }
    });
})();


