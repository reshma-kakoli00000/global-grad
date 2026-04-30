'use client';

import Layout from '@/components/Layout';
import FeaturesHero from '@/components/features/FeaturesHero';
import ApplicationPipeline from '@/components/features/ApplicationPipeline';
import FeatureGrid from '@/components/features/FeatureGrid';
import DocumentVault from '@/components/features/DocumentVault';
import StatsSection from '@/components/features/StatsSection';
import FeaturesCTA from '@/components/features/FeaturesCTA';

export default function FeaturesPage() {
  return (
    <Layout>
      <FeaturesHero />
      <ApplicationPipeline />
      <FeatureGrid />
      <DocumentVault />
      <StatsSection />
      <FeaturesCTA />
    </Layout>
  );
}
