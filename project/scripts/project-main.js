document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear()

const scriptures = [
    {
        reference: "2 Nephi 32:3",
        verse: "Wherefore, I said unto you, feast upon the words of Christ; for behold, the words of Christ will tell you all things what ye should do.",
        link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32?lang=eng&id=p3#p3",
    },
    {
        reference: "4 Nephi 1:15",
        verse: "And it came to pass that there was no contention in the land, because of the love of God which did dwell in the hearts of the people.",
        link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/4-ne/1?lang=eng&id=p15#p15",
    },
    {
        reference: "Doctrine and Covenants 6:36",
        verse: "Look unto me in every thought; doubt not, fear not.",
        link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/6?lang=eng&id=p36#p36",
    },
    {
        reference: "Alma 36:3",
        verse: "Whosoever shall put their trust in God shall be supported in their trials, and their troubles, and their afflictions, and shall be lifted up at the last day.",
        link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/36?lang=eng&id=p3#p3",
    },
    {
        reference: "Isaiah 53:4-5",
        verse: "Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted. But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.",
        link: "https://www.churchofjesuschrist.org/study/scriptures/ot/isa/53?lang=eng&id=p4-p5#p4",
    },
    {
        reference: "Proverbs 3:5-6",
        verse: "Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
        link: "https://www.churchofjesuschrist.org/study/scriptures/ot/prov/3?lang=eng&id=p5-p6#p5",
    },
    {
        reference: "3 Nephi 17:6-7",
        verse: "And [Jesus] said unto them: Behold, my bowels are filled with compassion towards you. Have ye any that are sick among you? Bring them hither.Have ye any that are lame, or blind, or halt, or maimed, or leprous, or that are withered, or that are deaf, or that are afflicted in any manner? Bring them hither and I will heal them, for I have compassion upon you; my bowels are filled with mercy.",
        link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/17?lang=eng&id=p6-p7#p6",
    },
    {
        reference: "James 1:5",
        verse: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
        link: "https://www.churchofjesuschrist.org/study/scriptures/nt/james/1?lang=eng&id=p5#p5",
    },
    {
        reference: "Moses 6:34",
        verse: "Behold my Spirit is upon you, wherefore all thy words will I justify; and the mountains shall flee before you, and the rivers shall turn from their course; and thou shalt abide in me, and I in you; therefore walk with me.",
        link: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/6?lang=eng&id=p34#p34",
    },
    {
        reference: "John 3:16",
        verse: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
        link: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/3?lang=eng&id=p16#p16",
    }
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createVerseOfTheDay()
{
    let scripture = scriptures[getRandomInt(scriptures.length)]
    document.getElementById("reference").textContent = scripture.reference;
    document.getElementById("verse").textContent = scripture.verse;
    document.getElementById("link").setAttribute("href", `${scripture.link}`)
}
createVerseOfTheDay()