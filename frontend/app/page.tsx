import Navbar from '@/components/base/Navbar';
import HeroSection from '@/components/base/HeroSection';
import FeatureSection from '@/components/base/FeatureSection';
import UserReviews from '@/components/base/UserReviews';
import Footer from '@/components/base/Footer';
import { authOption, CustomSession } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { fetchChatGroups } from './fetch/groupFetch';
export default async function LandingPage() {
  const session: CustomSession | null = await getServerSession(authOption);
  // Fetch chat groups
  const groups: Array<ChatGroupType> | [] = await fetchChatGroups(
    session?.user?.token!
  );
  console.log('The groups are', groups); 
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Navbar user={session?.user ?? null} />
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
