const sectionsData = {
    Design: [
        { img: "Images/Design/1.webp", description: "Firewatch is characterized by its stunning hand-painted art style, which gives the game a unique visual appeal. The vibrant colors, detailed landscapes, and expansive environments are designed to reflect Henry’s inner world. The design of the game mirrors his emotional state: vast open spaces evoke feelings of solitude, while intricate forests and lakes suggest hidden depths. As you explore, the world becomes a reflection of Henry’s personal journey, from his moments of peace to the unsettling tension as the story unfolds." },
        { img: "Images/Design/3.jpg", description: "Dynamic lighting is crucial to the game’s atmosphere, affecting both the environment and Henry’s emotional experience. As the sun rises and sets, the changing colors influence the mood—warm tones during the day and cool blues at night enhance the sense of isolation Henry feels. The lighting not only adds depth but also mirrors his emotional fluctuations, from hope to despair, perfectly complementing the storyline’s arc. The integration of weather patterns—fog, rain, and storms—reinforces the emotional intensity of the game, making the world feel alive and ever-changing." },
        { img: "Images/Design/interior.jpg", description: "The minimalist UI ensures that nothing distracts from Henry’s story. The game cleverly integrates tools like the map and walkie-talkie, making them part of the narrative rather than just gameplay elements. As Henry, you rarely need to navigate complex menus or be bombarded with information. The design decision to keep the interface simple lets you focus entirely on the environment and the unfolding story, ensuring that every moment feels like an intimate journey rather than a typical game experience." },
        { img: "Images/Design/turtle.jpg", description: "Environmental storytelling is at the heart of Firewatch. The game uses the environment to convey its narrative, rather than relying heavily on dialogues or cutscenes. As Henry, you’ll encounter abandoned campsites, strange objects, and cryptic messages that unravel a larger story. Every visual detail—from a discarded beer can to a rusted cabin—helps you piece together the past, making the environment feel like an active participant in the storytelling process. This design choice allows you to form a deep connection with the world Henry inhabits.The firewatch tower is the core technical setting of the game." },
        { img: "Images/Design/Godrays_graphics.png", description: "The godrays in Firewatch are a standout visual feature, adding depth and realism to the environment. As the sunlight filters through trees, the rays dynamically interact with the environment, creating a serene yet immersive effect. These godrays aren't just aesthetic; they emphasize the beauty of nature and reinforce the feeling of solitude that Henry experiences." }
    ],
    Gameplay: [
        { img: "Images/Gameplay/map_and_compass.jpg", description: "Firewatch focuses on exploration and narrative, with no combat. Players explore vast wilderness as Henry, uncovering the story through environmental clues and dialogue. It encourages slow-paced exploration and reflection. The game emphasizes solitude and immersion, with no time constraints." },
        { img: "Images/Gameplay/Communication.png", description: "The dialogue system shapes Henry’s relationship with Delilah. Player choices affect the emotional dynamics, but the impact is subtle. Conversations are key to progressing the story and building the bond between characters, with minor decisions influencing overall tone." },
        { img: "Images/Gameplay/lake_graphics.png", description: "There are no traditional puzzles or combat. Instead, players solve environmental challenges like navigating the terrain or unlocking cache boxes. Tasks are simple but enhance immersion, encouraging exploration and interaction with the wilderness." },
        { img: "Images/Gameplay/cave_graphics.png", description: "Minimalist UI keeps players immersed in the world. The map, compass, and walkie-talkie are the primary tools. There are no intrusive menus, allowing the focus to remain on the environment and story rather than complex systems." },
        { img: "Images/Gameplay/Cache_boxes.png", description: "Henry’s pacing is deliberate and introspective, as the game encourages slow, thoughtful exploration. There’s no rush or urgency to complete objectives, making it a meditative experience. As you move through the game, you’re encouraged to reflect on Henry’s emotional state. The game’s pacing, with long stretches of silence and contemplation, allows you to connect deeply with the character and his journey, emphasizing the themes of loneliness, introspection, and emotional healing." }
    ],
    Sound: [
        { 
            video: "https://www.youtube.com/embed/PqKj-TOx3qo", 
            description: "Music of firewatch is composed by Chris Remo, features a blend of acoustic and atmospheric tracks that enhance the game’s mood. There are 19 tracks, each tailored to specific moments." 
        },
        { 
            video: "https://www.youtube.com/embed/KzWGSBWEb3o", 
            description: "This is one of my favourite soundtracks from the game as it shifts the perspective of the player from a relaxed mode to foreboding" 
        },
        { 
            video: "https://www.youtube.com/embed/CxwQgPeRgp0", 
            description: "“Canyon Sunset”: Accompanies the breathtaking visuals of the forest." 
        },
        { 
            video: "https://www.youtube.com/embed/v7wtrkp5Mx4", 
            description: "“Prologue”: Sets a melancholic tone, reflecting Henry’s backstory." 
        },
    ],
    Technical: [
        { img: "Images/Technical/Unity.avif", description: "Firewatch is built on Unity, a flexible game engine. It allows for high-quality visuals with hand-painted textures and detailed lighting effects. Unity’s cross-platform compatibility enables the game’s release on multiple devices. The game is renowned for its artistic style, heavily influenced by Olly Moss’s iconic visual aesthetic." },
        { img: "Images/Technical/rain.jpg", description: "Dynamic lighting and weather systems create mood. Day-night cycles and changing weather reflect the emotional tone. The lighting system adds depth to both gameplay and visuals, enhancing the atmosphere." },
        { img: "Images/Technical/3.webp", description: "The game’s minimalist UI design is an intentional technical choice. The tools Henry uses—the map, compass, and walkie-talkie—are all integrated seamlessly into the gameplay. There are no intrusive menus or HUD elements to distract from the story. This simplicity is made possible through Unity’s intuitive UI tools, which allow the developers to focus on the narrative and environmental design without cluttering the screen." },
        { img: "Images/Technical/4.webp", description: "Rope Mechanics: The rope physics are one of my favourite feature. The developers designed Henry’s hand as a gravity well, ensuring the rope’s behavior felt natural when climbing or descending. This attention to detail adds a tactile realism to the gameplay." }
    ],
    Characters: [
        { img: "Images/Characters/Henry.png", description: "Henry: A middle-aged man seeking solace from personal tragedy. His backstory, involving his wife Julia’s early-onset dementia, adds depth to his character." },
        { img: "Images/Characters/delilah.jpg", description: "Delilah: Henry’s witty and enigmatic supervisor. Her complex personality and past regrets make her a compelling character. The relationship between Henry and Delilah evolves through player choices, ranging from professional to deeply personal." },
        { img: "Images/Characters/juliah.avif", description: "Julia: Henry’s wife, who is central to his motivations. Her presence is felt through flashbacks and letters, adding emotional weight to the story." },
        { img: "Images/Characters/ned.jpg", description: "Ned Goodwin: A reclusive former lookout and father to Brian. His actions and decisions form a key part of the game’s mystery. Ned’s struggle with guilt and isolation after Brian’s tragic death highlight themes of parental responsibility and denial." },
        { img: "Images/Characters/Brian.webp", description: "Brian Goodwin: Ned’s son, a bright and curious boy who loved the outdoors and tinkering with mechanical objects. Brian’s tragic fate is revealed through clues scattered in the environment, emphasizing the dangers of isolation and the fragility of life." },
        { img: "Images/Characters/bucket.jpg", description: "Bucket or Mayhem is a scruffy, undersized Beagle or intimidating but gentle-eyed German Shepherd, respectively, depending on player choice. The dog was adopted by Henry and Julia and named Bucket by Julia or Mayhem by Henry depending on which one the player picked. " }
    ]
};

const currentIndices = {
    Design: 0,
    Gameplay: 0,
    Sound: 0,
    Technical: 0,
    Characters: 0
};

function updateSection(section, index) {
    const sectionData = sectionsData[section];
    const image = document.querySelector(`#${section}Image`);
    const video = document.querySelector(`#${section}Video`);
    const description = document.querySelector(`#${section}Description`);

    if (section === 'Sound') {
        // Handle video for the Sound section
        if (video && description) {
            video.src = sectionData[index].video;
            description.innerText = sectionData[index].description;
        }
    } else {
        // Handle images for other sections
        if (image && description) {
            image.src = sectionData[index].img;
            description.innerText = sectionData[index].description;
        }
    }
}

// Add event listeners to the navigation buttons
document.querySelectorAll('.prevButton, .nextButton').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.getAttribute('data-section');
        const sectionData = sectionsData[section];
        let index = currentIndices[section];

        if (button.classList.contains('nextButton')) {
            index = (index + 1) % sectionData.length;
        } else {
            index = (index - 1 + sectionData.length) % sectionData.length;
        }

        currentIndices[section] = index;
        updateSection(section, index);
    });
});

// Initialize the sections with the first item
Object.keys(sectionsData).forEach(section => {
    updateSection(section, currentIndices[section]);
});