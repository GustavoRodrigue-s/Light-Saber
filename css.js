(() => {
    const img_git = document.querySelector('#github_icon') ;
    const img_discord = document.querySelector('#discord_icon');
    const img_insta = document.querySelector('#instagram_icon');
    let Skip = false;
    const Music = document.createElement('audio');

    function UpdateImage(names, local) {
        names.setAttribute('src', `imagens/${local}.png`);
    }

    //Change color social medias
    img_git.addEventListener('mouseenter', () => UpdateImage(names = img_git, local = "github_icon_orange"));
    img_git.addEventListener('mouseout', () => UpdateImage(names = img_git, local = "github_icon"));
    img_discord.addEventListener('mouseenter', () => UpdateImage(names = img_discord, local = "discord_icon_orange"));
    img_discord.addEventListener('mouseout', () => UpdateImage(names = img_discord, local = "discord_icon"));
    img_insta.addEventListener('mouseenter', () => UpdateImage(names = img_insta, local = "instagram_icon_orange"));
    img_insta.addEventListener('mouseout', () => UpdateImage(names = img_insta, local = "instagram_icon"));

    
    //ANIMATION BANNER STAR WARS
    function BannerStarWarsOpen() {
        const container_StarWars = document.querySelector('#container-img-init');
        container_StarWars.style.animation = "ContainerStarWars 5s forwards";
        setTimeout(() => {
            Skip === false ? BannerStarWarsClose(container_StarWars) : "";
        }, 8000)
    }
    function BannerStarWarsClose(container_StarWars) {
        container_StarWars.style.opacity = "0";
        setTimeout(() => {
            container_StarWars.style.display = "none";
        }, 1000)
    }

    function ButtonClickSkip() {
        Skip = true;
        Music.remove();
        document.querySelector('#container-btn-skip').style.display = "none";
        document.querySelector('#container-img-init').style.display = "none";
        document.querySelector('#ContainerCredits').style.display = "none";
        CallSaber();
    }
    function ButtonSkipOpen() {
        const ContainerBtnSkip = document.querySelector('#container-btn-skip');
        ContainerBtnSkip.style.display = "block";

        document.querySelector('#btn-skip').addEventListener('click', ButtonClickSkip);
    }

    //ANIMATION PROJECT NAME AND DATE
    function ContainerCreditsOpen() {
        const container_credits = document.querySelector('#ContainerCredits');
        container_credits.style.display = "block";
        setTimeout(() => {
            Skip === false ? CreditsAndButtonClose(container_credits) : "";
        }, 4000);
    }
    function CreditsAndButtonClose(container_credits) {
        const BtnSkip = document.querySelector('#container-btn-skip');
        container_credits.style.animation = "CinematicTransitionClose 1s forwards";
        BtnSkip.style.animation = "CinematicTransitionClose 1s forwards";
        setTimeout(() => {
            container_credits.style.display = "none", BtnSkip.style.display = "none";
        }, 1000)
    }

    //CHAMAER SABRE  DE LUZ
    function CallSaber() {
        document.querySelector('#container-sabre').style.display = "block";
    }

    function PlayMusic() {
        Music.setAttribute('src', 'Audios/MusicStarWars.mp3');
        body.appendChild(Music);
        Music.play();
    }

    //FUNCTION FOR TRANSITION => (CONTAINER ABOUT)
    const button_proceed = document.querySelector('#btn-proceed').addEventListener('click', () => {
        document.querySelector('#border-visual-one').style.animation = "BorderOneReverse 1.2s forwards";
        document.querySelector('#border-visual-two').style.animation = "BorderTwoReverse 1.2s forwards";
        document.querySelector('#colum-one').style.animation = "AnimationOpacityReverse 1.2s forwards";
        document.querySelector('#colum-two').style.animation = "AnimationOpacityReverse 1.2s forwards";
        const container_about = document.querySelector('#container-about');
        container_about.style.animation = "BackgroundInitAboutReverse 1s forwards linear";

        setTimeout(() => {
            container_about.style.display = "none";
            BannerStarWarsOpen();
            ButtonSkipOpen();
        }, 1200)

        PlayMusic();
        
        setTimeout(() => {
            Skip === false ? ContainerCreditsOpen() : "";
        }, 10000);

        setTimeout(() => {
            CallSaber();
        }, 17000)
    });
})();