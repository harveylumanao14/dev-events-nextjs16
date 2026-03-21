export interface EventData {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  description?: string;
}

export const events: EventData[] = [
  {
    image: '/images/event1.png',
    title: 'React Conf 2026',
    slug: 'react-conf-2026',
    location: 'Online / Multiple Cities',
    date: '2026-06-15',
    time: '10:00 AM',
    description: 'Official React event with sessions on React 19, Server Components, and performance.'
  },
  {
    image: '/images/event2.png',
    title: 'Google I/O 2026',
    slug: 'google-io-2026',
    location: 'Mountain View, CA',
    date: '2026-05-13',
    time: '9:00 AM',
    description: 'Annual developer conference for Android, Web, AI, and Cloud announcements.'
  },
  {
    image: '/images/event3.png',
    title: 'JSConf EU',
    slug: 'jsconf-eu',
    location: 'Berlin, Germany',
    date: '2026-07-01',
    time: '10:00 AM',
    description: 'Top JavaScript conference with community talks and workshops.'
  },
  {
    image: '/images/event4.png',
    title: 'GitHub Universe',
    slug: 'github-universe',
    location: 'San Francisco, CA',
    date: '2026-09-23',
    time: '9:30 AM',
    description: 'GitHub’s flagship event for developers and open source leaders.'
  },
  {
    image: '/images/event5.png',
    title: 'AWS re:Invent 2026',
    slug: 'aws-reinvent-2026',
    location: 'Las Vegas, NV',
    date: '2026-11-28',
    time: '8:00 AM',
    description: 'Cloud and infrastructure conference covering AWS breakthroughs and workshops.'
  },
  {
    image: '/images/event6.png',
    title: 'DevOpsDays London 2026',
    slug: 'devopsdays-london-2026',
    location: 'London, UK',
    date: '2026-10-14',
    time: '9:00 AM',
    description: 'Community-driven DevOps event featuring hands-on sessions and case studies.'
  }
];
