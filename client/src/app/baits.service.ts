import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaitsService {

  private baits = [
    { 
      season: 'home',
      label: 'Jerkbait 1',
      make: 'Megabass Ito 110',
      colour: 'GG Pro Perch',
      imgUrl: 'assets/img/gg-perch.jpeg',
      imgAlt: 'Megabass Jerkbait (GG-Perch)',
      situation: 'Perch are all over shallow. \
      They\'re heavily schooling and aggressively roaming.',
      conditions: 'Any',
      affiliateLink: 'https://www.tacklewarehouse.com/Megabass_Ito_Vision_110_Jerkbaits/descpage-MB110.html',
      linkLabel: 'See on Tackle Warehouse'
    },
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
      linkLabel: 'See on Tackle Warehouse'
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
      linkLabel: 'See on Tackle Warehouse'
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
      linkLabel: 'See on Tackle Warehouse'
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
      linkLabel: 'See on Tackle Warehouse'
      ,
      isVisible: true //Think of this as holding a bait in the package. 
      //..Front view of the package is the bait under plastic, 
      //...rear view is a bunch of info about the bait.
    },
    { 
      season: 'spring',
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
      linkLabel: 'See on Tackle Warehouse'
      ,
      isVisible: true
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
      linkLabel: 'See on Tackle Warehouse'
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
      linkLabel: 'See on Tackle Warehouse'
      ,
      isVisible: true
    },
    { label: 'Jig', season: 'summer' },
    { label: 'Swimbaits', season: 'summer' },
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

  toggleBaitInfo(i: number){
    return this.baits[i].isVisible = !this.baits[i].isVisible;
  }
}
