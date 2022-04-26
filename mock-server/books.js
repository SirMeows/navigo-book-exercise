
module.exports = function () {
 
  const books = [
    {
      id: 'ivzfRJGrdFsC',
      title: 'The Da Vinci Code',
      info: ' Harvard professor Robert Langdon receives an urgent late-night phone call while on business in Paris: the elderly curator of the Louvre has been brutally murdered inside the museum. Alongside the body, police have found a series of baffling codes. As Langdon and a gifted  French cryptologist, Sophie Neveu, begin to sort through the bizarre riddles, they are stunned to find a trail that leads to the works of Leonardo Da Vinci - and suggests the answer to a mystery that stretches deep into the vault of history. Unless Langdon and Neveu can decipher the labyrinthine code and quickly assemble the pieces of the puzzle, a stunning historical truth will be lost forever...'
    },
    {
      id: 'xYotngEACAAJ',
      title: "Harry Potter and the Philosopher's Stone",
      info: "Harry Potter is an ordinary boy who lives in a cupboard under the stairs at his Aunt Petunia and Uncle Vernon's house, which he thinks is normal for someone like him who's parents have been killed in a 'car crash'. He is bullied by them and his fat, spoilt cousin Dudley, and lives a very unremarkable life with only the odd hiccup (like his hair growing back overnight!) to cause him much to think about. That is until an owl turns up with a letter addressed to Harry and all hell breaks loose! He is literally rescued by a world where nothing is as it seems and magic lessons are the order of the day. Read and find out how Harry discovers his true heritage at Hogwarts School of Wizardry and Witchcraft, the reason behind his parents mysterious death, who is out to kill him, and how he uncovers the most amazing secret of all time, the fabled Philosopher's Stone! All this and muggles too. Now, what are they?"
    },
    {
      id: 'e3_6vQEACAAJ',
      title: 'Harry Potter and the Goblet of Fire',
      info: 'Fourteen-year-old Harry Potter joins the Weasleys at the Quidditch World Cup, then enters his fourth year at Hogwarts Academy where he is mysteriously entered in an unusual contest that challenges his wizarding skills, friendships and character, amid signs that an old enemy is growing stronger.'
    },
    {
      id: '1o7D0m_osFEC',
      title: 'Harry Potter and the Chamber of Secrets',
      info: "'There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year.' Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true. Having now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and  the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers."
    },
    {
      id: 's8l5ApOH2CwC',
      title: 'The Lost Symbol',
      info: "'A narrative that can grip you like a vice' Daily Mail 'Impossible to put down' New York Times The Capitol Building, Washington DC: Harvard symbologist Robert Langdon believes he is here to give a lecture. He is wrong. Within minutes of his arrival, a shocking object is discovered. It is a gruesome invitation into an ancient world of hidden wisdom. When Langdon's mentor, Peter Solomon - prominent mason and philanthropist - is kidnapped, Langdon realizes that his only hope of saving his friend's life is to accept this mysterious summons. It is to take him on a breathless chase through Washington's dark history. All that was familiar is changed into a shadowy, mythical world in which Masonic secrets and never-before-seen revelations seem to be leading him to a single impossible and inconceivable truth... *INCLUDES AN EXTRACT OF ORIGIN, THE NEW THRILLER BY DAN BROWN: OUT NOW*"
    },
    {
      id: 'N_2gqkJhnX0C',
      title: 'Angels & Demons',
      info: 'World-renowned Harvard symbologist Robert Langdon is summoned to a Swiss research facility to analyze a cryptic symbol seared into the chest of a murdered physicist. What he discovers is unimaginable; a deadly vendetta against the Catholic Church by a cen'
    },
    {
      id: 'pXY9tAEACAAJ',
      title: 'Contemporary Monograph Design 2009: Twilight',
      info: "No info for this book"
    },
    {
      id: 'Cr8KnwEACAAJ',
      title: 'The Girl with the Dragon Tattoo',
      info: 'Forty years after the disappearance of Harriet Vanger from the secluded island owned and inhabited by the powerful Vanger family, her octogenarian uncle hires journalist Mikael Blomqvist and Lisbeth Salander, an unconventional young hacker, to investigate.'
    },
    {
      id: 'bUJnkwEACAAJ',
      title: 'The Kite Runner',
      info: "Traces the unlikely friendship of a wealthy Afghan youth and a servant's son, in a tale that spans the final days of Afghanistan's monarchy through the atrocities of the present day."
    },
    {
      id: 'K0MIEAAAQBAJ',
      title: 'A Thousand Splendid Suns',
      info: "THE RICHARD & JUDY NUMBER ONE BESTSELLER 'A suspenseful epic' Daily Telegraph 'A triumph' Financial Times 'Heartbreaking' Mail on Sunday 'Deeply moving' Sunday Times Mariam is only fifteen when she is sent to Kabul to marry Rasheed. Nearly two decades later, a friendship grows between Mariam and a local teenager, Laila, as strong as the ties between mother and daughter.When the Taliban take over, life becomes a desperate struggle against starvation, brutality and fear.Yet love can move a person to act in unexpected ways, and lead them to overcome the most daunting obstacles with a startling heroism."
    },
    {
      id: 'm3Yfj-KWgCEC',
      title: 'A Short History of Nearly Everything',
      info: "Bill Bryson describes himself as a reluctant traveller, but even when he stays safely at home he can't contain his curiosity about the world  around him.A Short History of Nearly Everything is his quest to understand everything that has happened from the Big Bang to the rise of civilization - how we got from there, being nothing at all, to here, being us.Bill Bryson's challenge is to take subjects that normally bore the pants off most of us, like geology, chemistry and particle physics, and see if there isn't some way to render them comprehensible to people who have never thought they could be interested in science.The ultimate eye - opening journey through time and space, A Short History of Nearly Everything is the biggest - selling popular science book of the 21st century, and reveals the world in a way most of us have never seen it before."
    },
    {
      id: 'c9Hjbfv547sC',
      title: 'Birdsong',
      info: "Birdsong is a mesmerising story of love and war spanning three generations between WW1 and present day. THE SUNDAY TIMES BESTSELLER 1910. Amiens, Northern France. Stephen Wraysford, a young Englishman, arrives in the French city to stay with the Azaire family. He falls in love with unhappily married Isabelle and the two enter a tempestuous love affair.But, with the world on the brink of war, the relationship falters.With his love for Isabelle forever engraved on his heart, Stephen volunteers to fight on the Western Front and enters the unimaginable dark world beneath the trenches of No Man's Land. From award-winning writer Sebastian Faulks, Birdsong is an exceptionally moving and unforgettable portrait of the ruthlessness of war and the indestructability of love. 'Magnificent - deeply moving' Sunday Times ----Also available by Sebastian Faulks as part of the French trilogy series: The Girl at the Lion d'Or Charlotte Gray"
    },
    {
      id: 'CEZCiW0IgvYC',
      title: 'Memoirs of a Geisha',
      info: "This is a seductive and evocative epic on an intimate scale, which tells the extraordinary story of a geisha girl. Summoning up more than twenty years of Japan's most dramatic history, it uncovers a hidden world of eroticism and enchantment, exploitation and degradation. From a small fishing village in 1929, the tale moves to the glamorous and decadent heart of Kyoto in the 1930s, where a young peasant girl is sold as servant and apprentice to a renowned geisha house.She tells her story many years later from the Waldorf Astoria in New York; it exquisitely evokes another culture, a different time and the details of an extraordinary way of life.It conjures up the perfection and the ugliness of life behind rice - paper screens, where young girls learn the arts of geisha - dancing and singing, how to wind the kimono, how to walk and pour tea, and how to beguile the most powerful men."
    },
    {
      id: 'tEaZK3P0OxIC',
      title: 'You Are What You Eat',
      info: 'A best-selling diet makeover guide in Great Britain, published for an American audience, shares a host of true stories and practical advice designed to help readers overcome personal obstacles to losing weight, in a ten-step program complemented by a two-week start-up plan. Reprint.'
    }
  ]
  return { books }
}
