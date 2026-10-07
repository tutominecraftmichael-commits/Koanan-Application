import React from 'react';
import { WaitlistModal } from './WaitlistModal';
import type { PlanTier } from '../../types';

export interface ProFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureTitle?: string;
  featureDescription?: string;
  requiredTier?: PlanTier;
  userEmail?: string;
  userId?: string;
  onViewPricing?: () => void;
  onUpgradeToPro?: () => void;
}

/**
 * Modale de verrouillage de fonctionnalité Pro / Plus.
 * Redirige désormais strictement vers la liste d'attente Mobile Money (Wave / Orange Money)
 * sans aucun faux achat ou déblocage gratuit imprévu.
 */
export const ProFeatureModal: React.FC<ProFeatureModalProps> = ({
  isOpen,
  onClose,
  featureTitle = 'Fonctionnalité réservée aux membres Pro',
  featureDescription,
  requiredTier = 'pro',
  userEmail = '',
  userId = '',
}) => {
  return (
    <WaitlistModal
      isOpen={isOpen}
      onClose={onClose}
      featureTitle={featureTitle}
      featureDescription={featureDescription}
      requiredTier={requiredTier}
      userEmail={userEmail}
      userId={userId}
    />
  );
};
