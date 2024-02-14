const $links = document.getElementById('links')
const $name = document.querySelector('h1')

const data = {
    name: "Leo Gancedo",
    nickname: "lgan",
    description: "Contador, entusiasta de las finanzas y aprendiendo programación",
    avatar: "...",
    social: 
    [
      {
        name: "platzi",
        url: "https://platzi.com/p/gancedoleonel/",
        username: "gancedoleonel",
      },
      {
        name: "youtube",
        url: "https://www.youtube.com/channel/UCB750HpFI5UzjGB5P_Hwa_Q",
        username: "gancedoleonel",
      },
      {
        name: "github",
        url: "https://github.com/LeonelGancedo",
        username: "LeonelGancedo",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/leogancedo/",
        username: "leogancedo",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/leogancedo/",
        username: "leogancedo",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/gancedoleonel/",
        username: "gancedoleonel",
      },
      {
        name: "discord",
        url: "https://discord.gg/4fuSTbRtqn",
        username: "tribal",
      },
    ],
    
    links: 
    [
      {
        name: "Nasa-APOD",
        url: "https://leonelgancedo.github.io/nasa-apod/",
        color: "green",
        emoji: "🚀",
      },
      {
        name: "nasa",
        url: "https://leonelgancedo.github.io/nasa-apod/",
        color: "fuchsia",
        emoji: "🚀",
      },
      {
        name: "nasa",
        url: "https://leonelgancedo.github.io/nasa-apod/",
        color: "yellow",
        emoji: "🚀",
      },
      {
        name: "nasa",
        url: "https://leonelgancedo.github.io/nasa-apod/",
        color: "blue",
        emoji: "🚀",
      },
      {
        name: "nasa",
        url: "https://leonelgancedo.github.io/nasa-apod/",
        color: "lime",
        emoji: "🚀",
      },
      {
        name: "nasa",
        url: "https://leonelgancedo.github.io/nasa-apod/",
        color: "rose",
        emoji: "🚀",
      },
    ],
    footer: "Copyleft © 2023 🚀 Per Aspera Ad Astra",
};

const main = () => {
    let name = document.createTextNode(data?.name)
    let links = data?.links?.map(link => {
        return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
          href=${link.url} target="_blank">
          ${link.name}
        </a>
        <span>${link.emoji}</span>
      </div>`
    }).join('')
    let newItem = document.createElement('section')
    newItem.innerHTML = links;
    $links.appendChild(newItem)
    $name.appendChild(name)
}

main()