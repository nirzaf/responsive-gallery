import React from 'react';
import { ImageGallery } from './components/ImageGallery';
import { NewsImage } from './types';

const newsImages: NewsImage[] = [
  {
    url: 'https://ik.imagekit.io/sackoba/news/Badminton_tournament_winners_and_sponsors.jpg?updatedAt=1734691334222',
    title: 'Badminton Tournament Champions',
    description: 'Winners and sponsors of the SACKOBA Qatar Badminton Tournament celebrating their achievement.',
    category: 'Sports'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/Sri_Lankan_community_badminton_tournament_event_group.jpg?updatedAt=1734691334396',
    title: 'Community Badminton Event',
    description: 'Sri Lankan community members gathered for the annual badminton tournament.',
    category: 'Events'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/Sri_Lanka_Old_Boys_Association_Event.jpg?updatedAt=1734691334256',
    title: 'Old Boys Association Gathering',
    description: 'SACKOBA Qatar members at a special association event.',
    category: 'Events'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/SACKOBA_Cricket_Team_Champions_Group_Photo.jpg?updatedAt=1734691334402',
    title: 'Cricket Champions',
    description: 'SACKOBA Qatar Cricket Team celebrating their championship victory.',
    category: 'Sports'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/Rizlan_receives_award_at_Doha_Antonians_meeting.jpg?updatedAt=1734691334287',
    title: 'Award Ceremony',
    description: 'Rizlan receiving an award at the Doha Antonians meeting.',
    category: 'Recognition'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/Rayyan_Talons_Smash_Badminton_Tournament_Poster.jpg?updatedAt=1734691334575',
    title: 'Rayyan Talons Smash Tournament',
    description: 'Upcoming badminton tournament organized by SACKOBA Qatar.',
    category: 'Announcements'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/Sri_Lankan_Badminton_Event_Team_Photo.jpg?updatedAt=1734691334550',
    title: 'Badminton Event Teams',
    description: 'Team photo from the Sri Lankan Badminton Tournament.',
    category: 'Sports'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Image Gallery</h1>
        <ImageGallery images={newsImages} gap="md" />
      </div>
    </div>
  );
}

export default App;