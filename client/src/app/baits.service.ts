import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaitsService {

  private hotBaits = [
    { 
      label: 'Jerkbait 1',
      make: 'Megabass Ito 110+1',
      colour: 'GP Pro Perch',
      imgUrl: 'assets/img/gg-perch.jpeg',
      imgUrlMd: 'assets/img/spring/md-gg-perch.jpg',
      imgAlt: 'Megabass Jerkbait (GP-Pro-Perch)',
      situation: 'Perch are all over shallow. \
      They\'re heavily schooling and aggressively roaming.',
      conditions: 'Any',
      notes: 'Harder, while also longer range of motion, jerks will make \
      this bait dive deeper faster. Keep an eye on it w/ active target. \
      Remember to buy/carry extra Megabass hooks.',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_1101_Jerkbaits/descpage-MBIV11.html',
      linkLabel: 'Tackle Warehouse'
    },
  ];

  private allSeasonBaits = [
    { 
      season: 'all',
      label: 'Dropshot',
      make: 'Roboworm',
      colour: 'Grn Pmk[Neon]/M.M.III',
      size: '4.5"',
      imgUrlMd: 'assets/img/home/dropshot.webp',
      imgAlt: 'Roboworm 4.5" dropshot (M.M. III)',
      situation: 'Any. However, seems to excel when it\'s hard to find \
      life on the sonar.',
      conditions: 'Any. However, seems to excel in calm(er) conditions and/or when \
      seasons are at a stable point.',
      notes: '4.5"; Also, cycle out with other dropshot baits like the 3.5" Z-Too and Keitech 3" Spider',
      affiliateLink: 'https://www.tacklewarehouse.com/Roboworm_Straight_Tail_Worms/descpage-RW45ST.html',
      linkLabel: 'Tackle Warehouse'
    },
    { 
      season: 'all',
      label: 'Senko',
      make: 'Yamamoto',
      colour: 'Grn Pmk Bk Flake',
      size: '4"-5"',
      imgUrlMd: 'assets/img/home/senko.webp',
      imgAlt: 'Yamamoto Senko',
      situation: 'Any. However, seems to excel when the bass aren\'t \
      keyed in on shad.',
      conditions: 'Any',
      notes: 'Start with 5" and move to 4" after the "Spring feed" sort of dies off.',
      affiliateLink: 'https://www.tacklewarehouse.com/Yamamoto_Senko/descpage-YAS.html',
      linkLabel: 'Tackle Warehouse'
    }
  ];

  private springBaits = [
    { 
      season: 'spring',
      label: 'Jerkbait 1',
      make: 'Megabass Ito 110+1',
      colour: 'GP Pro Perch',
      imgUrl: 'assets/img/gg-perch.jpeg',
      imgUrlMd: 'assets/img/spring/md-gg-perch.jpg',
      imgAlt: 'Megabass Jerkbait (GP-Pro-Perch)',
      situation: 'Perch are all over shallow. \
      They\'re heavily schooling and aggressively roaming.',
      conditions: 'Any',
      notes: 'Harder, while also longer range of motion, jerks will make \
      this bait dive deeper faster. Keep an eye on it w/ active target. \
      Remember to buy/carry extra Megabass hooks.',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_1101_Jerkbaits/descpage-MBIV11.html',
      linkLabel: 'Tackle Warehouse'
    },
    { 
      season: 'spring',
      label: 'Umbrella Rig', 
      make: 'Hog Farmer',
      colour: 'Default',
      imgUrlMd: 'assets/img/spring/arig-sm.jpg',
      imgAlt: 'Hog Farmer Umbrella Rig',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Sunny / Bright',
      affiliateLink: 'https://www.tacklewarehouse.com/Hog_Farmer_Baits_Tactical_Bassin_Mini_Flex_Rig_4_Blade/descpage-HTMF.html',
      linkLabel: 'Tackle Warehouse'
    },
    { 
      season: 'spring',
      label: 'Jerkbait 2', 
      make: 'Megabass Ito 110',
      colour: 'Mat Shad',
      imgUrl: 'assets/img/spring/sm-gg-perch.jpg',
      imgUrlMd: 'assets/img/spring/mat-shad-sm.jpg',
      imgAlt: 'Megabass Jerkbait (Mat Shad)',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Cloudy / Dark',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'Tackle Warehouse'
    },
    { 
      season: 'spring',
      label: 'Jerkbait 3', 
      make: 'Megabass Ito 110',
      colour: 'Crystal Shad',
      imgUrl: 'assets/img/spring/sm-gg-perch.jpg',
      imgUrlMd: 'assets/img/spring/crystal-shad-sm.jpg',
      imgAlt: 'Megabass Jerkbait (Crystal Shad)',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Sunny / Bright',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'Tackle Warehouse'
    },
    { 
      season: 'spring',
      label: 'Spinnerbait', 
      make: 'Strike King',
      colour: 'Blue Gizzard Shad',
      imgUrlMd: 'assets/img/spring/spinner.webp',
      imgAlt: 'Strike King (Blue Gizzard Shad)',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Any; Excels in high wind.',
      notes: 'Chartreuse and white booyah around dirty water.',
      affiliateLink: 'https://www.tacklewarehouse.com/Strike_King_KVD_Finesse_Spinnerbait_Colorado_Willow/descpage-KVDCW.html',
      linkLabel: 'Tackle Warehouse'
    },
    { 
      season: 'spring',
      label: 'Chatterbait', 
      make: 'Z-man Jackhammer',
      colour: 'Grn Pmk',
      imgUrlMd: 'assets/img/spring/chatter.webp',
      imgAlt: 'Z-man Jackhammer Chatterbait',
      situation: 'Active/feeding fish.',
      conditions: 'Any; Excels when it\'s windy/aggressive.',
      notes: 'B-hite Delight is another great alternative color.',
      affiliateLink: 'https://www.tacklewarehouse.com/Z-Man_Evergreen_Chatterbait_Jack_Hammer/descpage-ZEJACKX.html',
      linkLabel: 'Tackle Warehouse'
    },
    { 
      season: 'spring',
      label: 'Topwater', 
      make: 'Evergreen SB-125',
      colour: 'Morizo Pink',
      imgUrlMd: 'assets/img/spring/sb125.webp',
      imgAlt: 'Evergreen Shower Blows 125',
      situation: 'Fish are blowing up the surface. Rotate in throughout the day.',
      conditions: 'Any; Excels during low light and/or "high-noon" sun. \
      Helpful if there\'s at least a light "chop" on the water.',
      notes: 'Vary the retrieve.',
      affiliateLink: 'https://www.tacklewarehouse.com/search-tackle.html?start=0&count=30&searchtext=shower+blows',
      linkLabel: 'Tackle Warehouse'
    },
    { 
      season: 'spring',
      label: 'Squarebill', 
      make: 'River2Sea Poppa Bumpin\'',
      colour: 'Cold Blooded',
      imgUrlMd: 'assets/img/spring/red-squarebill.webp',
      imgAlt: 'River2Sea Squarebill (Poppa Bumpin)',
      situation: 'Fish are actively roaming around, seemingly without an agenda.',
      conditions: 'Any; Light "chop" is helpful, at the least. Hard wind is good.',
      notes: 'Excels around rock, especially when fish are hunting/aggressive.',
      affiliateLink: 'https://www.tacklewarehouse.com/search-tackle.html?start=0&count=30&searchtext=river2sea+squarebill',
      linkLabel: 'Tackle Warehouse'
    },
  ];



  private summerBaits = [];
  private fallBaits = [];


  private baits = [
    
    { 
      season: 'home',
      label: 'Jerkbait 2', 
      make: 'Megabass Ito 110',
      colour: 'Mat Shad',
      imgUrl: 'assets/img/mat-shad.jpg',
      imgAlt: 'Megabass Jerkbait (Mat Shad)',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Cloudy / Dark',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'Tackle Warehouse'
    },
    { 
      season: 'home',
      label: 'Jerkbait 3', 
      make: 'Megabass Ito 110',
      colour: 'Crystal Shad',
      imgUrl: 'assets/img/crystal-shad.jpg',
      imgAlt: 'Megabass Jerkbait (Crystal Shad)',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Sunny / Bright',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'Tackle Warehouse'
    },
    { 
      season: 'home',
      label: 'Umbrella Rig', 
      make: 'Hog Farmer',
      colour: 'Default',
      imgUrl: 'assets/img/home/arig-hog-farmer.webp',
      imgAlt: 'Hog Farmer Umbrella Rig',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Any',
      affiliateLink: 'https://www.tacklewarehouse.com/Hog_Farmer_Baits_Tactical_Bassin_Mini_Flex_Rig_4_Blade/descpage-HTMF.html',
      linkLabel: 'Tackle Warehouse'
    },
    { 
      season: 'spring',
      label: 'Umbrella Rig', 
      make: 'Hog Farmer',
      colour: 'Default',
      // imgUrl: 'assets/img/home/arig-hog-farmer.webp',
      // imgUrl: 'assets/img/spring/sm-gg-perch.jpg',
      imgUrlMd: 'assets/img/spring/arig-sm.jpg',
      imgAlt: 'Hog Farmer Umbrella Rig',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Sunny / Bright',
      affiliateLink: 'https://www.tacklewarehouse.com/Hog_Farmer_Baits_Tactical_Bassin_Mini_Flex_Rig_4_Blade/descpage-HTMF.html',
      linkLabel: 'Tackle Warehouse'
      ,
      isVisible: true //Think of this as holding a bait in the package. 
      //..Front view of the package is the bait under plastic, 
      //...rear view is a bunch of info about the bait.
    },
    { 
      season: 'spring',
      label: 'Jerkbait 1',
      make: 'Megabass Ito 110+1',
      colour: 'GP Pro Perch',
      imgUrl: 'assets/img/gg-perch.jpeg',
      imgUrlMd: 'assets/img/spring/md-gg-perch.jpg',
      imgAlt: 'Megabass Jerkbait (GP-Pro-Perch)',
      situation: 'Perch are all over shallow. \
      They\'re heavily schooling and aggressively roaming.',
      conditions: 'Any',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_1101_Jerkbaits/descpage-MBIV11.html',
      linkLabel: 'Tackle Warehouse',
      // isVisible: true
    },
    { 
      season: 'spring',
      label: 'Jerkbait 2', 
      make: 'Megabass Ito 110',
      colour: 'Mat Shad',
      imgUrl: 'assets/img/spring/sm-gg-perch.jpg',
      imgUrlMd: 'assets/img/spring/mat-shad-sm.jpg',
      imgAlt: 'Megabass Jerkbait (Mat Shad)',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Cloudy / Dark',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'Tackle Warehouse'
      ,
      isVisible: true
    },
    { 
      season: 'spring',
      label: 'Jerkbait 3', 
      make: 'Megabass Ito 110',
      colour: 'Crystal Shad',
      imgUrl: 'assets/img/spring/sm-gg-perch.jpg',
      imgUrlMd: 'assets/img/spring/crystal-shad-sm.jpg',
      imgAlt: 'Megabass Jerkbait (Crystal Shad)',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Sunny / Bright',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'Tackle Warehouse'
      ,
      isVisible: true
    },
    {
      season: 'summer',
      label: 'Jerkbait 1',
      make: 'Megabass Ito 110',
      colour: 'GG Pro Perch',
      imgUrl: 'assets/img/spring/sm-gg-perch.jpg',
      imgUrlMd: 'assets/img/spring/md-gg-perch.jpg',
      imgAlt: 'Megabass Jerkbait (GG-Perch)',
      situation: 'Perch are all over shallow. \
      They\'re heavily schooling and aggressively roaming.',
      conditions: 'Any',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'Tackle Warehouse'
      ,
      isVisible: true
    },
    { 
      season: 'summer',
      label: 'Jerkbait 2', 
      make: 'Megabass Ito 110',
      colour: 'Mat Shad',
      imgUrl: 'assets/img/spring/sm-gg-perch.jpg',
      imgUrlMd: 'assets/img/spring/mat-shad-sm.jpg',
      imgAlt: 'Megabass Jerkbait (Mat Shad)',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Cloudy / Dark',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'Tackle Warehouse'
      ,
      isVisible: true
    },
    { 
      season: 'summer',
      label: 'Jerkbait 2', 
      make: 'Megabass Ito 110',
      colour: 'Mat Shad',
      imgUrl: 'assets/img/spring/sm-gg-perch.jpg',
      imgUrlMd: 'assets/img/spring/mat-shad-sm.jpg',
      imgAlt: 'Megabass Jerkbait (Mat Shad)',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Cloudy / Dark',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'Tackle Warehouse'
      ,
      isVisible: true
    },
    { 
      season: 'summer',
      label: 'Jerkbait 2', 
      make: 'Megabass Ito 110',
      colour: 'Mat Shad',
      imgUrl: 'assets/img/spring/sm-gg-perch.jpg',
      imgUrlMd: 'assets/img/spring/mat-shad-sm.jpg',
      imgAlt: 'Megabass Jerkbait (Mat Shad)',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Cloudy / Dark',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'Tackle Warehouse'
      ,
      isVisible: true
    },
    { 
      season: 'summer',
      label: 'Jerkbait 2', 
      make: 'Megabass Ito 110',
      colour: 'Mat Shad',
      imgUrl: 'assets/img/spring/sm-gg-perch.jpg',
      imgUrlMd: 'assets/img/spring/mat-shad-sm.jpg',
      imgAlt: 'Megabass Jerkbait (Mat Shad)',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Cloudy / Dark',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'Tackle Warehouse'
      ,
      isVisible: true
    },
    { 
      season: 'summer',
      label: 'Jerkbait 2', 
      make: 'Megabass Ito 110',
      colour: 'Mat Shad',
      imgUrl: 'assets/img/spring/sm-gg-perch.jpg',
      imgUrlMd: 'assets/img/spring/mat-shad-sm.jpg',
      imgAlt: 'Megabass Jerkbait (Mat Shad)',
      situation: 'Shad balls are prevalent on sonar & less perch are around.',
      conditions: 'Cloudy / Dark',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'Tackle Warehouse'
      ,
      isVisible: true
    },
    { label: 'Topwater', season: 'fall' },
    { label: 'Plastic worm', season: 'fall' },
  ];

  constructor() {}

  getBaitsBySeason(season: string) {
    return this.baits.filter(bait => bait.season === season);
  }

  getAllBaits() {
    return this.baits;
  }

  getAllSeasonBaits(){
    return this.allSeasonBaits;
  }

  getHomeBaits(){
    return this.hotBaits;
  }

  getSpringBaits(){
    return this.springBaits;
  }

  
}
