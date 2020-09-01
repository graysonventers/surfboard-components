import fish from './img/fish.jpg';
import midlength from './img/midlength.jpg';
import longboard from './img/longboard.jpg';
import shortboard from './img/shortboard.jpg';
import stephanieShortboard from './img/stephanieShortboard.jpg';
import stephanieLongboard from './img/stephanieLongboard.png';
import stephanieFish from './img/stephanieFish.jpg';
import stephanieMidlength from './img/stephanieMidlength.jpg';

const data = {
    shortboard: {
        name: 'Shortboard',
        photo_URL: shortboard,
        photo_URL2: stephanieShortboard,
        about: 'Shortboards typically range from about 5’5” to 6’5” in length and 17” to 19” in width (depending on the surfer’s height) and have a pointy nose and somewhat narrow tail. Shortboards are the surfboards of choice for aggressive, high-performance style surfing, so they are best suited for the advanced surfer and are what the pros and competitive surfers ride in high-performance surf contests.',
        noseDescription: 'Shortboard noses generally come to a sharper point. This allows for more manueverability and an easier duck dive as there is less volume in the nose. The downside, however, is that it has less glide in the water making it harder to paddle.',
        tailDescription: 'While shortboards can vary a lot these days, most shortboards have a squash tail shape. The squash tail allows for high manueverability in turning and also helps the surfboard to hold it\'s line on larger waves.',
        railsDescription: 'The rails on a shortboard are generally much thinner than on any other type of surfboard. The thinner rails allow for the board to slice through the water on a sharp turn, instead of being buried under water.'
    },
    longboard: {
        name: 'Longboard',
        photo_URL: longboard,
        photo_URL2: stephanieLongboard,
        about: 'Longboards typically run from about 9 to 12 feet in length with a width of around 20 to 24 inches. One of the most prominent characteristics of the longboard surfboard is its full and round nose. Longboards come in a variety of designs from more performance shapes that cater to maneuverability and versatility to specialty boards like noseriders that cater to, you guessed it, noseriding. Longboards are also commonly referred to as a ‘log’ or ‘malibu’ surfboard.',
        noseDescription: 'Longboards always have very round and fat noses. This allows for the board to easily glide through the water for faster paddling. While the size and shape of the longboard make it harder to turn, the round nose also plays a part in this.',
        tailDescription: 'Longboards typically have a pin tail, squash tail, or round tail. All three of which provide decent stability. ',
        railsDescription: 'Longboards generally are thicker boards with a lot of volume to give the rider plenty of glide and ease of paddling to get into any size wave early. The rails are often thick as well because of this. Longboards require weight to be heavily shifted to the back to make a sharp turn causing the front of the board to lift out of the water, therefore, the rails do not play as much of a part in slicing through the water on a leaning turn like on a shorter board.'
    },
    fish: {
        name: 'Fish',
        photo_URL: fish,
        photo_URL2: stephanieFish,
        about: 'Fish surfboards are all about speed, style, and flow, and can be a super fun everyday surfboard for many surfers. They are extremely versatile and can be used in anything from knee high mush to hollow overhead barrels. Fish surfboards are defined by their short wide outlines, flat rocker, and fishy swallow tail shapes.',
        noseDescription: 'The nose is the front of the board. On a high-performance shortboard, the nose is very pointed and sharp. On a big longboard, the nose is very rounded. When dealing with a fish, the nose is going to be a slight mix of the two. So what’s the trade-off? The more rounded the nose, the more surface area of the board on the water. This means the board will be more stable and less maneuverable. A fish tries to combine the best of both worlds (being stable and maneuverable), by having a slight point on a wide nose.',
        tailDescription: 'You’ll see very exaggerated swallowtails on a fish. The swallow tail traditionally increases the surface area of the tail, allowing for water to flow past easily. This is where the fish gets speed and paddling power. This power is typically for going in one direction, so to increase the fish board’s ability to carve, shapers have given the fish a very deep “V”, which allows some bite and grip for maneuvering on the wave.',
        railsDescription: 'The rails are the sides of a surfboard. As with most aspects of a surfboard (the length, width, and thickness) the bigger it is, the more it floats. The trade off to floatability is of course reduced movement. In this department, fish have big thick rails, to help with the floatation aspect. To counteract the large rails reduction in movement, it has a very short length and wide tail.'
    },
    midlength: {
        name: 'Mid-length',
        photo_URL: midlength,
        photo_URL2: stephanieMidlength,
        about: 'A mid-length surfboard will typically run in the 6’8” to 8’8” range, plus or minus a few inches. Mid-lengths often come in the shape of an egg, a mini longboard, and various 70s inspired retro shapes, making it easy for them to overlap with some of the other categories already mentioned like funboards and mini-mals. It just depends who you’re talking to. Mid-lengths are typically great boards for a wide variety of conditions from knee high mush to good overhead surf.',
        noseDescription: 'Because midlength surfboards vary so much, the nose can as well. However, most midlengths have either a round nose, or a slightly more pointed version as seen on an "egg" shaped midlength.',
        tailDescription: 'Midlength tails can vary just like the nose. The classic egg midlength generally has either a round tail or a pin tail. These days, however, there are so many hybrid versions of surfboards that you can find just about any style. Midlength surfboards are relatively new to the surfing scene and gaining popularity, therefore, there is less observance of a rule of shape.',
        railsDescription: 'In character with the rest of the components of a midlength, the rail thickness can vary as well. Often the rails are still on the thicker side as when trying to make a mini verision of a longboard but there are now many midlengths that have thinner rails to offer more rail turning performance.'
    }
}

export default data;